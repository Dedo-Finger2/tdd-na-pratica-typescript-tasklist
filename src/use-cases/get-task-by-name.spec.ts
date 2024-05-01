import { describe, it, expect } from "vitest";
import { Task, TaskPriority } from "../domain/entities/task";
import { buildGetTaskByName } from "../factories/task";

describe("GetTaskByName", () => {
  it("should return the task with that provided name", async () => {
    const { sut, taskList, createTask } = buildGetTaskByName();
    const taskName = "Task especial";

    const newTask = await createTask.execute({
      name: "Task especial",
      priority: TaskPriority.ALTA,
    });
    taskList.addTask(newTask);
    const task = await sut.execute({ 
      name: taskName,
      taskList, 
    });

    expect(task).toBeDefined();
    if (task) {
      expect(task).toBeInstanceOf(Task);
      expect(task.name).toBe(taskName);
    }
  });
});