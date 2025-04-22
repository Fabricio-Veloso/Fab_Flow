import { Plugin } from "obsidian";
import { createProjectCb } from "./createProjectCb";
import { PLUGIN_ID } from "../../consts";

export function registerCreateProject(plugin: Plugin) {
	plugin.addCommand({
		id: `${PLUGIN_ID}createProject`,
		name: "Criar novo projeto",
		callback: () => createProjectCb(plugin.app, plugin),
	});
}

