import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task: Task = {
      id: '',
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
