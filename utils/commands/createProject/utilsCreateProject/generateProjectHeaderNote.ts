import { App, normalizePath } from "obsidian";
import { ColumnData, ActivityData} from "../../../../components/modals/projectBoardBuilderModal";
import {
  getBaseProjectPath,
} from "../../../core/resolvePathsFunctions";
import {createFileIfNotExists} from "../../../core/createFileIfNotExists";
import {ensureFolderExists} from "../../../core/ensureFolderExists";
export async function generateProjectHeaderNote(
  app: App,
  {
    projectName,
    projectScope,
    activities
  }: {
    projectName: string;
    projectScope: string;
    activities: ActivityData[];
  }
) {
  const basePath = getBaseProjectPath(projectScope, projectName);
  const headerPath = normalizePath(`${basePath}/${projectName}_h.md`);

  // Pode ser customizado para agregar dados das atividades ou outro conteúdo
  const headerContent = `# ${projectName}\n\n## Status\n\n\n## Files\n\n\n## Context\n\n\n## Objectives\n\n\n## Roadmap\n`;

  await ensureFolderExists(app, basePath);
  await createFileIfNotExists(app, headerPath, headerContent);
}

