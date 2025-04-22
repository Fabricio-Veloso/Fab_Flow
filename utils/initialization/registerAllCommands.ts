import {Plugin} from "obsidian";
import {registerCreateNewTask} from "../commands/createNewTask/registerCreateNewTask"
import {registerCreateNewEvent} from "../commands/createNewEvent/registerCreateNewEvent"
import { registerActiveCommandsPanel } from "../commands/activateCommandsPanel/registerActiveCommandsPanel";
import {registerCreateProject} from "../commands/CreateProject/registerCreateProject"
export function registerAllCommands(plugin: Plugin){
	registerCreateNewTask(plugin);	
	registerCreateNewEvent(plugin);
	registerActiveCommandsPanel(plugin);	
	registerCreateProject(plugin);
}

