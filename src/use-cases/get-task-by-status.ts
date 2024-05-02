import { Task } from "../domain/entities/task";
import { TaskList } from "../domain/entities/task-list";
import { TaskRepository } from "../repositories/task-repository";

export class GetTaskByStatus {
  constructor(
    private taskRepository: TaskRepository,
  ) {}

  async execute({ status, taskList }: { status: string, taskList: TaskList }): Promise<Task | undefined> {
    const task = await this.taskRepository.find({
      key: "status",
      value: status,
      taskList,
    });
    return task;
  }
}