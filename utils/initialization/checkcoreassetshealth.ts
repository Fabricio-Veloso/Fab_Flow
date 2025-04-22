
import {checkAssetsConflicts} from './checkassetsconflicts'
import {Vault}                from 'obsidian'
import {checkCoreAssetsPath}   from './checkcoreassetspath'
import {Asset}                 from '../interfaces/Asset'

export async function checkCoreAssetsHealth(vault: Vault ,coreAssetsDictionary: { [key: string]: Asset},coreSetupReq:{ [key:string]:boolean},isSetupDone:boolean){

	let status1, status2 :string

	if(isSetupDone == true){
		status1 = 'founded';
		status2 = 'missing';
	}
	if(isSetupDone == false){
		status1 = 'Dont Exist';
		status2 = 'Conflicting';
	}

	await checkCoreAssetsPath(vault,coreAssetsDictionary,status1,status2); 
	console.log(coreAssetsDictionary);

	if(isSetupDone == false){
	await checkAssetsConflicts(coreAssetsDictionary,coreSetupReq.anyConflictOnPath,isSetupDone);
	}


}

