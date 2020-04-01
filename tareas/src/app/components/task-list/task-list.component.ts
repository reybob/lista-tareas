import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.tasks = this.dataService.getTask();
  }

  addTask(task: Task) {
    this.dataService.addTask(task);
  }



}
