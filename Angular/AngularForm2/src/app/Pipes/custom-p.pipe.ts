import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customP'
})
export class CustomPPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
