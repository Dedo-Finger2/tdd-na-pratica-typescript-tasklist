import { describe, it, expect, beforeEach } from "vitest";
import { Task, TaskPriority, TaskStatus } from "../domain/entities/task";
import { TaskRepositorySpy } from "../repositories/spy/task";
import { GetTasksOrdered } from "./get-tasks-ordered";
import { TaskList } from "../domain/entities/task-list";
import { buildCreateTask } from "../factories/task";

describe("GetTasksOrdered", () => {
  let taskList: TaskList;

  beforeEach(async () => {
    taskList = new TaskList({ createdAt: new Date() });
    const createTask = buildCreateTask();
    for (let index = 0; index < 3; index++) {
      const task = await createTask.execute({
        name: `${index}`,
        description: `${index}`,
        priority: index === 0 ? TaskPriority.ALTA : (index === 1 ? TaskPriority.MEDIA : TaskPriority.BAIXA),
        dueDate: new Date(new Date().getDate() + index + 1),
      });
      taskList.addTask(task);
    }
  });

  it("should return tasks ordered ASC by their name", async() => {
    const taskRepository = new TaskRepositorySpy();
    const sut = new GetTasksOrdered(taskRepository);

    const tasks = await sut.execute({
      orderBy: "name",
      orientation: "ASC",
      taskList,
    });

    expect(tasks[0].name).toBe("0");
    expect(tasks[1].name).toBe("1");
    expect(tasks[2].name).toBe("2");
  });

  it("should return tasks ordered DESC by their name", async() => {
    const taskRepository = new TaskRepositorySpy();
    const sut = new GetTasksOrdered(taskRepository);

    const tasks = await sut.execute({
      orderBy: "name",
      orientation: "DESC",
      taskList,
    });

    expect(tasks[0].name).toBe("2");
    expect(tasks[1].name).toBe("1");
    expect(tasks[2].name).toBe("0");
  });

  it("should return tasks ordered ASC by their priority", async() => {
    const taskRepository = new TaskRepositorySpy();
    const sut = new GetTasksOrdered(taskRepository);

    const tasks = await sut.execute({
      orderBy: "priority",
      orientation: "ASC",
      taskList,
    });

    expect(tasks[0].priority).toBe("alta");
    expect(tasks[1].priority).toBe("baixa");
    expect(tasks[2].priority).toBe("media");
  });

  it("should return tasks ordered ASC by their due date", async() => {
    const taskRepository = new TaskRepositorySpy();
    const sut = new GetTasksOrdered(taskRepository);

    const tasks = await sut.execute({
      orderBy: "priority",
      orientation: "ASC",
      taskList,
    });

    expect(tasks[0].dueDate?.toString()).toBe(new Date(new Date().getDate() + 1).toString());
    expect(tasks[1].dueDate?.toString()).toBe(new Date(new Date().getDate() + 2).toString());
    expect(tasks[2].dueDate?.toString()).toBe(new Date(new Date().getDate() + 3).toString());
  });

  it("should return tasks ordered DESC by their due date", async() => {
    const taskRepository = new TaskRepositorySpy();
    const sut = new GetTasksOrdered(taskRepository);

    const tasks = await sut.execute({
      orderBy: "priority",
      orientation: "DESC",
      taskList,
    });

    expect(tasks[0].dueDate?.toString()).toBe(new Date(new Date().getDate() + 3).toString());
    expect(tasks[1].dueDate?.toString()).toBe(new Date(new Date().getDate() + 2).toString());
    expect(tasks[2].dueDate?.toString()).toBe(new Date(new Date().getDate() + 1).toString());
  });
});