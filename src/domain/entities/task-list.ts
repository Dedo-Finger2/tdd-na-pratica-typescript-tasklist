import { Task } from "./task";

export type TaskListParams = {
  createdAt: Date;
}

export class TaskList {
  public createdAt: Date;
  public tasks: Task[];

  constructor({ createdAt }: TaskListParams) {
    this.createdAt = createdAt;
    this.tasks = [];
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
