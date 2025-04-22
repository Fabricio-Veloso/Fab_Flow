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
            .setName("Nome do Projeto")
            .setDesc("Digite o nome do seu projeto")
            .addText(text => text
                .setPlaceholder('Nome do projeto')
                .onChange(value => this.projectName = value));

        // Escopo do projeto
        new Setting(contentEl)
            .setName("Escopo")
            .setDesc("Escolha um escopo para o projeto")
            .addText(text => text
                .setPlaceholder('Escopo do projeto')
                .onChange(value => this.projectScope = value));

        // Botões
        new Setting(contentEl)
            .addButton((button: ButtonComponent) => {
                button
                    .setButtonText("Criar")
                    .onClick(() => {
                        if (this.projectName && this.projectScope) {
                            this.close();
                            this.resolve({ projectName: this.projectName, projectScope: this.projectScope });
                        } else {
                            new Notice("Por favor, preencha todos os campos.");
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

