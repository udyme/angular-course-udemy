import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() items = [];
  @Input() loading:boolean;
  @Input() error:boolean;
  @Input() criteria:string;
  constructor(private router: Router) { 
  }
  verArtista(item: any) {
    let id: string;
    if (item.hasOwnProperty("artists")) {
      id = item.artists[0].id;
    } else {
      id = item.id;
    }
    this.router.navigate(["/artist", id]);
  }

}
