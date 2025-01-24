import { Plugin } from 'obsidian';
import {PLUGIN_ID} from "../../consts.ts";
import { activeCommandsPanelcb } from "./activeCommandsPanelcb";

export function registerActiveCommandsPanel(plugin: Plugin){
	 plugin.addCommand({
	  id: `${PLUGIN_ID}openCommandsPanel`,
	  name: 'openCommandsPanel',
	  checkCallback: (checking: boolean) => {
		if (checking) return true; // Retorna true para indicar que o comando está disponível
		activeCommandsPanelcb(plugin.app); // Passa o `app` corretamente
	  },
	});

}
