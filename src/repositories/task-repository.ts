import { Task, TaskParams } from "./../domain/entities/task";

export interface TaskRepository {
  create(params: TaskParams): Promise<Task>
}