

export enum TaskType {
  Feature = 'Feature',
  Bug = 'Bug',
  Documentation = 'Documentation'
}

export enum TaskStatus {
  Backlog = 'Backlog',
  Todo = 'Todo',
  InProgress = 'In Progress',
  Done = 'Done',
  Canceled = 'Canceled'
}

export enum TaskPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}

export interface Task {
  id: string;
  title: string;
  type: TaskType;
  status: TaskStatus;
  priority: TaskPriority
}