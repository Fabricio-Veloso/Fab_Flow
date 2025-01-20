import {Plugin } from "obsidian";
import {createNewProjectCb} from './createNewProjectCb'
import {PLUGIN_ID} from '../../consts'

export function registerCreateNewProject(plugin : Plugin) {
    plugin.addCommand({
        id: `${PLUGIN_ID}:create-new-project`,
        name: 'Create New Project',
        callback:createNewProjectCb,
    });
}

