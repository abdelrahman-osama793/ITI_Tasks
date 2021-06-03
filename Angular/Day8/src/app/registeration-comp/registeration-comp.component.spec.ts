import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationCompComponent } from './registeration-comp.component';

describe('RegisterationCompComponent', () => {
  let component: RegisterationCompComponent;
  let fixture: ComponentFixture<RegisterationCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterationCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
