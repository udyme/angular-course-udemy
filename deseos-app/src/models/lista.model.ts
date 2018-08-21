import { ListaItem } from "./lista-item.model";

export class Lista {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    items: ListaItem[];
    terminada: boolean;
    constructor(titulo: string) {
        this.titulo = titulo;
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}