
import { checkAssetsConflicts} from './checkassetsconflicts'

import { Vault} from 'obsidian'
import {checkAssetsPath} from './checkpathFillStatus'
import {Asset} from '../interfaces/Asset'

export async function checkCoreAssetsHealth(vault: Vault ,coreAssetsDictionary: { [key: string]: Asset},coreSetupReq:{ [key:string]:boolean}){

	await checkAssetsPath(vault,coreAssetsDictionary,'conflicting','Dont exist'); 
	console.log(coreAssetsDictionary);
	await checkAssetsConflicts(coreAssetsDictionary,coreSetupReq.anyConflictOnPath);
	


}

