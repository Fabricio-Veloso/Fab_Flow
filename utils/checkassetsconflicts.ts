import {Asset} from '../interfaces/Asset'

export async function checkAssetsConflicts(coreAssetsDictionary: { [key: string]: Asset },anyConflictOnPath:Boolean,isSetupDone:boolean){

	let status1 :string;


	if(isSetupDone == true){
		status1 = 'conflicting';
	}else{
		status1 = 'founded';
	}

	for (const [key, { status }] of Object.entries(coreAssetsDictionary)) {
		if (status === status1) {
			anyConflictOnPath = true;
		 
		}
	}
	if (anyConflictOnPath === true){
		return 1;
	}

}


