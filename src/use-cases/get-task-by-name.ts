import { Task } from "../domain/entities/task";
import { TaskList } from "../domain/entities/task-list";
import { TaskRepository } from "../repositories/task-repository";

export class GetTaskByName {
  constructor(
    private taskRepository: TaskRepository,
  ) {}

  async execute({ name, taskList }: { name: string, taskList: TaskList }): Promise<Task | undefined> {
    const task = await this.taskRepository.find({
      key: "nome",
      value: name,
      taskList,
    });

    return task;
  }
}