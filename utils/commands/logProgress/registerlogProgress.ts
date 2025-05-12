import {Plugin} from "obsidian";
import {logProgressCb} from './logProgressCb'
import {PLUGIN_ID} from '../../consts'

export function registerlogProgress(plugin: Plugin) {
	plugin.addCommand({
		id: `${PLUGIN_ID}:logProgressComment`,
		name: "logProgressComment",
		callback: () => logProgressCb(plugin.app, plugin)
	});
}


