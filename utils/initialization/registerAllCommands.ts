import {Plugin} from "obsidian";
import {registerCreateNewTask} from "../commands/createNewTask/registerCreateNewTask"
import {registerCreateNewProject} from "../commands/createNewProject/registerCreateNewProject"
import {registerCreateNewEvent} from "../commands/createNewEvent/registerCreateNewEvent"
import { registerActiveCommandsPanel } from "../commands/activateCommandsPanel/registerActiveCommandsPanel";

export function registerAllCommands(plugin: Plugin){
	registerCreateNewTask(plugin);	
	registerCreateNewProject(plugin);
	registerCreateNewEvent(plugin);
	registerActiveCommandsPanel(plugin);	
}

