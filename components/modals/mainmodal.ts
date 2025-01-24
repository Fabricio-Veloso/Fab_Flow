import { App, Modal, Setting } from 'obsidian';

export class mainModal extends Modal {
  constructor(app: App) {
    super(app);
  }

  onOpen() {
    const { contentEl } = this;
	
	//if there is any tasks from projects, show the by priority
	// show the optons folowed by there reespective shotcuts
		//cals a function to get all the comands
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

