import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularForm2';

  @Input() receivedData: any = [];

  GetData(data: any) {
    this.receivedData.push(data);
    console.log(this.receivedData);
  }

}
