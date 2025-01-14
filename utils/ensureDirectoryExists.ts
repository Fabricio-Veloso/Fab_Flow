import { Vault} from 'obsidian'

export async function ensureDirectoriesExist(vault: Vault ,directories: { [key: string]: string }) {
    
	//verify if the directories and files exist
	for (const [key,path] of Object.entries(directories)){
		vault.adapter.exists(path, true);
	};
}

