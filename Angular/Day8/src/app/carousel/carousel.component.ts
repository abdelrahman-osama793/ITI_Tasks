import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  constructor() { }

  timeInterval: any;
  imageNumber: number = 1;
  imageSrc: string = `assets/Images/${this.imageNumber}.png`;

  next() {
    this.imageNumber = Math.min(this.imageNumber + 1, 10);
    this.imageSrc = `assets/Images/${this.imageNumber}.png`;
    // console.log(this.imageNumber);
  }

  previous() {
    this.imageNumber = Math.max(this.imageNumber - 1, 1);
    this.imageSrc = `assets/Images/${this.imageNumber}.png`;
    // console.log(this.imageNumber);
  }

  pause() {
    clearInterval(this.timeInterval);
  }

  reset() {
    this.pause();
    this.imageSrc = `assets/Images/1.png`;
  }

  slideshow() {
    clearInterval(this.timeInterval)
    this.timeInterval = setInterval(() => {
      if (this.imageNumber < 10) {
        this.imageNumber++;
        console.log(this.imageNumber)
        this.imageSrc = `assets/Images/${this.imageNumber}.png`;
      } else {
        this.imageNumber = 0;
      }
      // this.imageSrc = `assets/images/${this.imageNumber}.png`;
    }, 1000)
  }

}
