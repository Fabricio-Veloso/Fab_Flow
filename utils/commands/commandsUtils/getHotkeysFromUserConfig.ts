import { App } from 'obsidian';

export async function getPluginHotkeys(app: App) {
  const hotkeysFilePath = app.vault.configDir + '/hotkeys.json'; // Caminho para hotkeys.json
  
  try {
    // Lendo o arquivo hotkeys.json usando a API do Vault
    const file = await app.vault.adapter.read(hotkeysFilePath);
    const data = JSON.parse(file); // Parseando o conteúdo do arquivo JSON

    const pluginHotkeys = {};

    // Filtrando as keybindings do seu plugin
    for (let [commandId, keybindings] of Object.entries(data)) {
      if (commandId.startsWith("ProjectFlow:")) {
        pluginHotkeys[commandId] = keybindings;
      }
    }

    console.log('Keybindings do seu plugin:', pluginHotkeys);

  } catch (error) {
    console.error('Erro ao carregar hotkeys.json:', error);
  }
}

