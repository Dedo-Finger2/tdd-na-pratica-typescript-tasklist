import { Task, TaskParams } from "../../domain/entities/task";
import { TaskRepository } from "../task-repository";

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
}