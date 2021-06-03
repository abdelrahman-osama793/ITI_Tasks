import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomD]'
})
export class CustomDDirective {

  constructor(private MyElementRef: ElementRef) {
    console.log(MyElementRef);
  }

  @HostListener('click') click() {
    this.MyElementRef.nativeElement.style.backgroundColor = this.info.bgColor;
    this.MyElementRef.nativeElement.style.color = this.info.fgColor;
    this.MyElementRef.nativeElement.style.fontSize = this.info.fontSize;


  }

  @Input('appCustomD') info: any;
}
