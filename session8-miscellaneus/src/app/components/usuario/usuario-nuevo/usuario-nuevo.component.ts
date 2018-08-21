import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent {

  constructor(private aRoute: ActivatedRoute) {
    console.log("constructor");
    this.aRoute.parent.params.subscribe(params => {
      console.log("ruta hija usuario nuevo");
      console.log(params);
    });
  }

}
