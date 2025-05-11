
interface ProjectInfoData {
  name?: string;
  scope?: string;
  status?: string;
  files?: string;
  context?: string;
  roadmap?: string;
  objectives?: string;
}

export class ProjectInfo {
  name: string;
  scope: string;
  status?: string;
  files?: string;
  context?: string;
  roadmap?: string;
  objectives?: string;

  constructor(data: ProjectInfoData = {}) {
    this.name = data.name ?? '';
    this.scope = data.scope ?? '';
    this.status = data.status;
    this.files = data.files;
    this.context = data.context;
    this.roadmap = data.roadmap;
    this.objectives = data.objectives;
  }

  validate(): void {
    const missing: string[] = [];
    if (!this.name.trim()) missing.push("name");
    if (!this.scope.trim()) missing.push("scope");

    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(", ")}`);
    }
  }

  static createAndValidate(data: ProjectInfoData): ProjectInfo {
    const instance = new ProjectInfo(data);
    instance.validate();
    return instance;
  }
}

