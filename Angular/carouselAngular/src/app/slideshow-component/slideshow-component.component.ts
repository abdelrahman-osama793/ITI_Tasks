import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow-component',
  templateUrl: './slideshow-component.component.html',
  styleUrls: ['./slideshow-component.component.css']
})
export class SlideshowComponentComponent {
  constructor() { }
  timeInterval: any;
  imageNumber: number = 1;
  imageSrc: string = `assets/images/${this.imageNumber}.png`;

  next() {
    this.imageNumber = Math.min(this.imageNumber + 1, 10);
    this.imageSrc = `assets/images/${this.imageNumber}.png`;
    // console.log(this.imageNumber);
  }

  previous() {
    this.imageNumber = Math.max(this.imageNumber - 1, 1);
    this.imageSrc = `assets/images/${this.imageNumber}.png`;
    // console.log(this.imageNumber);
  }

  pause() {
    clearInterval(this.timeInterval);
  }

  reset(){
    this.pause();
    this.imageSrc = `assets/images/1.png`;
  }

  slideshow() {
    clearInterval(this.timeInterval)
    this.timeInterval = setInterval(() => {
      if (this.imageNumber < 10) {
        this.imageNumber++;
        console.log(this.imageNumber)
        this.imageSrc = `assets/images/${this.imageNumber}.png`;
      } else {
        this.imageNumber = 0;
      }
      // this.imageSrc = `assets/images/${this.imageNumber}.png`;
    }, 1000)
  }

}
