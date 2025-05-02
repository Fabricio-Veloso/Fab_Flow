import { App, Modal, Setting,  ButtonComponent, Notice } from "obsidian";

export class projectInfoModal extends Modal {
    projectName: string = '';
    projectScope: string = '';
    resolve: (data: { projectName: string; projectScope: string } | null) => void = () => {}; // Função para resolver a promise

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
            .addText(text => text
                .setPlaceholder('Project Name')
                .onChange(value => this.projectName = value));

        // Escopo do projeto
        new Setting(contentEl)
            .setName("Scope")
            .setDesc("Type a Scope for your Project")
            .addText(text => text
                .setPlaceholder('Project scope')
                .onChange(value => this.projectScope = value));

        // Botões
        new Setting(contentEl)
            .addButton((button: ButtonComponent) => {
                button
                    .setButtonText("Create")
                    .onClick(() => {
                        if (this.projectName && this.projectScope) {
                            this.close();
                            this.resolve({ projectName: this.projectName, projectScope: this.projectScope });
                        } else {
                            new Notice("Please Fill all Camps");
                        }
                    });
            });
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }

    open() {
        return new Promise<{ projectName: string; projectScope: string } | null>((resolve) => {
            this.resolve = resolve;
            super.open();
        });
    }
}

