import {Plugin} from "obsidian";
import {createNewTaskCb} from './createNewTaskCb'
import {PLUGIN_ID} from '../../consts'

export function registerCreateNewTask(plugin:Plugin) {
    plugin.addCommand({
        id: `${PLUGIN_ID}:create-new-task`,
        name: 'Create New Task',
        callback:createNewTaskCb,
    });
}


