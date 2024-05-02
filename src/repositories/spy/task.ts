import { Task, TaskParams, TaskStatus } from "../../domain/entities/task";
import { FindAllTasksParams, FindTaskParams, TaskRepository, ToggleTaskStatusParams, UpdateTaskParams } from "../task-repository";

export class TaskRepositorySpy implements TaskRepository {
  async create({ name, priority, description, dueDate }: TaskParams): Promise<Task> {
    const task = new Task({
      name,
      priority,
      description,
      dueDate,
    });
    return task;
  }

  async find({ key, value, taskList }: FindTaskParams): Promise<Task | undefined> {
    let task;
    switch (key) {
      case "nome": task = taskList.tasks.find((task) => task.name === value); break;
      case "descrição": task = taskList.tasks.find((task) => task.description === value); break;
      case "data-vencimento": task = taskList.tasks.find((task) => task.dueDate === value); break;
      case "prioridade": task = taskList.tasks.find((task) => task.priority === value); break;
      case "status": task = taskList.tasks.find((task) => task.status === value); break;
      case "id": task = taskList.tasks.find((task) => task.taskId === value); break;
      default: task = undefined; break;
    }
    return task;
  }

  async findAll({ orderBy, orientation, taskList }: FindAllTasksParams): Promise<Task[]> {
    let tasks = taskList.tasks;
    switch (orderBy) {
      case "name": tasks = taskList.tasks.sort((a, b) => a.name.localeCompare(b.name)); break;
      // case "description": tasks =  break;
      case "dueDate": tasks = tasks = taskList.tasks.sort((a, b) => { 
        if (a.dueDate && b.dueDate) {
          const dateA = new Date(a.dueDate.toDateString());
          const dateB = new Date(b.dueDate.toDateString());
          
          return dateA.getTime() - dateB.getTime();
        }
        return 0;
      }); break;
      case "priority": tasks = tasks = taskList.tasks.sort((a, b) => a.priority.localeCompare(b.priority)); break;
      // case "status": tasks =  break;
      default: tasks = taskList.tasks; break;
    }
    if (orientation === "DESC") tasks = tasks.reverse();
    return tasks;
  }

  async update({ taskId, taskList, name, description, dueDate, priority }: UpdateTaskParams): Promise<Task | undefined> {
    const taskFound = taskList.tasks.find((task) => task.taskId === taskId);
    if (taskFound) {
      Object.assign(taskFound, {
        name,
        description,
        dueDate,
        priority,
      });
      taskList.tasks = [
        ...taskList.tasks,
        taskFound,
      ];
      return taskFound;
    }
    return undefined;
  }

  async toggleStatus({ taskId, taskList }: ToggleTaskStatusParams): Promise<Task | undefined> {
    const taskFound = taskList.tasks.find((task) => task.taskId === taskId);
    if (!taskFound) return undefined;
    taskFound.status = taskFound.status === TaskStatus.PENDENTE ? TaskStatus.CONCLUIDA : TaskStatus.PENDENTE;
    taskList.tasks = [
      ...taskList.tasks,
      taskFound
    ];
    return taskFound;
  }
}