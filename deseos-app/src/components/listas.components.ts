import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { Lista } from '../models/index';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar';

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html'
})
export class ListasComponent {
  @Input() terminada = false;
  constructor(public deseosService: DeseosService,
    private navCtrl: NavController,
    private alertCtrl: AlertController) {

  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }

  listaSeleccionada(lista: Lista) {
    this.navCtrl.push(AgregarPage, {
      titulo: lista.titulo,
      lista: lista
    });
  }

  editarLista(lista: Lista, itemSliding: ItemSliding) {
    itemSliding.close();
    const alerta = this.alertCtrl.create({
      title: "Editar Lista",
      message: "Editar el nombre de la lista",
      inputs: [{
        name: "titulo",
        placeholder: "Nombre de la lista",
        value: lista.titulo
      }],
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Guardar",
          handler: data => {
            if (data.titulo.length) {
              lista.titulo = data.titulo;
              this.deseosService.guardarstorage();
            }
          }
        }
      ]
    });
    alerta.present();
  }

}
