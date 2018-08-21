import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  fireUrl = "https://fir-crud-48e87.firebaseio.com/";
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) {
  }

  nuevoHeroe(heroe: Heroe) {
    console.log("nuevoHeroe %o", heroe);
    let body = JSON.stringify(heroe);
    const url = `${this.fireUrl}heroes.json`;
    return this.http.post(url, body, {
      headers: this.headers
    }).pipe(map(res => {
      return res;
    }));
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify(heroe);
    let url = `${this.fireUrl}heroes/${key$}.json`;
    return this.http.put(url, body, {
      headers: this.headers
    }).pipe(map(res => {
      return res;
    }));
  }

  getHeroe(id: string) {
    console.log("getHeroe=%s", id)
    let url = `${this.fireUrl}heroes/${id}.json`;
    return this.http.get(url).pipe(map(res => {
      return res;
    }));
  }

  getHeroes() {
    console.log("getHeroes")
    let url = `${this.fireUrl}heroes.json`;
    return this.http.get(url).pipe(map(res => {
      console.log("res=%o",res);
      return res;
    }));
  }

  borrarHeroe(id: string) {
    console.log("borrarHeroe=%s", id)
    let url = `${this.fireUrl}heroes/${id}.json`;
    return this.http.delete(url).pipe(map(res => {
      console.log("Borrado=%s", id)
      return res;
    }));
  }

}