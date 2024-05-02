import { TaskList } from "../domain/entities/task-list";
import { TaskRepositorySpy } from "../repositories/spy/task";
import { CreateTask } from "../use-cases/create-task";
import { GetTaskByName } from "../use-cases/get-task-by-name";
import { GetTaskByPriority } from "../use-cases/get-task-by-priority";
import { GetTaskByStatus } from "../use-cases/get-task-by-status";
import { GetTaskDetailsById } from "../use-cases/get-task-details-by-id";
import { GetTasksSorted } from "../use-cases/get-tasks-sorted";
import { ToggleTaskStatus } from "../use-cases/toggle-task-status";
import { UpdateTask } from "../use-cases/update-task";

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

export const buildGetTasksSorted = (): GetTasksSorted => {
  const taskRepository = new TaskRepositorySpy();
  const sut = new GetTasksSorted(taskRepository);
  return sut
};

export const buildGetTaskDetailsById = (): GetTaskDetailsById => {
  const taskRepository = new TaskRepositorySpy();
  const sut = new GetTaskDetailsById(taskRepository);
  return sut;
};

export const buildUpdateTask = (): UpdateTask => {
  const taskRepository = new TaskRepositorySpy();
  const sut = new UpdateTask(taskRepository);
  return sut;
};

export const buildToggleTaskStatus = (): ToggleTaskStatus => {
  const taskRepository = new TaskRepositorySpy();
  const sut = new ToggleTaskStatus(taskRepository);
  return sut;
}