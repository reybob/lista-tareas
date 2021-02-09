import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() eventName = new EventEmitter<string>();
  name: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.name = this.dataService.getName();
  }

  addName(value: string) {
    this.eventName.emit(value);
  }

}
