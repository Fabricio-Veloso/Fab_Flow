import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import {startModal} from './components/startModel.ts'
import {ProjectFlowInit} from './utils/init.ts';

interface MyPluginSettings {
	isSetupDone: boolean;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
isSetupDone : false	
}


export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		let currentVault = this.app.vault; 
		await this.loadSettings()
		await	ProjectFlowInit(currentVault,DEFAULT_SETTINGS.isSetupDone)	
	}

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
