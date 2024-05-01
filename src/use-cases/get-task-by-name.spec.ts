import { describe, it, expect } from "vitest";
import { Task, TaskPriority } from "../domain/entities/task";
import { TaskRepositorySpy } from "../repositories/spy/task";
import { GetTaskByName } from "./get-task-by-name";
import { TaskList } from "../domain/entities/task-list";
import { CreateTask } from "./create-task";

describe("GetTaskByName", () => {
  it("should return the task with that provided name", async () => {
    const taskRepository = new TaskRepositorySpy();
    const taskList = new TaskList({
      createdAt: new Date(),
    });
    const createTask = new CreateTask(taskRepository);
    const sut = new GetTaskByName(taskRepository);
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
