import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks: Task[];
  name: string;
  constructor() {
    this.tasks = [];
    this.name = "";

  }
  
  getTask(): Task[] {
    if (localStorage.getItem('tasks') === null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return this.tasks;
  }

  addName(name: string): void {
    if (localStorage.getItem('name') === null) {
      localStorage.setItem('name', name);
    }
  }

  getName(): string {
    if (localStorage.getItem('name') === null) {
      this.name = "";
    } else {
      this.name = localStorage.getItem('name');
    }
    return this.name;
  }

  addTask(task: Task): void {
    this.tasks.unshift(task);
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  removeTask(task: Task): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }
}
