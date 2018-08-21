import { Component } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent {
  estaSobreElemento = false;
  archivos: FileItem[] = [];
  constructor(public cargaImagenesService: CargaImagenesService) { }

  cargarImagenes() {
    this.cargaImagenesService.cargarImagenesFirebase(this.archivos);
  }

  mouseSobre($event) {
    this.estaSobreElemento = $event;
  }

  limpiarArchivos() {
    this.archivos = [];
  }

}
