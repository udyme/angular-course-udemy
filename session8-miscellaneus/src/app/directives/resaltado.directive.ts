import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("nuevocolor") nuevoColor: string;
  constructor(private el: ElementRef) {
    console.log("directiva llamada");
    // el.nativeElement.style.backgroundColor="yellow";
  }

  @HostListener('mouseenter') mouseetro() {
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor);
  }

  @HostListener('mouseleave') mousesalio() {
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
