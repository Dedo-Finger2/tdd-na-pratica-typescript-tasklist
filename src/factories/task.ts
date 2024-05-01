import { TaskList } from "../domain/entities/task-list";
import { TaskRepositorySpy } from "../repositories/spy/task";
import { CreateTask } from "../use-cases/create-task";
import { GetTaskByName } from "../use-cases/get-task-by-name";

export const buildCreateTask = () => {
  const createTaskRepository = new TaskRepositorySpy();
  const sut = new CreateTask(createTaskRepository);

  return sut;
}

type GetTaskByNameReturn = { 
  sut: GetTaskByName,
  createTask: CreateTask,
  taskList: TaskList,
};

export const buildGetTaskByName = (): GetTaskByNameReturn => {
  const taskRepository = new TaskRepositorySpy();
  const sut = new GetTaskByName(taskRepository);
  const taskList = new TaskList({
    createdAt: new Date(),
  });
  const createTask = new CreateTask(taskRepository);

  return {
    sut,
    taskList,
    createTask
  };
}