import { TaskList } from "../domain/entities/task-list";
import { TaskRepositorySpy } from "../repositories/spy/task";
import { CreateTask } from "../use-cases/create-task";
import { GetTaskByName } from "../use-cases/get-task-by-name";
import { GetTaskByPriority } from "../use-cases/get-task-by-priority";
import { GetTaskByStatus } from "../use-cases/get-task-by-status";
import { GetTasksSorted } from "../use-cases/get-tasks-sorted";

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
};

type GetTaskByPriorityReturn = { 
  sut: GetTaskByPriority,
  createTask: CreateTask,
  taskList: TaskList,
};

export const buildGetTaskByPriority = (): GetTaskByPriorityReturn => {
  const taskRepository = new TaskRepositorySpy();
  const sut = new GetTaskByPriority(taskRepository);
  const taskList = new TaskList({ createdAt: new Date() });
  const createTask = new CreateTask(taskRepository);
  return {
    sut,
    taskList,
    createTask,
  };
};

type GetTaskByStatusReturn = { 
  sut: GetTaskByStatus,
  createTask: CreateTask,
  taskList: TaskList,
};

export const buildGetTaskByStatus = (): GetTaskByStatusReturn => {
  const taskRepository = new TaskRepositorySpy();
  const sut = new GetTaskByStatus(taskRepository);
  const taskList = new TaskList({ createdAt: new Date() });
  const createTask = new CreateTask(taskRepository);
  return {
    sut,
    taskList,
    createTask,
  };
};

export const buildGetTasksSorted= (): GetTasksSorted => {
  const taskRepository = new TaskRepositorySpy();
  const sut = new GetTasksSorted(taskRepository);
  return sut
};