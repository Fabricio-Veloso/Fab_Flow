import {Plugin} from "obsidian";
import {logProgressCommentCb} from './logProgressCommentCb'
import {PLUGIN_ID} from '../../consts'

export function registerlogProgressComment(plugin: Plugin) {
	plugin.addCommand({
		id: `${PLUGIN_ID}:logProgressComment`,
		name: "logProgressComment",
		callback: () => logProgressCommentCb(plugin)
	});
}


