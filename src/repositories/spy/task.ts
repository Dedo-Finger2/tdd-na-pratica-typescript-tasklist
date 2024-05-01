import { Task, TaskParams } from "../../domain/entities/task";
import { FindTaskParams, TaskRepository } from "../task-repository";

export class TaskRepositorySpy implements TaskRepository {
  async create({ name, priority, description, dueDate }: TaskParams): Promise<Task> {
    const task = new Task({
      name,
      priority,
      description,
      dueDate,
    });
    return task;
  }

  async find({ key, value, taskList }: FindTaskParams): Promise<Task | undefined> {
    let task;
    switch (key) {
      case "nome": task = taskList.tasks.find((task) => task.name === value); break;
      case "descrição": task = taskList.tasks.find((task) => task.description === value); break;
      case "data-vencimento": task = taskList.tasks.find((task) => task.dueDate === value); break;
      case "prioridade": task = taskList.tasks.find((task) => task.priority === value); break;
      case "status": task = taskList.tasks.find((task) => task.status === value); break;
      default: undefined; break;
    }
    return task;
  }
}