import { App} from "obsidian";

export async function createFileIfNotExists(app: App, path: string, content: string): Promise<void> {
	if (!app.vault.getAbstractFileByPath(path)) {
		await app.vault.create(path, content);
	}
}
