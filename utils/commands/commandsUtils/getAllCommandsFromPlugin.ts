import {App} from 'obsidian'
import {Plugin} from "obsidian";
import {PLUGIN_ID} from "../../consts";

export function getAllCommandsFromPlugin() {

  const myPluginCommands = Object.values(app.commands.commands).filter(command => command.id.startsWith(`ProjectFlow:${PLUGIN_ID}`))
  
  // Exibe os comandos no console
  if (myPluginCommands.length > 0) {
    console.log("Comandos do Plugin:");
    myPluginCommands.forEach(command => {
      console.log(`ID: ${command.id}, Nome: ${command.name}`);
    });
  } else {
    console.log("Nenhum comando do plugin encontrado.");
  }
}
