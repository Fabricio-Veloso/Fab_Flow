import { App, Modal } from 'obsidian';

export class ExampleModal extends Modal {
  constructor(app: App) {
    super(app);
	// start modal
	//	Shows the list on the modal as a table.
	//  awhaits for the user do some thing 
	//	
	this.setContent('Look at me, I\'m a modal! 👀')
  }
}
