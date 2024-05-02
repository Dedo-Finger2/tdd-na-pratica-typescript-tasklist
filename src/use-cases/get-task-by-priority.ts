import { Task } from "../domain/entities/task";
import { TaskList } from "../domain/entities/task-list";
import { TaskRepository } from "../repositories/task-repository";

export class GetTaskByPriority {
  constructor(
    private taskRepository: TaskRepository,
  ) {}

  async execute({ priority, taskList }: { priority: string, taskList: TaskList }): Promise<Task | undefined> {
    const task = await this.taskRepository.find({
      key: "prioridade",
      value: priority,
      taskList,
    });
    return task;
  }
}