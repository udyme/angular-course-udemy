import { Component } from '@angular/core';
//import { AngularFirestore } from 'angularfire2/firestore';
//import { Observable } from 'rxjs';

import {ChatService} from "./providers/chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public chatService:ChatService) {

  }
}

