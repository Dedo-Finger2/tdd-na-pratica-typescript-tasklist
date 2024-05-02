import { beforeAll, describe, expect, it } from "vitest";
import { TaskPriority, TaskStatus } from "../domain/entities/task";
import { TaskList } from "../domain/entities/task-list";
import { buildCreateTask, buildDeleteTask } from "../factories/task";
import { TaskRepositorySpy } from "../repositories/spy/task";
import { DeleteTask } from "./delete-task";

describe("ToggleTaskStatus", () => {
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
    taskList.tasks[2].status = TaskStatus.CONCLUIDA;
  });

  it("should delete a task from a tasklist", async() => {
    const sut = buildDeleteTask();

    await sut.execute({
      taskList,
      taskId: 1,
    });
    const remaniningTasksId = taskList.tasks.map((task) => task.taskId);

    expect(remaniningTasksId).not.contain(1);
  });

  it("should not delete a task from a tasklist that is completed", async() => {
    const sut = buildDeleteTask();

    const response = sut.execute({
      taskList,
      taskId: 3,
    });

    await expect(response).rejects.toThrowError();
  });
});