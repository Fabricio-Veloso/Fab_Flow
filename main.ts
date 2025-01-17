import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import {startModal} from './components/startmodal'
import {ProjectFlowInit} from './utils/projectflowinit';

interface ProjectFlowSettings {
	isSetupDone: boolean;
	mySetting:string;
}

const DEFAULT_SETTINGS: ProjectFlowSettings = {
isSetupDone : false,	
mySetting : "test"
}

export default class ProjectFlow extends Plugin {
	settings: ProjectFlowSettings; 

	async onload() {
		
		let currentVault = this.app.vault;
		await this.loadSettings();
		this.addSettingTab(new ProjectFlowMainSettingTab(this.app, this));
		
		this.app.workspace.onLayoutReady(async() => {

		await ProjectFlowInit(currentVault,this.settings.isSetupDone);
		console.log(' the initialization was a succes');
		this.settings.isSetupDone = true;
		await this.saveSettings();
		});
	}

	onunload() {

	}


	async loadSettings() {
		const savedSettings = await this.loadData() || {};

		this.settings = Object.assign({}, DEFAULT_SETTINGS, savedSettings);

		if (!this.settings.isSetupDone) {
		  this.settings = Object.assign({}, this.settings, DEFAULT_SETTINGS);
		} else {
		  console.log('Setup status loaded as previously done'+ `${this.settings.isSetupDone}`);
		}
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class ProjectFlowMainSettingTab extends PluginSettingTab {
	plugin: ProjectFlow;

	constructor(app: App, plugin: ProjectFlow) {
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

		new Setting(containerEl)
		  .setName('Reset Settings')
		  .setDesc('Reset all settings to their default values.')
		  .addButton((button: ButtonComponent) => {
			button
			  .setButtonText('Reset')
			  .setTooltip('Reset to default settings')
			  .onClick(async () => {
				// Reset settings to default
				this.plugin.settings = { ...DEFAULT_SETTINGS };
				
				// Save the reset settings
				await this.plugin.saveSettings();
				
				// Optionally, you can show a confirmation message
				new Notice('Settings have been reset to default.');
			  });
		  });


			
	}
}
