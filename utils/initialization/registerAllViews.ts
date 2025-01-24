import {Plugin} from "obsidian";
import {registerCommandsPanel} from "../../components/views/CommandsPanel/registerCommandsPanel";

export function registerAllViews(plugin: Plugin){
	registerCommandsPanel(plugin);	
}
