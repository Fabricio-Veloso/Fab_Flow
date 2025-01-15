import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import {startModal} from './components/startModel'
import {ProjectFlowInit} from './utils/init';

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

		let initSucces = ProjectFlowInit(currentVault,DEFAULT_SETTINGS.isSetupDone);

		if(initSucces === 0){
			console.log(' the initialization was a succes');
			this.settings.isSetupDone = true;
			this.saveSettings();
		}

		if(initSucces === 1){
			console.log(' the initialization failed')
		}
	}

	onunload() {

	}




	async loadSettings() {
		const savedSettings = await this.loadData() || {};

		this.settings = Object.assign({}, DEFAULT_SETTINGS, savedSettings);

		if (!this.settings.isSetupDone) {
		  this.settings = Object.assign({}, this.settings, DEFAULT_SETTINGS);
		} else {
		  console.log('Setup status loaded as previously done');
		}
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}





class SampleSettingTab extends PluginSettingTab {
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
			
	}
}
