class Avenger {
    nombre: string = "";
    equipo: string = "";
    nombreReal: string = "";
    puedePelear: boolean = false;
    peleasGanadas: number = 0;

    constructor(nombre: string, equipo: string, nombreReal: string) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antMan = new Avenger("Antman","avengers","Don AntMan");
console.log(antMan);