export type TaskParams = { 
  name: string, 
  description?: string, 
  dueDate?: Date, 
  priority: string
};

export class Task {
  public name: string;
  public description?: string;
  public dueDate?: Date;
  public priority: string;
  public status: string;

  constructor({ name, description, priority, dueDate }: TaskParams) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.status = "Pendente";
  }
}
