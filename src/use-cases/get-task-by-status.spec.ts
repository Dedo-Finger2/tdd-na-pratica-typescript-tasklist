import { describe, it, expect } from "vitest";
import { Task, TaskPriority, TaskStatus } from "../domain/entities/task";
import { buildGetTaskByStatus } from "../factories/task";

describe("GetTaskByStatus", () => {
  it("should return the task with that provided status", async () => {
    const { sut, taskList, createTask } = buildGetTaskByStatus();
    const taskStatusTarget = TaskStatus.PENDENTE;

    const newTask = await createTask.execute({
      name: "Task especial",
      priority: TaskPriority.MEDIA,
    });
    taskList.addTask(newTask);
    const task = await sut.execute({ 
      status: taskStatusTarget,
      taskList, 
    });

    expect(task).toBeDefined();
    if (task) {
      expect(task).toBeInstanceOf(Task);
      expect(task.status).toBe(taskStatusTarget);
    }
  });
});