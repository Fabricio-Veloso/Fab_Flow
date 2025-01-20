import { Plugin } from 'obsidian';
import {createNewEventCb} from './createNewEventcb';

export function registerCreateNewEvent(plugin: Plugin) {
    plugin.addCommand({
        id: 'your-plugin-id:command-one',
        name: 'Create new event',
        callback: createNewEventCb,
    });
}

