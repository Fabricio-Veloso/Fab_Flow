import { App, Modal, Setting,  ButtonComponent, Notice } from "obsidian";
import {ProjectInfo} from "../../classes/projectInfo";

export class projectInfoModal extends Modal {


	project: ProjectInfo = new ProjectInfo();
	resolve: (data: ProjectInfo | null) => void = () => {};

	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const { contentEl } = this;

		contentEl.createEl('h2', { text: 'Crie seu novo projeto' });

		// Nome do projeto
		new Setting(contentEl)
			.setName("Project Name")
			.setDesc("Type Your Project Name")
			.addText(text => text.onChange(value => this.project.name = value))

		// Escopo do projeto
		new Setting(contentEl)
			.setName("Scope")
			.setDesc("Type a Scope for your Project")
			.addText(text => text.onChange(value => this.project.scope= value))

		new Setting(contentEl)
			.setName("Status")
			.setDesc("What brought this project into existence?")
			.addTextArea(text => {
				const now = new Date();
				const dateStr = now.toISOString().split("T")[0]; 
				const timeStr = now.toTimeString().split(" ")[0]; 
				const defaultValue = `### ${dateStr}\n#### ${timeStr}\n- Filling this document.`;

				text.setValue(defaultValue); 

				this.project.status = defaultValue; 

				text.onChange(value => {
					this.project.status = value; 
				});
			});

		new Setting(contentEl)
			.setName("Context")
			.setDesc("What brough this project in to existence?")
			.addTextArea(text => text
				.onChange(value => this.project.context= value));

		new Setting(contentEl)
			.setName("Files")
			.setDesc("Links? Books names?")
			.addTextArea(text => text
				.onChange(value => this.project.files= value));

		new Setting(contentEl)
			.setName("Objectives")
			.setDesc("With this project i whant to...")
			.addTextArea(text => text
				.onChange(value => this.project.objectives= value));

		new Setting(contentEl)
			.setName("RoadMap")
			.setDesc("First i will do this big thing, then do that other big thing.")
			.addTextArea(text => text
				.onChange(value => this.project.roadmap= value));


		new Setting(contentEl)
			.addButton((button: ButtonComponent) => {
				button.setButtonText("Create").onClick(() => {
					try {
						this.project.validate();
						this.close();
						this.resolve(this.project);
					} catch (e: any) {
						new Notice(e.message || "Please fill in required fields.");
					}
				});
			});
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}

	open(): Promise<ProjectInfo | null> {
		return new Promise(resolve => {
			this.resolve = resolve;
			super.open();
		});
	}
}

