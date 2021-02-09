import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  name: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.name = this.dataService.getName();
  }

  

}
