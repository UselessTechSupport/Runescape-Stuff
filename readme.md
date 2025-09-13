# Catalyst League Planner

A web-based tool for planning and optimizing your relic selections and tasks in **RS3 Leagues (Catalyst League)**. It helps you identify the most synergistic tasks based on your chosen relics or custom synergy rules.

---

## 🌟 Features

- **Relic Planner**:  
  Select relics by tier with a visually enhanced dropdown including relic images. See active and passive synergies and view your selected relic build in a detailed table.

- **Custom Synergy Rules**:   - Mostly working
  Create and save custom synergy rules with category selection. Toggle categories to tailor task recommendations. Delete or modify saved custom synergies easily.

- **Route Planner**:  
  Filter tasks by in-game areas. Quickly toggle between "All Areas" or specific locations.

- **Task Tracker**:  - Mostly working
  Search, sort, and filter tasks by points or synergy. Tasks are color-coded based on synergy score for easy prioritization.

- **Synergy Scoring**:  
  Tasks are scored based on relics or custom synergies. Top scoring tasks are highlighted dynamically.

- **Category Filtering**: -WIP  
  Filter tasks by activity type (Clues, Gathering, Production, Combat, Skilling, Utility, Dungeons, Bossing, Slayer, PVM, General) with intuitive emoji labels.

- **Local Storage Persistence**:  
  Selected relics and custom synergies persist across sessions automatically.

- **Interactive UI**:  

---

## 🖥️ Usage

1. Open the https://uselesstechsupport.github.io/Runescape-Stuff/ in your browser.  
2. Use the **Relic Planner** to select relics for each tier. Images are shown where available.  
3. Optional: Define **Custom Synergy Rules** by entering a name, selecting categories, and saving them.  
4. Use the **Route Planner** to filter tasks by specific areas.  
5. Explore the **Task Tracker** to see points, requirements, and synergy scores.  
6. Filter tasks by category using the buttons above the task table.  
7. Sort tasks using the dropdown by points or synergy.  
8. Switch between **Relic Synergy** and **Custom Synergy** mode using the toggle.  
9. Clear your relic selection using the "Clear Relics" button.  
10. Synergy scores, top tasks, and your relic build table update automatically.



To run the Catalyst League Planner locally on your computer:

1. **Clone or download the repository**  

>     bash
>     git clone https://github.com/UselessTechSupport/Runescape-Stuff.git

or download the ZIP and extract it.

2. **Ensure JSON data files are present**
Make sure relics.json and tasks.json are in the same folder as index.html.

3. **Open index.html in a browser**
Simply double-click the index.html file, or right-click and select Open With → Browser.

⚠️ Some browsers may block local JSON fetching due to CORS restrictions. If tasks or relics don’t load, use a local web server:

4. **(Optional) Run a simple local server**
Python 3:

>     bash
>     cd path/to/project
>     python -m http.server 8000

Then open http://localhost:8000 in your browser.

Node.js (http-server):

  >     bash
   >     npm install -g http-server
   >     cd path/to/project
   >     http-server

Then open the URL shown in the terminal.

5. **Start planning**

Use the Relic Planner to select relics for each tier. Images are shown where available.

Define Custom Synergy Rules by entering a name, selecting categories, and saving them.

Filter tasks by Route Planner or category buttons above the task table.

Sort tasks using the dropdown by points or synergy.

Switch between Relic Synergy and Custom Synergy modes using the toggle.

Clear relics or reset custom synergies as needed.

All selections and custom rules are automatically saved in your browser’s LocalStorage.
---

## 📦 File Structure

> All functionality is contained in `index.html` and relies on `relics.json` and `tasks.json`.  

- `index.html` – main application with HTML, CSS, and JS  
- `relics.json` – relic definitions, synergies, images  
- `tasks.json` – task definitions, categories, points  

---

## ⚙️ Technologies Used

- **HTML5 & CSS3**  
- **JavaScript (Vanilla)**  
- **Tailwind CSS** for styling  
- **LocalStorage API** for saving state  

---

## 🎨 Styling & UI

- Clean, responsive design using TailwindCSS  
- Relic dropdowns with optional images  
- Task synergy scores highlighted with color-coded backgrounds:  
  - Top Synergy: `#bbf7d0`  
  - High: `#d1fae5`  
  - Medium: `#fef3c7`  
  - Low: `#f9fafb`  
- Interactive buttons for selecting relics, areas, custom synergies, and task filters  

---

## 💡 Notes

- Relic and task data are loaded from JSON files for easy updates.  
- Custom synergies and selected relics persist via **LocalStorage**.  
- All features run client-side; no server is required.  
- Synergy calculations are capped at 5 points per task.  

---

## 🔗 Future Improvements

- Enhanced mobile responsiveness  
- Export/import custom synergy builds  
- Add relic and task icons where missing  
- Advanced filtering by multiple criteria simultaneously  

---

## 📜 License

This project is open-source and free to use.
