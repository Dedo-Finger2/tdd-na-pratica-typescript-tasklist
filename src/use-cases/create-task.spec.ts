import { describe, it, expect } from "vitest";
import { Task, TaskPriority } from "../domain/entities/task";
import { buildCreateTask } from "../factories/task";

describe("CreateTask", () => {
  it("should create a new task", async () => {
    const sut = buildCreateTask();

    const task = await sut.execute({
      name: "Task nova",
      description: "Descrição nova",
      priority: TaskPriority.ALTA,
      dueDate: new Date(),
    });

    expect(task).toBeInstanceOf(Task);
    expect(task.name).toBe("Task nova");
    expect(task.taskId).toBe(1);
  })
});
