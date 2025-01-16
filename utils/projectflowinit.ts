import { Vault } from "obsidian";
import {checkCoreAssetsHealth} from './CoreAssetsCheckHealth' 
import {createCoreAssets} from './createCoreAssets'
import {Asset} from 'interfaces/Asset'
export async function ProjectFlowInit(currentVault:Vault,isSetupDone:Boolean){

	const coreAssets = {
	  mainProjectFlowFolderPath:    './projectFlow',
	  mainProjectFolderPath:		'./projectFlow/projects',
	  mainNoteFromCardFolderPath:   './projectFlow/notesFromCards',
	  mainNoteFromcardTemplatePath: './projectFlow/notesFromCards/noteFromCardTemplate.md',
	};
	
	let coreAssetsDictionary: { [key: string]: Asset } = {};

	for (const [key, path] of Object.entries(coreAssets)) {
		coreAssetsDictionary[key] = { path, status: 'unknown' }; 
	}

	const coreSetupReq = {
		readyStatus: false,
		anyConflictOnPath: false,
	};


	//if the metadata says that the plugin was already setup 
	if(isSetupDone == false){
		console.log;('SetUp needed'+ `${isSetupDone}`)
		await checkCoreAssetsHealth(currentVault,coreAssetsDictionary,coreSetupReq);

		if (!coreSetupReq.anyConflictOnPath) {
			coreSetupReq.readyStatus = true;
		}

		if (coreSetupReq.readyStatus ) {
			console.log('Initialization procedure ready');
			console.log('Creating core assets');
			await createCoreAssets(currentVault,coreAssetsDictionary);
		}

		return 0; 
	}
 
	if (isSetupDone == true){
		console.log('SetUp is already done'+ `${isSetupDone}`+'\nStarting core assets health check');
		await checkCoreAssetsHealth(currentVault,coreAssetsDictionary,coreSetupReq);
		return 0;		  
		//	A Modal shal apear to notify the user  asking to rename or delete the folder with the conflicting name
	}

		//Goes to the kanban Config and set's it to de default bord folder to be the projects folder and the notes from card folder to be the cards folder	
		//
		//Cals the start modal
		//
}
