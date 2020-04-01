import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  title: string;
  descripcion: string;

  @Output() public taskAdded = new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    if (this.title && this.descripcion) {
      // Enviar los datos hacia fuera
      this.taskAdded.emit({
        title: this.title,
        description: this.descripcion,
        hide: true
      });
      this.title = '';
      this.descripcion = '';
    } else {
      if (!this.title) {
        alert('Añade un titulo');
      }
      if (!this.descripcion) {
        alert('Añade una descripcion');
      }
    }
  }

}
