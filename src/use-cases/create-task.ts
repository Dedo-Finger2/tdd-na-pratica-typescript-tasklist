import { Task, TaskParams } from "./../domain/entities/task";
import { TaskRepository } from "../repositories/task-repository";

export class CreateTask {
  constructor(
    private taskRepository: TaskRepository,
  ) {}

  async execute({ name, priority, description, dueDate}: TaskParams): Promise<Task> {
    const task = await this.taskRepository.create({
      name,
      priority,
      description,
      dueDate,
    });
    return task;
  }
}