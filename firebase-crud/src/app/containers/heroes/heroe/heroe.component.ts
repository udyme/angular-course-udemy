import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Heroe } from "../../../interfaces/heroe.interface";
import { HeroeService } from '../../../services/heroes.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "marvel"
  };
  nuevo = false;
  id: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private heroeService: HeroeService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.id = params.id;
      if (this.id != "nuevo") {
        this.heroeService.getHeroe(this.id).subscribe((data: any) => this.heroe = data);
      }
    });
  }

  guardar() {
    if (this.id == "nuevo") {
      //insertando
      console.log("guardar");
      this.heroeService.nuevoHeroe(this.heroe).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/heroe', data.name]);
      }, error => {
        console.error(error);
      });
    } else {
      //actualizando
      console.log("actualizar");
      this.heroeService.actualizarHeroe(this.heroe, this.id).subscribe((data: any) => {
        console.log(data);
      }, error => {
        console.error(error);
      });
    }
  }

  agregarNuevo(frm: NgForm) {
    console.log("agregarNuevo");
    this.router.navigate(['/heroe', 'nuevo']);
    frm.reset({
      casa:"marvel"
    });
  }

}
