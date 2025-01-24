import { Plugin, WorkspaceLeaf } from "obsidian"
import { VIEW_TYPE_COMMANDS_PANEL } from "../../../utils/consts"
import {CommandsPanelView} from "../../views/CommandsPanel/CommandsPanel";
import {activateCommandsPanelcb} from "../../../utils/commands/activateCommandsPanel/activeCommandsPanelcb";
export function registerCommandsPanel(plugin: Plugin){

    plugin.registerView(
      VIEW_TYPE_COMMANDS_PANEL,
      (leaf) => new CommandsPanelView(leaf)
    );

}
