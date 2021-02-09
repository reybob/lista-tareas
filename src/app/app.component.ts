import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tareas';
  name: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getName()
  }

  getName(){
    this.name = this.dataService.getName();
  }

  addName(newName: string){
    this.dataService.addName(newName);
    this.getName();
  }

}
