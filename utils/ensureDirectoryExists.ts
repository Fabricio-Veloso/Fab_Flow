import { Vault} from 'obsidian'

export async function checkCoreAssetsHealth(vault: Vault ,directories: { [key: string]: string }) {

    let GeneralStatus: { [key: string]: { path: string, status: string } } = {};

    for (const [key, path] of Object.entries(directories)) {
        GeneralStatus[key] = { path, status: 'unknown' }; 
	}
    let readyStatus = false;
    let anyConflictOnPath = false;

    // Verificando se os diretórios/arquivos existem
    for (const [key, { path }] of Object.entries(GeneralStatus)) {
        let currentloopPath = await vault.adapter.exists(path, true);

        if (currentloopPath == true) {
            GeneralStatus[key].status = 'conflicting'; 
		}else{
            GeneralStatus[key].status = 'ready to be created';         
		}
    }

    console.log(GeneralStatus);

    for (const [key, { status }] of Object.entries(GeneralStatus)) {
        if (status === 'conflicting') {
            console.log(`The path "${key}" is conflicting\nPlease rename or delete the conflicting file\nRestart the plugin`);
            anyConflictOnPath = true;
            return 1;          
		}
    }

    if (!anyConflictOnPath) {
        readyStatus = true;
    }

    if (readyStatus) {
        console.log('Initialization procedure ready');
        console.log('Creating core assets');

        for (const [key, { path, status }] of Object.entries(GeneralStatus)) {
            if (status === 'ready to be created') {
                if (path.endsWith('.md')) {
                    await vault.adapter.write(path, '# New Template\n\nThis is a template.');
                    console.log(`"${path}" created as a Markdown file`);
                } else {
                    await vault.adapter.mkdir(path);
                    console.log(`"${path}" created as a directory`);
                }
            }
        }
        return 0;
    }
}

