import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private aRoute: ActivatedRoute) {
    this.aRoute.params.subscribe(params => {
      console.log("ruta padre");
      console.log(params);
    });
  }

  ngOnInit() {
  }

}
