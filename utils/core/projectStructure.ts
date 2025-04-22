import { App,  normalizePath } from "obsidian";

// Diretório base (pode ser ajustado futuramente para ler de config)
const ROOT_DIR = "projectFlow";

export async function createProjectStructure(app: App, info: ProjectInfo) {
	const { projectName, projectScope } = info;

	// Cria os paths principais
	const basePath = `${ROOT_DIR}/${projectScope}/Projetos/Ativos/${projectName}`;
	const headerPath = normalizePath(`${basePath}/${projectName}_h.md`);
	const boardPath = normalizePath(`${basePath}/${projectName}_b.md`);

	// Cria as pastas
	await ensureFolderExists(app, basePath);

	// Cria arquivos se não existirem
	await createFileIfNotExists(app, headerPath,
`# Cabeçalho: ${projectName}
\n\n
# Preâmbulo:
\n
# Objetivos:
\n
# Roadmap:`);

	await createFileIfNotExists(app, boardPath, `---\nkanban-plugin: board\n---\n\n## A Fazer\n## Em Progresso\n## Concluído`);

	console.log(`Projeto "${projectName}" criado em ${basePath}`);
}

async function ensureFolderExists(app: App, path: string): Promise<void> {
	const folders = path.split("/");
	let currentPath = "";

	for (const folder of folders) {
		currentPath += (currentPath ? "/" : "") + folder;
		if (!app.vault.getAbstractFileByPath(currentPath)) {
			await app.vault.createFolder(currentPath);
		}
	}
}

async function createFileIfNotExists(app: App, path: string, content: string): Promise<void> {
	if (!app.vault.getAbstractFileByPath(path)) {
		await app.vault.create(path, content);
	}
}

