import { Task } from "./task";

export type TaskListParams = {
  createdAt: Date;
}

export class TaskList {
  private static GLOBAL_ID: number = 1;
  public id: number;
  public createdAt: Date;
  public tasks: Task[];

  constructor({ createdAt }: TaskListParams) {
    this.id = TaskList.GLOBAL_ID;
    this.createdAt = createdAt;
    this.tasks = [];

    TaskList.GLOBAL_ID++;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
