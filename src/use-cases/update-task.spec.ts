import { describe, it, expect, beforeEach } from "vitest";
import { TaskPriority } from "../domain/entities/task";
import { TaskList } from "../domain/entities/task-list";
import { buildCreateTask } from "../factories/task";
import { TaskRepositorySpy } from "../repositories/spy/task";
import { UpdateTask } from "./update-task";

describe("UpdateTask", () => {
  let taskList: TaskList;
  beforeEach(async () => {
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

  it("should update task given task fields", async()=> {
    const taskRepository = new TaskRepositorySpy();
    const sut = new UpdateTask(taskRepository);

    const updatedTask = await sut.execute({
      taskList,
      taskId: 1,
      name: "New task name",
      priority: TaskPriority.BAIXA
    });

    if (updatedTask) {
      expect(updatedTask.name).toBe("New task name");
      expect(updatedTask.priority).toBe("baixa");
    }
  });

  it("should update task due date", async()=> {
    const taskRepository = new TaskRepositorySpy();
    const sut = new UpdateTask(taskRepository);

    const updatedTask = await sut.execute({
      taskList,
      taskId: 1,
      dueDate: new Date(new Date().getDate() + 5),
    });
    
    if (updatedTask) {
      expect(updatedTask.dueDate).toBe(new Date(new Date().getDate() + 5));
    }
  });

  it("should return undefined if task does not exists", async()=> {
    const taskRepository = new TaskRepositorySpy();
    const sut = new UpdateTask(taskRepository);

    const updatedTask = await sut.execute({
      taskList,
      taskId: 999,
      name: "Non existing task",
    });
    
    expect(updatedTask).toBeUndefined();
  });
});