class Task {
  constructor(
    public description: string, 
    public completed: boolean = false) {}
}
//import Task from './task';

class TaskList {
  private tasks: Task[] = [];

  addTask(description: string): void {
    this.tasks.push(new Task(description));
  }

  completeTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
    }
  }

  removeTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}

export default TaskList;