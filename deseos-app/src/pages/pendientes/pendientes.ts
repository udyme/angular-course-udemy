import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html'
})
export class PendintesPage {
  constructor(public deseosService: DeseosService,
    private navCtrl: NavController, private alertCtlr: AlertController) {
  }

  agregarLista() {
    // this.navCtrl.push(AgregarPage);
    const alerta = this.alertCtlr.create({
      title: "Nueva lista",
      message: "Nombre de la nueva lista que desea",
      inputs: [{
        name: "titulo",
        placeholder: "Nombre de la lista"
      }],
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Agregar",
          handler: data => {
            if (data.titulo.length) {
              this.navCtrl.push(AgregarPage, {
                titulo: data.titulo
              });
            }
            // console.log(data);
          }
        }
      ]
    });
    alerta.present();
  }
}
