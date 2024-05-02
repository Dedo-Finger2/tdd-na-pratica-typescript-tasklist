import { TaskList } from "../domain/entities/task-list";
import { Task, TaskParams, TaskPriority, TaskStatus } from "./../domain/entities/task";

export type FindTaskParams = {
  key: string,
  value: string | number | Date | TaskPriority | TaskStatus,
  taskList: TaskList,
};

export type FindAllTasksParams = {
  orderBy: keyof Omit<Task, "taskId">,
  orientation: "ASC" | "DESC",
  taskList: TaskList,
};

export interface TaskRepository {
  create(params: TaskParams): Promise<Task>,
  find(params: FindTaskParams): Promise<Task | undefined>,
  findAll(params: FindAllTasksParams): Promise<Task[]>,
}