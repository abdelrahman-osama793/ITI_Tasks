import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowComponentComponent } from './slideshow-component.component';

describe('SlideshowComponentComponent', () => {
  let component: SlideshowComponentComponent;
  let fixture: ComponentFixture<SlideshowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideshowComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
