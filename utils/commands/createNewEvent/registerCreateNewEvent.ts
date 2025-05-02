import { Plugin } from 'obsidian';
import {createNewEventCb} from './createNewEventcb';
import {PLUGIN_ID} from "../../consts";

export function registerCreateNewEvent(plugin: Plugin) {
    plugin.addCommand({
        id: `${PLUGIN_ID}createNewEvent`,
        name: 'Create new event',
        callback: createNewEventCb,
    });
}

