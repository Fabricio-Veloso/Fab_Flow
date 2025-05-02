import { App} from "obsidian";
import{ensureFolderExists, createFileIfNotExists} from "../../../core/"
import {
  getBaseProjectPath,
  getBoardPath,
  getHeaderNotePath
} from "../../../core/resolvePathsFunctions";

export async function createProjectStructure(app: App, info: ProjectInfo) {
	const { projectName, projectScope } = info;

	const basePath   = getBaseProjectPath(`${projectScope}`,`${projectName}`);
	const headerPath = getHeaderNotePath (`${projectScope}`,`${projectName}`);
	const boardPath  = getBoardPath      (`${projectScope}`,`${projectName}`);

	// Cria as pastas
	await ensureFolderExists(app, basePath);

	// Cria arquivos se não existirem
	await createFileIfNotExists(app, headerPath,`# Cabeçalho: ${projectName}\n\n# Preâmbulo:\n# Objetivos:\n# Roadmap:`);

	await createFileIfNotExists(app, boardPath, `---\nkanban-plugin: board\n---\n\n## A Fazer\n## Em Progresso\n## Concluído`);

	console.log(`Projeto "${projectName}" criado em ${basePath}`);
}
