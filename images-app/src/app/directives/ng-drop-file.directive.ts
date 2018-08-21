import {
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Input,
  Output
} from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFile]'
})
export class NgDropFileDirective {
  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre = new EventEmitter();

  constructor(private el: ElementRef) {
  }


  @HostListener('dragover', ['$event']) dragOver(e) {
    console.log("dragover");
    this.mouseSobre.emit(true);
    this.prevenirDetener(e);
    return false;
  }

  @HostListener('dragleave', ['$event']) dragLeave(event) {
    console.log("dragleave");
    this.mouseSobre.emit(false);
    this.prevenirDetener(event);
    return false;
  }

  @HostListener('drop', ['$event']) drop(event) {
    console.log("drop");
    const tranferencia = event.dataTransfer
    if (!tranferencia) {
      console.log("transferencia false");
      return false;
    }
    this._extraerArchivos(tranferencia.files);
    this.mouseSobre.emit(false);
    this.prevenirDetener(event);
    return false;
  }


  private _extraerArchivos(archivosLista: FileList) {
    for (let i of Object.getOwnPropertyNames(archivosLista)) {
      let file = archivosLista[i];
      if (this.archivoPuedeSerCargado(file)) {
        const nuevoArchivo = new FileItem(file);
        this.archivos.push(nuevoArchivo);
        console.log("file %s added", file.name);
      }
    }
  }
  private prevenirDetener(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private archivoPuedeSerCargado(archivo) {
    return !this._fileDropped(archivo["name"]) && this.esImagen(archivo.type);
  }

  private esImagen(tipoArchivo: string): boolean {
    return tipoArchivo.startsWith("image");
  }

  private _fileDropped(nombreArchivo): boolean {
    for (const archivo of this.archivos) {
      if (archivo['nombreArchivo'] == nombreArchivo) {
        console.log("archivo %s ya ha sido agregado", nombreArchivo)
        return true;
      }
    }
    return false;
  }
}
