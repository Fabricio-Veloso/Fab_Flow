import {Plugin} from "obsidian";
import {registerCreateNewTask} from "../commands/createNewTask/registerCreateNewTask"
import {registerCreateNewProject} from "../commands/createNewProject/registerCreateNewProject"
import {registerCreateNewEvent} from "../commands/createNewEvent/registerCreateNewEvent"

export function registerAllCommands(plugin: Plugin){
	registerCreateNewTask(plugin);	
	registerCreateNewProject(plugin);
	registerCreateNewEvent(plugin);
}

