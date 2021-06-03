import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fullName: string = "";
  firstName: string = "";
  age: number = 1;
  peopleRecords: { name: string, age: number }[] = [];

  reset() {
    if (this.fullName.length > 0) {
      this.fullName = "Enter you full name";
    }
  }

  get validateName() {
    return this.firstName != "" && this.firstName.length >= 3;
  }

  get validateAge() {
    return this.age >= 18 && this.age <= 60;
  }

  addNewRecord() {
    let peopleRecords: { name: string, age: number } = { name: this.firstName, age: this.age };

    if (this.validateAge && this.validateName)
      this.peopleRecords.push(peopleRecords);
  }
}
