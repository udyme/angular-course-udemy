import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../models/index';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html'
})
export class AgregarPage {
  lista: Lista;
  nombreItem: string = '';
  constructor(public deseosService: DeseosService,
    private navParams: NavParams) {
    if (this.navParams.get("lista")) {
      this.lista = this.navParams.get("lista");
    } else {
      const titulo = this.navParams.get("titulo");
      this.lista = new Lista(titulo);
      this.deseosService.agregarLista(this.lista);
    }

  }

  agregarItem() {
    if (this.nombreItem.trim().length) {
      const nuevoItem = new ListaItem(this.nombreItem);
      this.lista.items.push(nuevoItem);
      this.deseosService.guardarstorage();
      this.nombreItem = "";
    }
  }

  actualizarTarea(item: ListaItem) {
    item.completado = !item.completado;

    const pendientes = this.lista.items.filter(value => {
      return !value.completado;
    }).length;
    console.log(pendientes);

    if (!pendientes) {
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date()
    } else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }

    this.deseosService.guardarstorage();
  }

  borrar(i: number) {
    this.lista.items.splice(i, 1);
    this.deseosService.guardarstorage();
  }
}
