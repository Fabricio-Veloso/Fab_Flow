import { App, normalizePath } from "obsidian";
import { ColumnData} from "../../../../components/modals/projectBoardBuilderModal";
import {
  getBaseProjectPath,
  getBoardPath,
  getNotesFolderPath,
} from "../../../core/resolvePathsFunctions";
import {generateActivityNoteContent } from "./generateActivityNoteContent";
import {ensureFolderExists,} from "../../../core/ensureFolderExists";
import {createFileIfNotExists} from "../../../core/createFileIfNotExists";

import { ProjectInfo } from "../../../../classes/projectInfo"; // ajuste conforme o caminho correto

export async function generateKanbanBoardAndNotes(
  app: App,
  {
    board,
    ...project // desestrutura o restante como `ProjectInfo`
  }: ProjectInfo & { board: ColumnData[] }
) {
  const basePath = getBaseProjectPath(project.scope, project.name);
  const boardPath = getBoardPath(project.scope, project.name);
  const notesFolderPath = getNotesFolderPath(project.scope, project.name);

  await ensureFolderExists(app, notesFolderPath);

  let boardContent = "---\nkanban-plugin: board\n---\n";

  for (const column of board) {
    boardContent += `## ${column.name}\n`;

    for (const activity of column.activities) {
      const noteTitle = activity.name;
      const isComplex = activity.isComplex;
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

