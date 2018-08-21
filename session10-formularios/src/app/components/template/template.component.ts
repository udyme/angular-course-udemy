import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  usuario = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "-1",//Si aqui pongo CRI y quito el primer option del select, va aparecer el valor que ponga aqui ejemplo CRI
    sexo: "Hombre",
    acepta: false
  };
  //Radio de sexos
  sexos = ["Hombre", "Mujer", "Sin definir"];
  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ESP",
    nombre: "España"
  }
  ];
  constructor() { }

  guardar(frm: NgForm) {
    console.log("formulario");
    console.log(frm);
  }
}
