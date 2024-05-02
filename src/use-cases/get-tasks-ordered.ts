import { Task } from "../domain/entities/task";
import { TaskList } from "../domain/entities/task-list";
import { TaskRepository } from "../repositories/task-repository";

export type GetTaskOrderedArgs = {
  orderBy: keyof Omit<Task, "taskId">,
  orientation: "ASC" | "DESC",
  taskList: TaskList,
};

export class GetTasksOrdered {
  constructor(
    private taskRepository: TaskRepository,
  ) {}

  async execute({ orderBy, orientation, taskList }: GetTaskOrderedArgs): Promise<Task[]> {
    const tasks = await this.taskRepository.findAll({ orderBy, orientation, taskList });
    return tasks;
  }
}