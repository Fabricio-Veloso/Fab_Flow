import { App, normalizePath, Notice } from "obsidian";
import { ColumnData, ActivityData} from "../../../../components/modals/projectBoardBuilderModal";
import {getBaseProjectPath,} from "../../../core/resolvePathsFunctions";
import {createFileIfNotExists} from "../../../core/createFileIfNotExists";
import {ensureFolderExists} from "../../../core/ensureFolderExists";

export async function generateProjectHeaderNote(app: App, project: ProjectInfo) {
	const basePath = getBaseProjectPath(project.scope, project.name);
	const headerPath = normalizePath(`${basePath}/${project.name}_h.md`);

	const headerContent = `## Status\n${project.status ?? ''}\n\n## Files\n${project.files ?? ''}\n\n## Context\n${project.context ?? ''}\n\n## Objectives\n${project.objectives ?? ''}\n\n## Roadmap\n${project.roadmap ?? ''}`;
	await ensureFolderExists(app, basePath);
	await createFileIfNotExists(app, headerPath, headerContent);
}


