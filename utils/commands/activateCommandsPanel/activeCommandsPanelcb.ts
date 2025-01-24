import {App, WorkspaceLeaf} from "obsidian";
import { VIEW_TYPE_COMMANDS_PANEL } from '../../consts';

export async function activeCommandsPanelcb(app: App) {
  if (!app) {
    console.error('O parâmetro `app` está indefinido.');
    return;
  }

  const { workspace } = app;

  let leaf = workspace.getLeavesOfType(VIEW_TYPE_COMMANDS_PANEL)[0];

  if (!leaf) {
    leaf = workspace.getRightLeaf(false);
    await leaf.setViewState({ type: VIEW_TYPE_COMMANDS_PANEL, active: true });
  }

  workspace.revealLeaf(leaf);
}

