import { TaskList } from "../domain/entities/task-list";
import { Task, TaskParams, TaskPriority, TaskStatus } from "./../domain/entities/task";

export type FindTaskParams = {
  key: string,
  value: string | Date | TaskPriority | TaskStatus,
  taskList: TaskList,
}

export interface TaskRepository {
  create(params: TaskParams): Promise<Task>,
  find(params: FindTaskParams): Promise<Task | undefined>,
}