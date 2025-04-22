import {Plugin} from "obsidian";
import {logProgressComment} from './logProgressCommentCb'
import {PLUGIN_ID} from '../../consts'

export function registerlogProgressComment(plugin: Plugin) {
	plugin.addCommand({
		id: `${PLUGIN_ID}:logProgressComment`,
		name: "logProgressComment",
		callback: () => logProgressComment(plugin)
	});
}


