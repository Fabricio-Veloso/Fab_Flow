export async function createCoreAssets(vault: Vault, generalStatus: { [key: string]: Asset }, isSetupDone: boolean) {
	for (const [key, { path, status }] of Object.entries(generalStatus)) {
		const isMarkdown = path.endsWith('.md');
		const exists = await vault.adapter.exists(path);

		if (isMarkdown) {
			if ((isSetupDone && !exists) || (!isSetupDone && status === 'missing')) {
				await vault.adapter.write(path, '# New Template\n\nThis is a template.');
				console.log(`"${path}" created as a Markdown file`);
			}
		} else {
			if (!exists) {
				await vault.adapter.mkdir(path);
				console.log(`"${path}" created as a directory`);
			}
		}
	}
}

