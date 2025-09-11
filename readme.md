# Relic Synergy Tracker Web App

This web app allows users to track and calculate synergy scores for tasks based on selected relics. It dynamically filters, searches, and sorts tasks, providing a visual representation of synergy scores for easier gameplay planning.

---

## Features

- **Relic Selection:** Click relics to select them. Each relic contributes synergy points to tasks.
- **Task Synergy Calculation:** Tasks display a synergy score based on selected relics and passive synergies.
- **Filtering & Searching:** Filter tasks by area and search by task name, requirements, or area.
- **Sorting:** Sort tasks by points or synergy score.
- **Visual Indicators:** Synergy scores are highlighted with different colors for quick reference.

---

## File Structure

/project-root
├── index.html # Main HTML file
├── style.css # Stylesheet
├── script.js # Main JavaScript logic
├── /data
│ ├── relics.json # Relic data
│ └── task.json # Task data
├── /images # Relic images
└── README.md # This documentation


---

## Setup & Usage

1. **Clone or Download the Repository**  
   Make sure the `/data` folder contains `relics.json` and `task.json`. The `/images` folder should contain images for your relics.

2. **Open in Browser**  
   Open `index.html` in your preferred web browser.

3. **Using the App**  
   - **Select Relics:** Click any relic in the displayed tiers to select it. Selected relics will calculate synergy for tasks.  
   - **Filter by Area:** Use the area dropdown (if available) to filter tasks by area.  
   - **Search Tasks:** Type in the search box to filter tasks by name, requirements, or area.  
   - **Sort Tasks:** Use the sort dropdown to sort by points or synergy score.  
   - **View Synergy:** Task rows are color-coded based on their synergy score:
     - Very High: 4–5 points
     - High: 3 points
     - Medium: 2 points
     - Low: 1 point
     - None: 0 points

4. **Synergy Summary:**  
   The total synergy points for all visible tasks are displayed at the bottom.

---

## Dependencies

This web app uses **vanilla JavaScript, HTML, and CSS**. No external libraries are required.

---

## Notes

- Ensure the `data` folder is accessible and the JSON files are correctly formatted.  
- Relic images should be named according to the JSON fields (e.g., `Relic1Image`, `Relic2Image`) and placed in the `/images` folder.

---

## Troubleshooting

- **Tasks or Relics Not Showing:** Check that `relics.json` and `task.json` are in `/data/` and that `index.html` references them correctly.  
- **Synergy Not Calculating:** Ensure the `Synergy` or `PassiveSynergy` arrays exist in your relic objects.

---

## License

This project is free to use and modify.
