
import { Injectable } from "@angular/core";
import { Lista } from "../models";

@Injectable()
export class DeseosService {
    listas: Lista[] = [];
    constructor() {
        this.cargarStorage();
    }

    borrarLista(lista: Lista) {
        this.listas = this.listas.filter((l: Lista) => {
            return l.id != lista.id;
        });

        this.guardarstorage();
    }

    agregarLista(lista: Lista) {
        this.listas.push(lista);
        this.guardarstorage();
    }

    guardarstorage() {
        localStorage.setItem("data", JSON.stringify(this.listas));

    }

    cargarStorage() {
        if (localStorage.getItem("data")) {
            this.listas = JSON.parse(localStorage.getItem("data"));
        }
    }
}