import { App, Modal } from 'obsidian';
import {PLUGIN_ID} from "../../utils/consts";
export class HotkeysModal extends Modal {
  private commands: any[];

  constructor(app: App, commands: any[]) {
    super(app);
    this.commands = commands;
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.createEl('h2', { text: 'Hotkeys for ProjectFlow' });


    contentEl.createEl('p', {
      text: 'For the optmal use of the project flow Plugin, you need to set all the keybinds',
    });

    contentEl.createEl('p', {
      text: 'Go to the settings\n->Hotkeys\n->search for ProjectFlow\n-> and set them up:',
    });
    this.commands.forEach((command) => {
      const commandContainer = contentEl.createEl('div', { cls: 'command-container' });

      const cleanName = command.name.replace(`${PLUGIN_ID}: `, '');

      const symbol = commandContainer.createEl('span', { cls: 'command-symbol' });
      symbol.innerText = '⌨️ '; // Substitua por outros símbolos, como 🛠️, ⭐, etc.

     const name = commandContainer.createEl('span', { text: cleanName, cls: 'command-name' });    });
	} 

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
}

