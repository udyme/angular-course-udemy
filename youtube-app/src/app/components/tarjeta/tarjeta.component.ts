import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() videos = [];
  @Output() onVerVideo = new EventEmitter<any>();
  constructor() { }
  verVideo(video) {
    this.onVerVideo.emit(video);
  }

}
