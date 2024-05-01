import { TaskList } from "./task-list";
import { Task, TaskPriority } from "./task";

import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { set, reset } from "mockdate";


describe("TaskList", () => {
  beforeAll(() => {
    set(new Date('2/20/2000'));  
  });

  afterAll(() => {
    reset();
  });

  it("should instanciate a new task list", () => {
    const taskList = new TaskList({
      createdAt: new Date(),
    });

    expect(taskList.createdAt).toEqual(new Date());
  });

  it("should be able to add tasks to a task list", () => {
    const taskList = new TaskList({
      createdAt: new Date(),
    });

    for (let index = 0; index < 10; index++) {
      const newTask = new Task({
        name: `Task ${index}`,
        description: index <= 5 ? `Descrição ${index}` : undefined,
        priority: index <= 5 ? TaskPriority.ALTA : TaskPriority.BAIXA,
        dueDate: new Date(new Date().getTime() + index),
      });
      taskList.addTask(newTask);
    };

    expect(taskList.tasks.length).toEqual(10);
  });
});