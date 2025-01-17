import { App, Modal, Setting } from 'obsidian';

export class startModal extends Modal {
  constructor(app: App) {
    super(app);
  }

  onOpen() {
    const { contentEl } = this;

    // Exemplo de adicionar um título ao modal
    contentEl.createEl('h2', { text: 'My Custom Modal' });

    // Exemplo de adicionar uma tabela ou lista
    const table = contentEl.createEl('table');
    const headerRow = table.createEl('tr');
    headerRow.createEl('th', { text: 'Column 1' });
    headerRow.createEl('th', { text: 'Column 2' });

    const dataRow = table.createEl('tr');
    dataRow.createEl('td', { text: 'Data 1' });
    dataRow.createEl('td', { text: 'Data 3' });

    // Exemplo de adicionar um botão que fecha o modal
    new Setting(contentEl)
      .addButton(btn => 
        btn.setButtonText('Close')
          .onClick(() => this.close())
      );
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty(); // Limpa o conteúdo do modal quando fechado
  }
}

