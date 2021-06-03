import { Component, Input, OnInit } from '@angular/core';
import { AppServiceService } from '../Services/app-service.service';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css']
})
export class TableCompComponent implements OnInit {

  constructor(private myService: AppServiceService) { }

  users: any;

  ngOnInit(): void {
    this.myService.GetAllUsers().subscribe(
      (res) => { this.users = res; },
      (error) => {
        throw new Error("Error in getting data");
      }
    );
  }


}
