import {Asset} from '../interfaces/Asset'

export async function checkAssetsConflicts(coreAssetsDictionary: { [key: string]: Asset },anyConflictOnPath:Boolean){

	for (const [key, { status }] of Object.entries(coreAssetsDictionary)) {
		if (status === 'conflicting') {
			console.log(`The path "${key}" is conflicting\nPlease rename or delete the conflicting file\nRestart the plugin`);
			anyConflictOnPath = true;
		 
		}
	}
	if (anyConflictOnPath === true){
		return 1;
	}
}


