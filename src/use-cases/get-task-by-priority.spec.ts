import { describe, it, expect } from "vitest";
import { Task, TaskPriority } from "../domain/entities/task";
import { buiLDGetTaskByPriority } from "../factories/task";

describe("GetTaskByPriority", () => {
  it("should return the task with that provided priority", async () => {
    const { sut, taskList, createTask } = buiLDGetTaskByPriority();
    const taskPriorityTarget = TaskPriority.MEDIA;

    const newTask = await createTask.execute({
      name: "Task especial",
      priority: TaskPriority.MEDIA,
    });
    taskList.addTask(newTask);
    const task = await sut.execute({ 
      priority: taskPriorityTarget,
      taskList, 
    });

    expect(task).toBeDefined();
    if (task) {
      expect(task).toBeInstanceOf(Task);
      expect(task.priority).toBe(taskPriorityTarget);
    }
  });
});