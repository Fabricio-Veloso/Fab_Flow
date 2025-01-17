import {Vault} from 'obsidian'
import {Asset} from '../interfaces/Asset'


export async function checkCoreAssetsPath(currentVault:Vault,Dictionary: { [key: string]: Asset }, status1 :String, status2: String){

	for (const [key, {path}] of Object.entries(Dictionary)) {
		let currentloopPath = await currentVault.adapter.exists(path, true);

		if (currentloopPath == true) {
			Dictionary[key].status = `${status1}`; 
		}else{
			Dictionary[key].status = `${status2}`;         
		}	
	}

}
