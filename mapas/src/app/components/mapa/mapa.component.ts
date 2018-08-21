import { Component } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  lat = 51.678418;
  lng = 7.809007;
  marcadores: Marcador[] = [];
  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {
    if (localStorage.getItem("marcadores")) {
      this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
    }
  }

  agregarMarcador(event) {
    const coords = event.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    let snackBarRef = this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 4000 });
  }

  guardarStorage() {
    localStorage.setItem("marcadores", JSON.stringify(this.marcadores));
  }

  borrarMarcador(i) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    let snackBarRef = this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 4000 });
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        marcador.titulo = result.titulo;
        marcador.desc = result.desc;
        this.guardarStorage();
        let snackBarRef = this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 4000 });
      }
    });

  }

}
