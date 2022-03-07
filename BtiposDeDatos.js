console.log("[GUÍA]: Aquí empezamos con los TIPOS DE DATOS");
/**
 * BLOQUE 2: TIPOS DE DATOS
 * 
 * TIPOS DE DATOS PRIMITIVOS
 *      - String
 *      - Number
 *      - Boolean
 *      - Null
 *      - Undefined
 *      - Symbols - Hablaremos más adelante.
 
 * TIPOS DE DATOS REFERENCIADOS
 *      - Arrays
 *      - Object Literals
 *      - Functions
 *      - Dates
 *      - Anything not primitive
 * 
 * Es un leguaje no tipado. El intérprete decide que tipo de dato
 * asignar dependiendo del contenido. 
 */

/* Tipos de datos primitivos */
// String: Elegid una
const nombre = "Dimas";
const nombre2 = 'Dimas';
// Number
const amigos = 3;
// Boolean
const isYoutuber = true;
// Null
const felicidad = null;
// Undefined
let girlfriend;
// Podemos visualizar el tipo de dato utilizando typeof
console.log(typeof(nombre), typeof(amigos), typeof(isYoutuber), typeof(girlfriend));


/* Algunos tipos de datos referenciados */
// Array
const lenguajes = ["Python", "Java", "C++"]
// Object Literal
const video = {
    views: 1000,
    likes: 50,
    subsGanados: 10
}

console.log(typeof lenguajes, typeof video);

// Conversión de tipos de datos
// Number a string
const temperatura = String(30.5)
console.log(temperatura, typeof temperatura)

const visitas = (100).toString()
console.log(visitas, typeof visitas)

// String a number
let valor = '33.44'
let valorNumerico = Number(valor)
console.log(valorNumerico, typeof valorNumerico)

let valorEntero = parseInt(valor)
console.log(valorEntero, typeof valorEntero)

let valorDecimal = parseFloat(valor)
console.log(valorDecimal, typeof valorDecimal)