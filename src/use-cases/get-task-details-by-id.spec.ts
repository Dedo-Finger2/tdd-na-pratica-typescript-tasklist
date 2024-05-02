import { describe, it, expect, beforeEach, beforeAll } from "vitest";
import { buildCreateTask, buildGetTaskDetailsById } from "../factories/task";
import { TaskList } from "../domain/entities/task-list";
import { TaskPriority } from "../domain/entities/task";
import { TaskRepositorySpy } from "../repositories/spy/task";
import { GetTaskDetailsById } from "./get-task-details-by-id";

describe("GetTaskDetailById", () => {
  let taskList: TaskList;
  beforeAll(async () => {
    taskList = new TaskList({ createdAt: new Date() });
    const createTask = buildCreateTask();
    const amountOfTasksWanted = 5;
    for (let index = 1; index <= amountOfTasksWanted; index++) {
      const newTask = await createTask.execute({
        name: `Task ${index}`,
        priority: TaskPriority.MEDIA,
        description: `Desc ${index}`,
        dueDate: new Date(new Date().getDate() + index + 1),
      });
      taskList.addTask(newTask);
    }
  });

  it("should return task details based on their id", async() => {
    const sut = buildGetTaskDetailsById();
    const anyTaskId = 1;

    const task = await sut.execute({ taskId: anyTaskId, taskList });

    expect(task).toBeDefined();
    expect(task?.taskId).toBe(anyTaskId);
    expect(task?.name).toBe("Task 1");
  });
  
  it("should return undefined if id is not found", async() => {
    const sut = buildGetTaskDetailsById();
    const anyTaskId = 999;

    const task = await sut.execute({ taskId: anyTaskId, taskList });

    expect(task).toBeUndefined();
  });
});