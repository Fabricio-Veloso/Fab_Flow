import { App, Modal, Setting, TextAreaComponent } from "obsidian";

export class MarkdownCommentModal extends Modal {
	private editorEl: TextAreaComponent;
	private previewEl: HTMLElement;
	private content: string = "";
	private resolve: ((value: string | null) => void) | null = null;

	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.empty();
		contentEl.addClass("pf-comment-modal");

		contentEl.createEl("h2", { text: "Digite seu registro de andamento" });

		// Editor Markdown
		this.editorEl = new TextAreaComponent(contentEl);
		this.editorEl.inputEl.style.width = "100%";
		this.editorEl.inputEl.style.height = "150px";
		this.editorEl.inputEl.placeholder = "Escreva seu coment├írio em Markdown...";
		this.editorEl.onChange((value) => {
			this.content = value;
			this.updatePreview();
		});

		// Preview renderizada
		this.previewEl = contentEl.createDiv({ cls: "pf-preview-area" });
		this.updatePreview();

		// Bot├Áes
		new Setting(contentEl)
			.addButton(btn => btn
				.setButtonText("Salvar")
				.setCta()
				.onClick(() => {
					this.close();
					this.resolve?.(this.content);
				}))
			.addExtraButton(btn => btn
				.setIcon("cross")
				.setTooltip("Cancelar")
				.onClick(() => {
					this.close();
					this.resolve?.(null);
				}));
	}

	onClose() {
		this.content = "";
		this.contentEl.empty();
	}

	private async updatePreview() {
		const markdown = this.content || "*Pr├®-visualiza├º├úo do coment├írio aparecer├í aqui...*";
		const html = await this.app.plugins.getPlugin("markdown").markdownRenderer.renderMarkdown(
			markdown,
			this.previewEl,
			"",
			this
		);
		this.previewEl.innerHTML = "";
		this.previewEl.append(html);
	}

	open(): Promise<string | null> {
		return new Promise(resolve => {
			this.resolve = resolve;
			super.open();
		});
	}
}


