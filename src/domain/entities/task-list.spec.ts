import { describe, it, expect } from "vitest";
import { TaskList } from "./task-list";

describe("TaskList", () => {
  it("should instanciate a new task list", () => {
    const taskList = new TaskList({
      createdAt: new Date(),
    });

    expect(taskList.createdAt).toEqual(new Date());
  });
});
