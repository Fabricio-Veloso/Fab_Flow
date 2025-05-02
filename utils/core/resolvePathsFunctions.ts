import { normalizePath } from "obsidian";
import { ROOT_DIR } from "../consts";

export function getBaseProjectPath(projectScope: string, projectName: string): string {
  return normalizePath(`${ROOT_DIR}/${projectScope}/projetos/ativos/${projectName}`);
}

export function getBoardPath(projectScope: string, projectName: string): string {
  return normalizePath(`${getBaseProjectPath(projectScope, projectName)}/${projectName}_b.md`);
}

export function getNotesFolderPath(projectScope: string, projectName: string): string {
  return normalizePath(`${getBaseProjectPath(projectScope, projectName)}/notes from cards_${projectName}`);
}

export function getNotePath(projectScope: string, projectName: string, noteTitle: string): string {
  return normalizePath(`${getNotesFolderPath(projectScope, projectName)}/${noteTitle}.md`);
}

export function getComplexActivityFolder(projectScope: string, projectName: string, noteTitle: string): string {
  return normalizePath(`${getBaseProjectPath(projectScope, projectName)}/complexas/${noteTitle}`);
}

export function getComplexBoardPath(projectScope: string, projectName: string, noteTitle: string): string {
  return normalizePath(`${getComplexActivityFolder(projectScope, projectName, noteTitle)}/${noteTitle}_b.md`);
}

export function getComplexNotesFolder(projectScope: string, projectName: string, noteTitle: string): string {
  return normalizePath(`${getComplexActivityFolder(projectScope, projectName, noteTitle)}/notes from cards_${noteTitle}`);
}

