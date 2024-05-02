import { Task } from "../domain/entities/task";
import { TaskRepository, ToggleTaskStatusParams } from "../repositories/task-repository";

export class ToggleTaskStatus {
  constructor(
    private taskRepository: TaskRepository,
  ) {}

  async execute({ taskList, taskId }: ToggleTaskStatusParams): Promise<Task | undefined> {
    const task = await this.taskRepository.toggleStatus({ taskId, taskList });
    return task;
  }
}