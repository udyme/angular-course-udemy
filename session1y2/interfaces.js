"use strict";
function enviarMision(xmen) {
    console.log("enviando a " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("enviando a " + xmen.nombre);
}
var wolverine1 = {
    nombre: "Wolverine",
    poder: "regeneracion"
};
enviarMision(wolverine1);
enviarCuartel({
    nombre: "Capitan America",
    poder: "Martillo",
    clave: 123
});
