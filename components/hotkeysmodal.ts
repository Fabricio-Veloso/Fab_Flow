import { App, Modal, } from 'obsidian';

export class hotkeysModal extends Modal {
  constructor(app: App) {
    super(app);
  }

  onOpen() {
	const contentEl = this;
		contentEl.contentEl
	// calls a function that get all the commands from the plugin. 
	// shows a headding and text to explanethe importance os creating shotcuts for the plugin use.
	//	shows the hot keys that are unset
	}

  onClose() {
    const { contentEl } = this;
    contentEl.empty(); 
	}

}
