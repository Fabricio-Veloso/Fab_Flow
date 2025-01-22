import { App, Modal } from 'obsidian';

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
      text: 'Configurar atalhos para o uso eficiente do plugin. Aqui estão os comandos disponíveis:',
    });

    this.commands.forEach((command) => {
      const commandContainer = contentEl.createEl('div', { cls: 'command-container' });

      commandContainer.createEl('span', { text: command.name, cls: 'command-name' });

      commandContainer.createEl('span', { text: ` (ID: ${command.id})`, cls: 'command-id' });
    });
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
}

