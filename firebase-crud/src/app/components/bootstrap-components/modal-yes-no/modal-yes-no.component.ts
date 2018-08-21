import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-yes-no',
  templateUrl: './modal-yes-no.component.html',
  styleUrls: ['./modal-yes-no.component.css']
})
export class ModalYesNoComponent {
  @Input() title: string;
  @Input() message: string;
  constructor() { }
}
