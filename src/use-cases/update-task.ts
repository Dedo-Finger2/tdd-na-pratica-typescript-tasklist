import { Task } from "./../domain/entities/task";
import { TaskRepository, UpdateTaskParams } from "../repositories/task-repository";

export class UpdateTask {
  constructor(
    private taskRepository: TaskRepository,
  ) {}

  async execute({ name, priority, description, dueDate, taskId, taskList }: UpdateTaskParams): Promise<Task | undefined> {
    const task = await this.taskRepository.update({
      name,
      priority,
      description,
      dueDate,
      taskId,
      taskList,
    });
    return task;
  }
}