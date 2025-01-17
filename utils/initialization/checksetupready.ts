export async function checkSetupReady(coreSetupReq: { [key: string]: boolean }) {

    for (const [key,value] of Object.entries(coreSetupReq)) {
        if (value === false) {
            console.log( `${key}` + 'is false');
			return false;
        }
    }
	return true;
}
