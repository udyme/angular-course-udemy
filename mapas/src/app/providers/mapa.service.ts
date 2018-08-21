import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapaService {
  constructor() { }
  //service to consume markers data with firebase
  guardarStorage(data) {
    throw new Error("Not implemented yet");
  }

  getMarcadores() {
    throw new Error("Not implemented yet");
  }

}
