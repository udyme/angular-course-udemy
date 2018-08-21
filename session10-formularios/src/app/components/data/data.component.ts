import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  forma: FormGroup;
  usuario = {
    nombreCompleto: {
      nombre: "Eduardo",
      apellido: "Carrillo"
    },
    correo: "ecarrillosalvatierra@gmail.com",
    pasatiempos: ["Caminar"]
  };
  constructor() {
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl('',
          [
            Validators.required,
            Validators.minLength(3)
          ]),
        apellido: new FormControl('', [Validators.required, this.noCarrillo])
      }),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      pasatiempos: new FormArray([
        new FormControl('Dormir')
      ]),
      username: new FormControl('', Validators.required, this.existeUsuario),
      password1: new FormControl('', Validators.required),
      password2: new FormControl()
    });
    // this.forma.setValue(this.usuario);

    this.forma.controls["password2"].setValidators([Validators.required, this.noIgual]);
    /*
        this.forma.valueChanges.subscribe(data=>{
          console.log(data);
        });*/

    this.forma.controls.username.valueChanges.subscribe(data => {
      console.log(data);
    });

    this.forma.controls.username.statusChanges.subscribe(data => {
      console.log("username status");
      console.log(data);
    });

  }

  noIgual = (control: FormControl): { [s: string]: boolean } => {
    if (control.value !== this.forma.controls.password1.value) {
      return {
        noiguales: true
      };
    }
    return null;
  }

  guardarCambios() {
    console.info("Guardar Cambios");
    console.log(this.forma);
    //this.forma.reset();
    //this.forma.controls.correo.setValue("nuevocoreo@hotmail.com");
  }

  agregarPasatiempo() {
    console.log("agregarPasatiempos");
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Comer')
    );

  }

  noCarrillo(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Carrillo") {
      return {
        nocarrillo: true
      };
    }
    return null;
  }

  //validacion asyncrona

  existeUsuario = (control: FormControl): Promise<any> | Observable<any> => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (control.value === "ecarrillo") {
          return resolve({ existe: true });
        }
        resolve(null);
        // return resolve();
      }, 1000);
    });

  }

}
