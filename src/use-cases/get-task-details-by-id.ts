import { Task } from "../domain/entities/task";
import { TaskList } from "../domain/entities/task-list";
import { TaskRepository } from "../repositories/task-repository";

export class GetTaskDetailsById {
  constructor(
    private taskRepository: TaskRepository,
  ) {}

  async execute({ taskId, taskList }: { taskId: number, taskList: TaskList }): Promise<Task | undefined> {
    const task = await this.taskRepository.find({
      key: "id",
      value: taskId,
      taskList,
    });
    return task;
  }
}