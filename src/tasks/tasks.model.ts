export interface Task {
  //define properties of a task
  id: string;
  title: string;
  description: string;
  status: TaskStatus.OPEN;
}

enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export { TaskStatus };
