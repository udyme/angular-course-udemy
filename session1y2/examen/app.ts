
// Uso de Let y Const
let nombre2:string = "Alex Pariona";
let edad2:number = 55;

const PERSONAJE = {
  nombre: nombre,
  edad: edad
};

interface IAvenger {
  nombre: string,
  artesMarciales: string[]
}

// Cree una interfaz que sirva para validar el siguiente objeto
var batman:IAvenger = {
  nombre: "killua zoldick",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
}

// Funcion flecha

let resultadoDobleF = (a: number, b: number): number => {
  return (a + b) * 2;
}

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"

function getAvenger1(nombre: string, poder?:string, arma: string = "arco") {
  let mensaje;
  if (poder) {
    mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    mensaje = `${nombre} tiene el poder de:  ${poder}  y un arma: ${arma}`;
  } else {
    mensaje = nombre + " tiene un " + poder
  }
};

class Rectangulo {
  base: number = 0;
  altura: number = 0;
  calcularArea(): number {
    return this.base * this.altura;
  }
}

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
