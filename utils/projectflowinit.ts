import { Vault } from "obsidian";
import {checkCoreAssetsHealth} from './checkcoreassetshealth' 
import {createCoreAssets} from './createcoreassets'
import {Asset} from 'interfaces/Asset'
import {checkSetupReady} from './checksetupready'

export async function ProjectFlowInit(currentVault:Vault,isSetupDone:boolean){

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
		anyConflictOnPath: false,
	};

	

	if(isSetupDone == false){
		console.log('SetUp needed');
		await checkCoreAssetsHealth(currentVault,coreAssetsDictionary,coreSetupReq,isSetupDone);


		if (await checkSetupReady(coreSetupReq) === false) {
			console.log('Initialization procedure ready');

			console.log('Creating core assets');
			await createCoreAssets(currentVault,coreAssetsDictionary);
		}

	} 

	if (isSetupDone == true){
		console.log('SetUp is already done\nStarting core assets health check');
		await checkCoreAssetsHealth(currentVault,coreAssetsDictionary,coreSetupReq,isSetupDone);
		await createCoreAssets(currentVault,coreAssetsDictionary);

		//	A Modal shal apear to notify the user  asking to rename or delete the folder with the conflicting name
	}

		//Goes to the kanban Config and set's it to de default bord folder to be the projects folder and the notes from card folder to be the cards folder	
		//
		//Cals the start modal
		//
}
