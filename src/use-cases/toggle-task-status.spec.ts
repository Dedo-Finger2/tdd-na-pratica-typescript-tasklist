import { beforeAll, describe, expect, it } from "vitest";
import { TaskPriority } from "../domain/entities/task";
import { TaskList } from "../domain/entities/task-list";
import { buildCreateTask } from "../factories/task";
import { TaskRepositorySpy } from "../repositories/spy/task";
import { ToggleTaskStatus } from "./toggle-task-status";

describe("", () => {
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

  it("should toggle task complete or pending state", async() => {
    const taskRepository = new TaskRepositorySpy();
    const sut = new ToggleTaskStatus(taskRepository);

    const taskUpdated = await sut.execute({
      taskList,
      taskId: 1,
    });

    if (taskUpdated) {
      expect(taskUpdated.status).toBe("concluida");
    }
  });
});