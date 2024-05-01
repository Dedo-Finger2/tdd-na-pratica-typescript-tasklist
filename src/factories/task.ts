import { TaskRepositorySpy } from "../repositories/spy/task";
import { CreateTask } from "../use-cases/create-task";

export const buildCreateTask = () => {
  const createTaskRepository = new TaskRepositorySpy();
  const sut = new CreateTask(createTaskRepository);

  return sut;
}