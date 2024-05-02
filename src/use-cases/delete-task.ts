import { TaskStatus } from "../domain/entities/task";
import { TaskRepository, ToggleTaskStatusParams } from "../repositories/task-repository";

export class DeleteTask {
  constructor(
    private taskRepository: TaskRepository,
  ) {}

  async execute({ taskList, taskId }: ToggleTaskStatusParams): Promise<void> {
    const taskFound = taskList.tasks.find((task) => task.taskId === taskId);
    if (taskFound?.status === TaskStatus.CONCLUIDA) throw new Error("Cannot delete completed tasks.");
    await this.taskRepository.delete({ taskId, taskList });
  }
}