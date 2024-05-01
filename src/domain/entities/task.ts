export enum TaskStatus {
  PENDENTE = "pendente",
  CONCLUIDA = "concluida",
};

export enum TaskPriority {
  ALTA = "alta",
  MEDIA = "media",
  BAIXA = "baixa",
};

export type TaskParams = { 
  name: string, 
  description?: string, 
  dueDate?: Date, 
  priority: TaskPriority
};

export class Task {
  public name: string;
  public description?: string;
  public dueDate?: Date;
  public priority: string;
  public status: TaskStatus;

  constructor({ name, description, priority, dueDate }: TaskParams) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.status = TaskStatus.PENDENTE;
  }
}
