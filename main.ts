import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import {startModal} from './components/startModel.ts'
import {ProjectFlowInit} from './utils/init.ts';

interface ProjectFlowSettings {
	isSetupDone: boolean;
}

const DEFAULT_SETTINGS: ProjectFlowSettings = {
isSetupDone : false	
}


export default class ProjectFlow extends Plugin {
	settings: ProjectFlowSettings;

	async onload() {
		let currentVault = this.app.vault;

		await this.loadSettings();

		let initSucces = await ProjectFlowInit(currentVault,DEFAULT_SETTINGS.isSetupDone)	

		if(initSucces === true){
			console.log(' the initialization was a succes');
			this.settings.isSetupDone = true;
		}

		if(initSucces === false){
			console.log(' the initialization failed')
		}
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
