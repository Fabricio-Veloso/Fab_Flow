import { ItemView, WorkspaceLeaf} from 'obsidian';
import { VIEW_TYPE_COMMANDS_PANEL } from '../../../utils/consts';

export class CommandsPanelView extends ItemView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_COMMANDS_PANEL;
  }

  getDisplayText() {
    return 'Painel de Comandos';
  }

  getIcon() {
    return 'command'; // Ícone que aparece na aba
  }

  async onOpen() {
    const container = this.containerEl.children[1]; // Obtém o container correto
    container.empty(); // Limpa qualquer conteúdo anterior

    container.createEl('h2', { text: 'Comandos Disponíveis' });

    container.createEl('p', {
      text: 'Aqui estão os comandos disponíveis e seus atalhos:',
    });

    // Exemplo de comandos
    const commands = [
      { name: 'Comando 1', hotkey: 'Ctrl+1' },
      { name: 'Comando 2', hotkey: 'Ctrl+2' },
      { name: 'Comando 3', hotkey: 'Ctrl+3' },
    ];

    const list = container.createEl('ul');
    commands.forEach((command) => {
      const listItem = list.createEl('li');

      listItem.createEl('span', {
        text: `${command.name} - `,
        cls: 'command-name',
      });

      listItem.createEl('span', {
        text: command.hotkey,
        cls: 'command-hotkey',
      });
    });
  }

  async onClose() {
    const container = this.containerEl.children[1];
    container.empty(); // Limpa o conteúdo ao fechar a view
  }
}

