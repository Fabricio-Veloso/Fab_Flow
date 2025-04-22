import { App, Notice, Plugin, normalizePath } from "obsidian";
import { projectInfoModal } from "../../../components/modals/projectInfoModal";
import { createProjectStructure } from "../../core/projectStructure";
import {ProjectBoardBuilderModal } from "../../../components/modals/projectBoardBuilderModal";
import {generateBoardAndNotes} from "../../core/generateBoardAndNotes";


export async function createProjectCb(app: App) {
	const infoModal = new projectInfoModal(app);
	const projectInfo = await infoModal.open();

	if (!projectInfo) return;

	const boardModal = new ProjectBoardBuilderModal(app);
	const board = await boardModal.open();

	const activities = board.flatMap(col =>
		col.activities.map(act => ({
			title: act.name,
			type: act.type === "complexa" ? "complex" : "simple",
			status: act.andamento,
			files: act.arquivos,
			context: act.contexto,
			roadmap: act.roadmap,
		}))
	);

	await generateBoardAndNotes(app, {
		projectName: projectInfo.projectName,
		projectScope: projectInfo.projectScope,
		board,
		activities
	});
}

