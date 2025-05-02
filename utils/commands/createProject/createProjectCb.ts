import { App} from "obsidian";
import { projectInfoModal } from "../../../components/modals/projectInfoModal";
import {ProjectBoardBuilderModal } from "../../../components/modals/projectBoardBuilderModal";
import {generateKanbanBoardAndNotes} from "./utilsCreateProject/generateProjectKanbanBoardAndNotes";
import {generateProjectHeaderNote} from "./utilsCreateProject/generateProjectHeaderNote";

export async function createProjectCb(app: App) {
	const infoModal = new projectInfoModal(app);
	const projectInfo = await infoModal.open();

	if (!projectInfo) return;

	const boardModal = new ProjectBoardBuilderModal(app);
	const board = await boardModal.open();

	const activities = board.flatMap(col =>
		col.activities.map(act => ({
			name: act.name,
			isComplex: act.isComplex,
			status: act.status,
			files: act.files,
			context: act.context,
			roadmap: act.roadmap,
		}))
	);
	await generateProjectHeaderNote(app, {
	  projectName: projectInfo.projectName,
	  projectScope: projectInfo.projectScope,
	  activities
	});

	await generateKanbanBoardAndNotes(app, {
	  projectName: projectInfo.projectName,
	  projectScope: projectInfo.projectScope,
	  board
	});

}

