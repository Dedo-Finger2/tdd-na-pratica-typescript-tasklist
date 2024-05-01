import { describe, it, expect } from "vitest";

import { Task } from "./task";

describe("Task", () => {
  it("should create a new task", () => {
    const newTask: Task = new Task({
      name: "Nova Task",
      description: "Descrição",
      priority: "Alta",
      dueDate: new Date(),
    });

    expect(newTask.name).toBe("Nova Task");
  });

  it("should create a new task even without desc and dueDate", () => {
    const newTask: Task = new Task({
      name: "Task without description and due date",
      priority: "Alta",
    });

    expect(newTask.name).toBe("Task without description and due date");
  });

  it("should set task status to pendente when first created", () => {
    const newTask: Task = new Task({
      name: "Nova task 2",
      priority: "Alta",
    });

    expect(newTask.status.toLowerCase()).toBe("pendente");
  });
});
