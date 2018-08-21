import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from "rxjs/operators";


import { Mensaje } from "../interface/mensaje.interface";

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

//https://github.com/angular/angularfire2
//at 08/08/2018

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  usuario: any = {};
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data => {
      console.log(data);
      if (!data) {
        return false;
      }
      this.usuario["nombre"] = data.displayName;
      this.usuario["uid"] = data.uid;
    });
  }

  cargarmensajes() {
    console.log("ChatService.cargarMensajes");
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(5));
    return this.itemsCollection.valueChanges().pipe(map((mensajes: Mensaje[]) => {
      console.log("Mensajes value changed");
      this.chats = mensajes.reverse();
      return mensajes;
    })
    );
  }

  Agregarmensaje(texto: string) {
    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }

    return this.itemsCollection.add(mensaje);
  }

  login(proveedor: string) {
    switch (proveedor) {
      case 'google':
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        break;
      case 'twitter':
        this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
        break;

      default:
        break;
    }
  }
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

}
