
export class ProjectInfo {
  name: string;
  scope: string;
  status?: string;
  files?: string;
  context?: string;
  roadmap?: string;
  objectives?: string;

  // Construtor com valores padrão 'none'
  constructor(
    name: string = "none",  // valor padrão para 'name'
    scope: string = "none",  // valor padrão para 'scope'
    status?: string,
    files?: string,
    context?: string,
    roadmap?: string,
    objectives?: string
  ) {
    this.name = name;
    this.scope = scope;
    this.status = status;
    this.files = files;
    this.context = context;
    this.roadmap = roadmap;
    this.objectives = objectives;
  }

  // Método de validação que lança um erro se os campos obrigatórios estiverem ausentes
  validate(): void {
    const missingFields: string[] = [];

    // Verifica se os campos obrigatórios estão com os valores padrão
    if (this.name === "none") missingFields.push("name");
    if (this.scope === "none") missingFields.push("scope");

    if (missingFields.length > 0) {
      throw new Error(`MissingFields: ${missingFields.join(", ")}`);
    }
  }
}

