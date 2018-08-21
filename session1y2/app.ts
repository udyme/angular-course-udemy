function saludar(nombre: string) {
    console.log("hola %s", nombre.toUpperCase());
}

var wolverine = {
    nombre: "logan"
};

saludar(wolverine.nombre);