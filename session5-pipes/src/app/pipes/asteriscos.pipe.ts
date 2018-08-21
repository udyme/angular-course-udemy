import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asteriscos'
})
export class AsteriscosPipe implements PipeTransform {

  transform(value: string, f: boolean): any {
    if (f) {
      return value.replace(/./gi,"*");
     // return new Array(value.length).fill("*").join().replace(/,/gi, "");
    } return value;
  }

}
