import {ActivityData} from "../../../../components/modals/projectBoardBuilderModal"; 
export function generateActivityNoteContent(activity: ActivityData): string {
  return `# Status\n${activity.status || ""}\n\n# Files\n${activity.files || ""}\n\n# Context\n${activity.context || ""}\n\n# Roadmap\n${activity.roadmap || ""}`;
}
