import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() video:any = null;
  @Output() onCerrarModal = new EventEmitter<any>();
  constructor() { }
  cerrarModal() {
    this.onCerrarModal.emit();
  }
}
