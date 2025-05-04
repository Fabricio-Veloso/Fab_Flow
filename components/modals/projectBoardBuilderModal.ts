import {  Modal, Setting, TextComponent } from "obsidian";
import {ActivityData} from "../../interfaces/activityData";


export interface ColumnData {
	name: string;
	activities: ActivityData[];
}

export class ProjectBoardBuilderModal extends Modal {
	private columns: ColumnData[] = [];
	private currentColumnName: string = "";
	private currentActivities: ActivityData[] = [];
	private resolve: (data: ColumnData[]) => void = () => {};

	onOpen() {
		this.drawColumnStep();
	}

	private drawColumnStep() {
		const { contentEl } = this;
		contentEl.empty();

		contentEl.createEl("h2", { text: "Adicionar Coluna ao Quadro" });

		let nameInput: TextComponent;
		new Setting(contentEl)
			.setName("Nome da Coluna")
			.addText(text => {
				nameInput = text;
				text.onChange(value => this.currentColumnName = value);
			});

		new Setting(contentEl)
			.addButton(btn => {
				btn.setButtonText("Adicionar Atividades")
					.setCta()
					.onClick(() => {
						if (!this.currentColumnName) return;
						this.drawActivitiesStep();
					});
			});
	}

	private drawActivitiesStep() {
		const { contentEl } = this;
		contentEl.empty();

		contentEl.createEl("h2", { text: `Column Activities: ${this.currentColumnName}` });

		let activityName = "";
		let isComplex = false;
		let status = "", files = "", context = "", roadmap = "";

		new Setting(contentEl).setName("Activitie's Name")
			.addText(text => text.onChange(val => activityName = val));

		new Setting(contentEl).setName("Type")
			.addDropdown(drop => {
				drop.addOption("simples", "Simples");
				drop.addOption("complexa", "Complexa");
				drop.onChange(value => isComplex = value === "complexa");
			});

		new Setting(contentEl).setName("Status")
			.addText(text => text.onChange(val => status = val));

		new Setting(contentEl).setName("Files")
			.addText(text => text.onChange(val => files = val));

		new Setting(contentEl).setName("Context")
			.addTextArea(text => text.onChange(val => context = val));

		new Setting(contentEl).setName("Roadmap")
			.addTextArea(text => text.onChange(val => roadmap = val));

		new Setting(contentEl)
			.addButton(btn => {
				btn.setButtonText("Adicionar Atividade")
					.onClick(() => {
						if (!activityName) return;

						this.currentActivities.push({
							name: activityName,
							isComplex,
							status,
							files,
							context,
							roadmap
						});

						this.drawActivitiesStep(); //chama a função novamente para redesenhar mantendo a coluna atual
					});
			});

		// Preview das atividades até o momento
		this.currentActivities.forEach((a, i) => {
			const typeLabel = a.isComplex ? "Complexa" : "Simples";
			contentEl.createEl("p", { text: `${i + 1}. ${a.name} (${typeLabel})` });
		});

		new Setting(contentEl)
			.addButton(btn => {
				btn.setButtonText("Save Collumn")
					.setCta()
					.onClick(() => {
						this.columns.push({
							name: this.currentColumnName,
							activities: this.currentActivities
						});
						this.currentActivities = [];
						this.currentColumnName = "";
						this.drawColumnStep();
					});
			});

		new Setting(contentEl)
			.addButton(btn => {
				btn.setButtonText("Finalizar e Criar Projeto")
					.setWarning()
					.onClick(() => {
						this.close();
						this.resolve(this.columns);
					});
			});
	}

	onClose() {
		this.contentEl.empty();
	}

	open(): Promise<ColumnData[]> {
		return new Promise(resolve => {
			this.resolve = resolve;
			super.open();
		});
	}
}

