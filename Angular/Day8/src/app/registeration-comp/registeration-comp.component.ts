import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration-comp',
  templateUrl: './registeration-comp.component.html',
  styleUrls: ['./registeration-comp.component.css']
})
export class RegisterationCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstName: string = "";
  age: number = 1;
  ourValidationForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    age: new FormControl(18, [Validators.min(18), Validators.max(60)])
  });

  get nameValid() {
    return this.ourValidationForm.controls.firstName.valid;
  }

  get ageValid() {
    return this.ourValidationForm.controls.age.valid;
  }

  @Output() recordEvent = new EventEmitter();

  addNewRecord() {
    if (this.nameValid && this.ageValid) {
      let peopleRecords: { firstName: string, age: number } = {
        firstName: this.ourValidationForm.controls.firstName.value,
        age: this.ourValidationForm.controls.age.value
      };
      this.recordEvent.emit(peopleRecords);
      console.log(peopleRecords);
    }
  }
}
