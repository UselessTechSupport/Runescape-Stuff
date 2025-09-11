# RS3 Leagues Synergy Planner

A web-based tool for planning and optimizing your relic selections and tasks in **RS3 Leagues**. It helps you identify the most synergistic tasks based on your chosen relics or custom synergy rules.

---

## 🌟 Features

- **Relic Planner**: Select relics by tier and see their active and passive synergies.
- **Custom Synergy Rules**: Create your own synergy rules to tailor task recommendations.
- **Route Planner**: Filter tasks by game areas.
- **Task Tracker**: Search, sort, and view tasks with synergy scores.
- **Synergy Scoring**: Tasks are scored based on selected relics or custom synergies.
- **Local Storage**: Automatically saves your selected relics and custom synergies between sessions.

---

## 🖥️ Usage

1. Open the `index.html` file in your browser.
2. Use the **Relic Planner** to select your relics for each tier.
3. Optional: Define **Custom Synergy Rules** using the input box and category checkboxes.
4. Use the **Route Planner** to filter tasks by area.
5. Explore the **Task Tracker** to see points, requirements, and synergy scores.
6. Sort tasks by points or synergy using the dropdown.
7. Synergy scores and top tasks are automatically updated as you select relics or custom synergies.

---

## 📦 File Structure
├── index.html # Main HTML, CSS, and JavaScript
├── README.md # This file
└── .gitignore # Optional: ignore temporary or sensitive files

> All functionality is self-contained in `index.html` using TailwindCSS.

---

## ⚙️ Technologies Used

- **HTML5 & CSS3**  
- **JavaScript (Vanilla)**  
- **Tailwind CSS** for styling  
- **LocalStorage API** for saving state  

---

## 🎨 Styling & UI

- Clean, responsive design using TailwindCSS
- Synergy scoring highlighted with color-coded backgrounds:
  - Very High: `#a7f3d0`
  - High: `#d1fae5`
  - Medium: `#fef3c7`
  - Low: `#fee2e2`
- Interactive buttons for selecting relics, areas, and custom synergies.

---

## 💡 Notes

- Relic and task data are stored as arrays inside the script for quick access.
- Custom synergies and selected relics persist using **LocalStorage**.
- All features run client-side; no server is required.

---

## 🔗 Future Improvements

- Add relic icons and images for better visualization.
- Export/import custom synergy builds.
- Enhanced filtering and sorting by multiple criteria.
- Mobile-friendly improvements.

---

## 📜 License

This project is open-source and free to use.

---

## 👨‍💻 Author

Created for RS3 Leagues planning and synergy optimization.  
