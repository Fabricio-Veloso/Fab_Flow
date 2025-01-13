import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import {startModal} from './components/startModel.ts'
// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings()}
	// check for obsidian open event
	// Search or a Project-Flow folder ( if its not created it creates one)
	// If there is a folder already created a Modal shal apear to notify the user  asking to rename or delete the folder with the conflicting name
	//
	//Creates a cards folder
	//Creates a project folder
	//
	//Goes to the kanban Config and set's it to de default bord folder to be the projects folder and the notes from card folder to be the cards folder	
	//
	//Cals the start modal
	//
	// start modal
	//	On start
	//    Goes to the projects folder
	//    Scrapes each card from each project Kanban Board
	//    Creates a list with them orded by Priority 
	//    Shows the list on the modal as a table.
	//
	//	

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {

		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
