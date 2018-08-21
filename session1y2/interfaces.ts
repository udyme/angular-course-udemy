interface xMen {
    nombre: string,
    poder: string,
    clave: number
}

function enviarMision(xmen: { nombre: string }) {
    console.log("enviando a " + xmen.nombre);
}
function enviarCuartel(xmen: xMen) {
    console.log("enviando a " + xmen.nombre);
}


let wolverine1 = {
    nombre: "Wolverine",
    poder: "regeneracion"
};

enviarMision(wolverine1);
enviarCuartel({
    nombre: "Capitan America",
    poder: "Martillo",
    clave: 123
});