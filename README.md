# Introducing Project-Flow

This project aims to create tools to:

1. Build and generate project structures in a systematic and modular way.
2. Make it easier and more dynamic to:
    1. Organize and inject status updates, checkpoints, and accomplishments related to activities and projects.
    2. Track time investment on activities in an organized manner.
    3. Log all the above elements in a structured and accessible way.
    4. Use the entire flow to generate useful metadata for future planning and decision-making.

---

## Requirements

- Installed:
    - Git
    - Obsidian
    - NPM

---

## Features

### Create Project _Command_ (~~DONE~~)

- This command opens modals to capture the project's name and scope, followed by another modal for defining project activities.
- You should fill in the field for the area/column name (e.g., in an IT project: Documentation, Database, or Design).
- Then, provide the details of the first activity:
    - _Only the name and type are required_.
    - Name
    - Type (Simple or Complex)
    - Context
    - Files (e.g., links to web pages or relevant content)
    - Objectives
    - Roadmap
- You can then save that activity to the corresponding column.
- Add more activities to that column, create the next column, or save and generate the full project structure.

#### As a result:

The structure includes:

- Folders for:
    - Scope
    - Active Projects
    - The created project
    - All the cards representing the project activities (stored in a folder named `"Notes from Cards"`)
- A note titled `"ProjectName"_h`:
    - This acts as the project's **header**, containing:
        - Status
        - Files
        - Context
        - Objectives
        - Roadmap
- A Kanban board that includes:
    - All activities represented as Kanban cards in their respective areas/columns
    - Each card linked to a note in the `"Notes from Cards"` folder, containing the respective headers with all filled information
    - [ ] (Add a screenshot here)

---

### "Landing Page" Model (_LPM_) — _(Consider renaming?)_ (TODO)

- When opening Obsidian with the Fab-Flow plugin enabled:
    - A modal showing pending activities appears, allowing you to select which ones to work on.
    - You use a Google Calendar–style interface to allocate time slots for those activities.
    - This step ends when you click a button to "Start Session" (or similar).

---

### (No name yet — _Flow State Flux_?) (_FSF_) (TODO)

- While working on selected activities, a timer runs in the background.
- You can use hotkeys to quickly make notes, which are automatically added to the `status` section of that activity's note.
- When the chosen time ends, FSF pauses and waits for your next action.

#### Upon return:

- **If** you return shortly after time ends:
    - You can choose to:
        - Move to the next activity after registering time invested (or skipping the log).
        - Extend the current activity by defined periods (e.g., "I want to invest 15 more minutes on this").
        - In any case, you're prompted to register what was done. The entry is saved in the activity’s status section.
- **If** you return long after the timer ends:
    - You’re still prompted to register what was done.
    - If there was a large period of inactivity, you can allocate that time to different activities and write logs accordingly.
- **Any unallocated time is marked as "dead time"**.

---

## TODO

- [ ] Allow creation of activities independently by selecting scope, project, and area/column. (**Must**)
- [ ] Allow saving a column without automatically creating a new one. (**Must**)
- [ ] Allow tagging dead time with other labels such as "pause", "rest", etc. (**Must**)
- [ ] Enable fast registration for activities that were **not** selected in the LPM.
- [ ] Allow inserting reminders through the activity timers (e.g., “Yoga Time”).
- [ ] Add support for multiple languages.
- [ ] Provide a user-friendly UI to define custom project modules (simple folder structures should be easy to build; complex logic might not be).
- [ ] Add animations for some UI elements (nice to have, but low priority).

---

### Notes

- %% I'd like to include the actual structure used in this project so anyone can follow along — but all my logs are currently in Portuguese. Maybe one day. %%
- %% Yes, much of the plugin’s current text is in Portuguese (but it's being translated). %%
- _NOBODY IS RESPONSIBLE FOR ANY DAMAGE TO YOU OR YOUR VAULTS WHILE USING THIS PLUGIN._
  ee https://github.com/obsidianmd/obsidian-api
