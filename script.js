// script.js

let relics = [];
let tasks = [];
let selectedRelics = {};
let synergyMode = 'relic';
let currentAreaFilter = 'all';

// --- DOM elements ---
const taskTableBodyEl = document.getElementById('task-table')?.querySelector('tbody');
const taskSearchEl = document.getElementById('task-search');
const sortByEl = document.getElementById('sort-by');
const synergySummaryEl = document.getElementById('synergy-summary');
const totalPointsEl = document.getElementById('total-synergy-points');
const relicsContainer = document.getElementById('relics-container');

// --- Fetch JSON data ---
const loadData = async () => {
  try {
    const [relicRes, taskRes] = await Promise.all([
      fetch('data/relics.json'),
      fetch('data/task.json')
    ]);

    relics = await relicRes.json();
    tasks = await taskRes.json();

    renderRelics();
    renderTasks();
  } catch (err) {
    console.error('Error loading JSON files:', err);
  }
};

// --- Calculate synergy score per task ---
const calculateRelicSynergyScore = (task) => {
  const taskCategory = task.Category || task.Area;
  let score = 0;

  relics.forEach(relicTier => {
    const selectedRelic = selectedRelics[relicTier.Tier];
    if (!selectedRelic) return;

    if (relicTier.PassiveSynergy?.includes(taskCategory)) score++;
    if (selectedRelic.Synergy?.includes(taskCategory)) score++;
  });

  return Math.min(score, 5); // cap at 5 points
};

// --- Render tasks ---
const renderTasks = () => {
  if (!taskTableBodyEl) return;

  let filteredTasks = tasks;

  // Filter by area
  if (currentAreaFilter !== 'all') {
    filteredTasks = filteredTasks.filter(task => task.Area === currentAreaFilter);
  }

  // Search filter
  const searchTerm = taskSearchEl?.value.toLowerCase() || "";
  filteredTasks = filteredTasks.filter(task =>
    task.Task.toLowerCase().includes(searchTerm) ||
    task.Requirements.toLowerCase().includes(searchTerm) ||
    task.Area.toLowerCase().includes(searchTerm)
  );

  let totalSynergyPoints = 0;
  filteredTasks = filteredTasks.map(task => {
    const synergyScore = synergyMode === 'relic'
      ? calculateRelicSynergyScore(task)
      : 0;
    totalSynergyPoints += synergyScore;
    return { ...task, synergyScore };
  });

  // Sorting
  const sortBy = sortByEl?.value || 'points-desc';
  filteredTasks.sort((a, b) => {
    if (sortBy === 'points-desc') return b.Points - a.Points;
    if (sortBy === 'points-asc') return a.Points - b.Points;
    if (sortBy === 'synergy-desc') return b.synergyScore - a.synergyScore;
  });

  taskTableBodyEl.innerHTML = '';

  filteredTasks.forEach(task => {
    const row = document.createElement('tr');

    let synergyClass = 'bg-white';
    if (task.synergyScore >= 4) synergyClass = 'synergy-score-very-high';
    else if (task.synergyScore === 3) synergyClass = 'synergy-score-high';
    else if (task.synergyScore === 2) synergyClass = 'synergy-score-medium';
    else if (task.synergyScore === 1) synergyClass = 'synergy-score-low';

    row.className = `border-b border-gray-200 transition-all duration-200 hover:bg-gray-50 ${synergyClass}`;
    row.innerHTML = `
      <td class="px-4 py-3 text-sm text-gray-900">${task.Task}</td>
      <td class="px-4 py-3 text-sm text-gray-900">${task.Points}</td>
      <td class="px-4 py-3 text-sm text-gray-900">${task.Requirements}</td>
      <td class="px-4 py-3 text-sm font-bold text-gray-900">${task.synergyScore}</td>
    `;
    taskTableBodyEl.appendChild(row);
  });

  totalPointsEl.textContent = totalSynergyPoints;
  synergySummaryEl?.classList.remove('hidden');
};

// --- Render relics ---
const renderRelics = () => {
  if (!relicsContainer) return;
  relicsContainer.innerHTML = '';

  relics.forEach(relicTier => {
    const tierDiv = document.createElement('div');
    tierDiv.className = "border p-4 rounded shadow bg-white mb-4";

    tierDiv.innerHTML = `
      <h2 class="text-xl font-bold mb-2">Tier ${relicTier.Tier}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-${relicTier.Relic4 ? 4 : 3} gap-4">
        ${['Relic1', 'Relic2', 'Relic3', 'Relic4'].filter(r => relicTier[r]).map(rKey => `
          <div class="text-center cursor-pointer" data-tier="${relicTier.Tier}" data-relic="${rKey}">
            <img src="images/${relicTier[`${rKey}Image`] || 'placeholder.webp'}" alt="${relicTier[rKey]}" class="w-24 h-24 mx-auto mb-2">
            <h3 class="font-semibold">${relicTier[rKey]}</h3>
            <p class="text-sm">${relicTier[`${rKey}Details`]}</p>
          </div>
        `).join('')}
      </div>
    `;

    relicsContainer.appendChild(tierDiv);
  });

  // Add click events
  relicsContainer.querySelectorAll('[data-tier]').forEach(el => {
    el.addEventListener('click', () => {
      const tier = el.getAttribute('data-tier');
      const relicKey = el.getAttribute('data-relic');
      const relicObj = relics.find(r => r.Tier == tier);

      selectedRelics[tier] = {
        name: relicObj[relicKey],
        Synergy: relicObj.Synergy || [],
        PassiveSynergy: relicObj.PassiveSynergy || [],
        Details: relicObj[`${relicKey}Details`] || ''
      };

      renderTasks(); // Update tasks with new synergy
    });
  });
};

// --- Event listeners ---
taskSearchEl?.addEventListener('input', renderTasks);
sortByEl?.addEventListener('change', renderTasks);

// --- Initialize ---
window.onload = loadData;
