
import { App } from 'obsidian';
import { PLUGIN_ID } from '../../consts';
import { HotkeysModal } from '../../../components/hotkeysmodal';

export function getAllCommandsFromPlugin(app: App) {
  if (!app.commands || !app.commands.commands) {
    console.error("Comandos do aplicativo ainda não estão disponíveis.");
    return;
  }

  const myPluginCommands = Object.values(app.commands.commands).filter((command) =>
    command.id.startsWith(`ProjectFlow:${PLUGIN_ID}`)
  );

  if (myPluginCommands.length > 0) {
    console.log(myPluginCommands);

    // Acessando a propriedade 'hotkeys' de cada comando
    myPluginCommands.forEach(command => {
      if (command.hotkeys && command.hotkeys.length > 0) {
        console.log(`Comando: ${command.id} - Keybindings:`, command.hotkeys);
      } else {
        console.log(`Comando: ${command.id} - Sem keybindings`);
      }
    });

    const modal = new HotkeysModal(app, myPluginCommands);
    modal.open();
  } else {
    console.log("Nenhum comando do plugin encontrado."); 
  }
	
}


