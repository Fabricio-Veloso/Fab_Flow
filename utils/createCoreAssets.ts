import {Vault} from 'obsidian';
import {Asset} from '../interfaces/Asset'

export async function createCoreAssets(vault:Vault,generalStatus: { [key: string]: Asset },isSetupDone:boolean){
	for (const [key, { path, status }] of Object.entries(generalStatus)) {
		if (path.endsWith('.md')){
			if(isSetupDone == true){
				await vault.adapter.write(path, '# New Template\n\nThis is a template.');
				console.log(`"${path}" created as a Markdown file`);
			}else{
				if(status == 'missing'){
					await vault.adapter.write(path, '# New Template\n\nThis is a template.');
					console.log(`"${path}" created as a Markdown file`);
				}
			}
		}else{
			await vault.adapter.mkdir(path);
			console.log(`"${path}" created as a directory`);
		}
		
	}
}
