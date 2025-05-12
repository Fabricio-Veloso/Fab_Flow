import {MarkdownCommentModal } from "../../../components/modals/markdownComment";
import { App, TFolder } from "obsidian";

export function logProgressCb(app:App) {
	const folders = app.vault.getAllLoadedFiles().filter(f => f instanceof TFolder);
	console.log(folders);
	// Get all the scopes names, project names and activities...
	//	Get the current scope, project and activity.
	//	Create a modal instance
	//	Fill the modal with the current scope, project and activity.
	//	Show the modal to the user.
	//	Retrive data.
	//	use the chosen activitie status or _h project note to add the log.
	//	Send feedback to user.

}

