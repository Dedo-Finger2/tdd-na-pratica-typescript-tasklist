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

export type UpdateTaskParams = Partial<TaskParams> & {
  taskList: TaskList,
  taskId: number,
};

export type ToggleTaskStatusParams = {
  taskList: TaskList,
  taskId: number,
};

export type DeleteTaskParams = {
  taskList: TaskList,
  taskId: number,
};

export interface TaskRepository {
  create(params: TaskParams): Promise<Task>,
  find(params: FindTaskParams): Promise<Task | undefined>,
  findAll(params: FindAllTasksParams): Promise<Task[]>,
  update(params: UpdateTaskParams): Promise<Task | undefined>,
  toggleStatus(params: ToggleTaskStatusParams): Promise<Task | undefined>,
  delete(params: DeleteTaskParams): Promise<void>,
}