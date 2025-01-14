import { Vault } from "obsidian";
import {ensureDirectorysExist} from 'utils/ensureDirectoryExists' 


export function ProjectFlowInit(currentVault:Vault,isSetupDone : boolean){

	const coreAssets = {
	  mainProjectFlowFolderPath: './projectFlow',
	  mainProjectFolderPath: '/projectFlow/projects',
	  mainNoteFromCardFolderPath: '/projectFlow/notesFromCards',
	  mainNoteFromcardTemplatePath: '/projectFlow/notesFromCards/noteFromCardTemplate.md',
	};


	//if the metadata says that the plugin was already setup 
	if(isSetupDone = true){
	  console.log('SetUp is already done, starting core assets health check');
		ensureDirectorysExist(currentVault,coreAssets);
		
	}

	if (isSetupDone = false){
	  console.log('SetUp needed');
	  // Search for a Project-Flow folder 
		// ( if its not created )
			//Creates a cards folder
			//Creates a project folder 
		// If there is a folder with the name of the project already created
			//	A Modal shal apear to notify the user  asking to rename or delete the folder with the conflicting name
	}

		//Goes to the kanban Config and set's it to de default bord folder to be the projects folder and the notes from card folder to be the cards folder	
		//
		//Cals the start modal
		//
}
