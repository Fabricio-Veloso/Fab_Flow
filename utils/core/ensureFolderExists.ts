import { App} from "obsidian";

export async function ensureFolderExists(app: App, path: string): Promise<void> {
	const folders = path.split("/");
	let currentPath = "";

	for (const folder of folders) {
		currentPath += (currentPath ? "/" : "") + folder;
		if (!app.vault.getAbstractFileByPath(currentPath)) {
			await app.vault.createFolder(currentPath);
		}
	}
}
