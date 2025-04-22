import { App, FuzzySuggestModal, TFile } from "obsidian";

interface ActivityInfo {
	project: string;
	activity: string;
	file: TFile;
}

export class SelectActivityModal extends FuzzySuggestModal<ActivityInfo> {
	private activities: ActivityInfo[] = [];
	private defaultProject: string | null;
	private defaultActivity: string | null;

	constructor(app: App, defaultProject?: string | null, defaultActivity?: string | null) {
		super(app);
		this.defaultProject = defaultProject ?? null;
		this.defaultActivity = defaultActivity ?? null;

		this.loadActivities();
	}

	private loadActivities() {
		const files = this.app.vault.getMarkdownFiles();

		for (const file of files) {
			const pathParts = file.path.split("/");

			// Ex: projeto/atividades/atividade.md ou projeto/complexas/atividade/atividade.md
			if (pathParts.length >= 3) {
				const [project, tipo, ...rest] = pathParts;

				if (tipo === "atividades" && rest.length === 1) {
					this.activities.push({ project, activity: file.basename, file });
				}

				if (tipo === "complexas" && rest.length >= 2) {
					const activity = rest[0]; // nome da atividade complexa = subpasta
					const last = rest[rest.length - 1];
					if (activity === last.replace(".md", "")) {
						this.activities.push({ project, activity, file });
					}
				}
			}
		}
	}

	getItems(): ActivityInfo[] {
		return this.activities;
	}

	getItemText(item: ActivityInfo): string {
		return `${item.project} ÔÇ║ ${item.activity}`;
	}

	async onChooseItem(item: ActivityInfo): Promise<void> {
		this.resolve?.({ project: item.project, activity: item.activity });
	}

	// Promise wrapper
	open(): Promise<{ project: string; activity: string } | null> {
		return new Promise(resolve => {
			this.resolve = resolve;

			// Sele├º├úo autom├ítica se j├í estiver em foco
			if (this.defaultProject && this.defaultActivity) {
				const match = this.activities.find(
					item => item.project === this.defaultProject && item.activity === this.defaultActivity
				);
				if (match) {
					resolve({ project: match.project, activity: match.activity });
					return;
				}
			}

			super.open();
		});
	}

	private resolve: ((value: { project: string; activity: string } | null) => void) | null = null;
}


