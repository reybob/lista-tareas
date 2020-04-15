import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input('task') task: Task;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  removeTask(task: Task) {
    const response = confirm('Estas seguro de eliminar tu tarea?');
    if (response) {
      this.dataService.removeTask(task);
    }
  }
}
