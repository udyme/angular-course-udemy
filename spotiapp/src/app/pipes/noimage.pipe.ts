import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
   src1="assets/img/noimage.png";
  transform(images: any[]): string {
    if (!images) {
      return this.src1;
    } else {
      if (images.length) {
        return images[0].url;
      } else {
        return this.src1;
      }
    }
  }

}
