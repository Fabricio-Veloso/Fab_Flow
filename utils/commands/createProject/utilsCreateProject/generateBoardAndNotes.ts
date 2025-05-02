import { App, normalizePath } from "obsidian";
import { ColumnData, ActivityData} from "../../../../components/modals/projectBoardBuilderModal";
import {
  getBaseProjectPath,
  getBoardPath,
  getNotesFolderPath,
} from "../../../core/resolvePathsFunctions";


export async function generateBoardAndNotes(
  app: App,
  {
    projectName,
    projectScope,
    board,
    activities
  }: {
    projectName: string;
    projectScope: string;
    board: ColumnData[];
    activities: ActivityData[];
  }
) {
	const basePath = getBaseProjectPath(projectScope, projectName);
	const boardPath = getBoardPath(projectScope, projectName);
	const notesFolderPath = getNotesFolderPath(projectScope, projectName);

	/*Move this to a separeted function*/
  await ensureFolderExists(app, notesFolderPath);

  let boardContent = "---\nkanban-plugin: board\n---\n";

  for (const column of board) {
    boardContent += `## ${column.name}\n`;

    for (const activity of column.activities) {
      const noteTitle = activity.name;
      const isComplex = activity.type === "complexa";
      const noteFileName = `${noteTitle}.md`;
      const notePath = normalizePath(`${notesFolderPath}/${noteFileName}`);

      boardContent += `- [ ] [[${noteTitle}]]\n`;

      const noteContent = generateActivityNoteContent(activity);
      await createFileIfNotExists(app, notePath, noteContent);

      if (isComplex) {
        const complexFolder = normalizePath(`${basePath}/complexas/${noteTitle}`);
        const complexBoardPath = normalizePath(`${complexFolder}/${noteTitle}_b.md`);
        const complexNotesFolder = normalizePath(`${complexFolder}/notes from cards_${noteTitle}`);

        await ensureFolderExists(app, complexFolder);
        await ensureFolderExists(app, complexNotesFolder);

        const emptySubboard = "---\nkanban-plugin: board\n---\n\n## A Fazer\n## Em Progresso\n## Concluído";
        await createFileIfNotExists(app, complexBoardPath, emptySubboard);
      }
    }
    boardContent += "\n";
  }

  await createFileIfNotExists(app, boardPath, boardContent);
}
//MOve this to a separeted function
function generateActivityNoteContent(activity: ActivityData): string {
  return `# Status\n${activity.status || ""}\n\n# Files\n${activity.files || ""}\n\n# Context\n${activity.context || ""}\n\n# Roadmap\n${activity.roadmap || ""}`;
}
//Move this to the utils function folder and import them.
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

