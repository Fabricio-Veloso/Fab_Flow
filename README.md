# 🚀 Project-Flow

**Systematic project structure generation + activity tracking + metadata logging for real planning**

---

## 🎯 Objective

This project aims to create tools to:

1. 🏗️ Build and generate project structures in a **systematic** and **modular** way.
2. ♻️ Make it easier and more dynamic to:
    - ✅ Organize and inject **status**, **checkpoints**, and **accomplishments** for activities and projects.
    - ⏱️ Track **time investment** on activities in an organized manner.
    - 🗂️ Log all the above in a **structured** and **easy-to-find** format.
    - 📊 Generate **metadata** from this flow for **future planning** and **decision-making**.

---

## 💻 Requirements

Make sure you have the following installed:

- 🧠 [Obsidian](https://obsidian.md/)
- 🐙 Git
- 📦 NPM

---

## ✨ Features

### 🧱 `Create Project` Command (~~DONE~~)

- Launches modals to capture the **project name** and **scope**, followed by activity definition.
- You must fill in the **area/column name** (e.g., _Documentation_, _Database_, or _Design_).
- Then define the first activity:
    - ⚠️ _Only_ `name` and `type` are **required**.
    - 🏷️ Name
    - 🔧 Type (Simple or Complex)
    - 📎 Context
    - 🔗 Files (e.g., relevant links or references)
    - 🎯 Objectives
    - 🗺️ Roadmap
- You can then:
    - ➕ Add more activities to the column
    - ➕ Create a new column
    - 💾 Save and generate the full project structure

#### ✅ Generated Structure Includes:

- 📁 Folders for:
    - `Scope/`
    - `Active Projects/`
    - `[Project Name]/`
    - `Notes from Cards/` (activity cards)
- 📝 A note titled: `ProjectName_h`
    - Acts as the **project header**, containing:
        - Status
        - Files
        - Context
        - Objectives
        - Roadmap
- 🗂️ A **Kanban board**:
    - Activities appear as **cards** in their respective **columns**
    - Each card links to a note in `"Notes from Cards"` with all filled information
    - [ ] _(Insert screenshot here)_

---

### 🧭 “Landing Page” Model (_LPM_) (📌 Rename suggestion pending)

- When opening Obsidian with **Fab-Flow Plugin** enabled:
    - A modal with pending activities appears.
    - Activities can be assigned to **time slots** using a Google Calendar–style interface.
    - Ends with a “Start Realizing” button (or similar).

---

### 🌊 Flow State Flux (_FSF_) (📌 Name suggestion pending)

- While executing selected activities, a timer runs in the background.
- ⌨️ Hotkeys allow rapid notes that go directly to the `status` field of the activity’s note.
- ⏹️ When the timer ends, FSF halts and waits for next user input.

#### Upon returning to FSF:

- **If return is quick:**
    - User may:
        - Move to the **next activity** (after logging or skipping)
        - Overflow time for the current activity (_in defined periods_)
        - In all cases, a **log entry is required** and goes to the activity’s `status`
- **If return is late:**
    - Prompted to log what was done
    - If needed, user can **reallocate** past time across multiple activities and write logs
- ⏳ Time not allocated to any activity is recorded as **dead time**

---

## ✅ TODO

- [ ] 🧩 Allow creation of standalone activities (choose scope, project, and column) **(Must)**
- [ ] 🔁 Allow saving a column without automatically creating the next one **(Must)**
- [ ] 🕐 Allow tagging "dead time" with alternative labels (pause, rest, etc.) **(Must)**
- [ ] ⚡ Quick register system for non-LPM activities
- [ ] ⏰ Insert reminders into activity timers (e.g., "Yoga Time")
- [ ] 🌐 Add multi-language support
- [ ] 🧱 GUI to create custom project modules (folder structures, templates, etc.)
- [ ] 🎞️ UI animations for better user feedback _(Low priority)_
- [ ] Make a Docker File for ease testing.
- [ ] Make ascript or todo to explain how to install and use the plugin.
- [ ] Create a button for "import file as header" in the CreateProject flux.(would alow a lot of control to the user already)
- [ ] Make possible to link activities to repos to link commits in to activities timesspams.

---

## 📝 Notes

> %% I'd like to include the actual folder structure of this project so people can follow along — but all logs are in Portuguese for now. Maybe someday. %%  
> %% Yes, much of the plugin’s current content is in Portuguese (it's being translated). %%

⚠️ _NOBODY IS RESPONSIBLE FOR ANY DAMAGE TO YOU OR YOUR VAULTS WHILE USING THIS PLUGIN_  
 ee https://github.com/obsidianmd/obsidian-api
