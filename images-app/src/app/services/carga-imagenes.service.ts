import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore"
import * as firebase from "firebase";
import { FileItem } from '../models/file-item';
import { Observable } from 'rxjs';

export interface Item {
  nombre: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})

export class CargaImagenesService {
  private CARPETA_IMAGENES = "img";
  //private itemsCollection: AngularFirestoreCollection<any>;
  //documentation reference
  //https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md
  private itemsCollection: AngularFirestoreCollection<Item>;
  public fotos: Observable<Item[]>;
  constructor(private db: AngularFirestore) {
    this.itemsCollection = db.collection<Item>(this.CARPETA_IMAGENES);
    this.fotos = this.itemsCollection.valueChanges();
  }

  cargarImagenesFirebase(imagenes: FileItem[]) {
    const storageRef = firebase.storage().ref();
    for (const item of imagenes) {
      item.estaSubiendo = true;
      if (item.progreso >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
        .put(item.archivo);
      uploadTask.on('state_changed',
        (snapshot: firebase.storage.UploadTaskSnapshot) => {
          item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        }, (error) => {
          console.error("Error al subir");
        }, () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            item.url = downloadURL;
            item.estaSubiendo = false;
            this.guardarImagen({ nombre: item.nombreArchivo, url: item.url });
          });
        }
      );
    }
  }

  private guardarImagen(imagen: { nombre: string, url: string }) {
    this.db.collection(`${this.CARPETA_IMAGENES}`).add(imagen);
  }
}
