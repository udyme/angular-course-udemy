import { Component } from '@angular/core';
import {ChatService} from "../../../providers/chat.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public chatService:ChatService) { }

  ingresar(value: string) {
    console.log(value);
    this.chatService.login(value);
  }

}
