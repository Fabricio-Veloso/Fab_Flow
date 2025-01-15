import { Vault} from 'obsidian'
import {createCoreAssets} from './createCoreAssets'
import {checkPathFillStatus} from './checkpathFillStatus'
import {Asset} from '../interfaces/Asset'

export async function checkCoreAssetsHealth(vault: Vault ,directories: { [key: string]: string },isSetUpIsDone: Boolean){

	let coreAssetsDictionary: { [key: string]: Asset } = {};

	for (const [key, path] of Object.entries(directories)) {
		coreAssetsDictionary[key] = { path, status: 'unknown' }; 
	}
	let readyStatus = false;
	let anyConflictOnPath = false;

	if(isSetUpIsDone == false){
		
		checkPathFillStatus(vault,coreAssetsDictionary,'conflicting','Dont exist'); 
		
		console.log(coreAssetsDictionary);

		for (const [key, { status }] of Object.entries(coreAssetsDictionary)) {
			if (status === 'conflicting') {
				console.log(`The path "${key}" is conflicting\nPlease rename or delete the conflicting file\nRestart the plugin`);
				anyConflictOnPath = true;
			 
			}
		}
		if (anyConflictOnPath === true){
			return 1;
		}

		if (!anyConflictOnPath) {
			readyStatus = true;
		}

		if (readyStatus) {
			console.log('Initialization procedure ready');
			console.log('Creating core assets');
			createCoreAssets(vault,coreAssetsDictionary);
		   return 0;
		}
	}
	if(isSetUpIsDone == true){
			
	}
}

