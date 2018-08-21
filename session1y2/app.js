"use strict";
function saludar(nombre) {
    console.log("hola %s", nombre.toUpperCase());
}
var wolverine = {
    nombre: "logan"
};
saludar(wolverine.nombre);
