import { App, Modal, Setting } from 'obsidian';

export class hotkeysModal extends Modal {
  constructor(app: App) {
    super(app);
  }

  onOpen() {
	const contentEl = this;
	/* shows a prompt saying the imortance of setting hotkeys to the user*/ 
	//	shows the hot keys that are unset
	}

  onClose() {
    const { contentEl } = this;
    contentEl.empty(); 
	}

}
