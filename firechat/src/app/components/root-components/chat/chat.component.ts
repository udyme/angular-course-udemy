import { Component,OnInit} from '@angular/core';
import { ChatService } from "../../../providers/chat.service";
import { Mensaje } from '../../../interface/mensaje.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  elemento:any;
  mensaje = "";
  constructor(public chatService: ChatService) {
    this.chatService.cargarmensajes().subscribe(mensajes => {
      this.elemento.scrollTop=this.elemento.scrollHeight;
      console.log(mensajes);
    });
  }

  ngOnInit(){
    this.elemento=document.getElementById("app-mensajes");
  }

  enviar_mensaje() {
    console.log(this.mensaje);
    if (this.mensaje.length) {
      this.chatService.Agregarmensaje(this.mensaje).then(() => {
        this.mensaje="";
        console.log("Mensaje enviado a firebase");
      }).catch(e => {
        console.error("error al enviar mensaje " + e);
      });
    }
  }
}
