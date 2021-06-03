import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../Services/app-service.service';

@Component({
  selector: 'app-details-comp',
  templateUrl: './details-comp.component.html',
  styleUrls: ['./details-comp.component.css']
})
export class DetailsCompComponent implements OnInit {
  id: number = 0;
  user: any;
  constructor(private myActivatedRoute: ActivatedRoute, private myService: AppServiceService) {
    this.id = myActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.myService.GetUserByID(this.id).subscribe(
      (res) => { this.user = res },
      (err) => {
        throw new Error("error");
      },
      
    )
  }

}
