/**
 * Aquí da comienzo el tutorial de JavaScript
 * Espero que lo disfrutéis.
 * 
 * Por cierto, esto es un comentario multilínea.
 */

// Esto es un comentario de una línea
// Así podemos mostrar mensajes en la consola del navegador.

console.log("Hola, esto es el inicio del tutorial");

/**
 * BLOQUE 1 - VARIABLES
 * Tipos de variables. 
 * Cuándo usar cada una.
 */

console.log("[GUÍA]: Aquí empezamos con los tipos de variables");

// Existen tres formas de declarar variables: var, let, const
var nombre = "Dimas";
let apellido = "Avila";
const dni = "12332199R";

console.log(nombre, apellido, dni);

// Los nombres de las variables pueden incluir: letras, números, _ , $
// No pueden empezar con números
const _hol4 = "hola";
let $money = 1500;
console.log(_hol4, $money);

// Puedes declarar una variable sin asignar un valor: (LET, VAR)
var fruta;
let comida;
fruta = "plátano";
comida = "paella";
console.log(fruta, comida);

// Con var y let las variables se pueden reasignar. Incluso cambiar el tipo de datos.
fruta = "pera";
comida = "arroz negro"
console.log(fruta, comida)
fruta = 33
comida = 25
console.log(fruta, comida);


// Const requiere la asignación de un valor cuando se inicializa:
// La siguiente línea da un error
// const variable;
const variable = 33;
console.log(variable);

// No se puede reasignar una variable declara como const
// La siguiente línea da un error:
// variable = 35;

// Casos a tener en cuenta: Modificar objetos declarados como const
// Sí se pueden modificar: 
const actividades = ["baloncesto", "futbol", "ciclismo"]
actividades.push("natación")
console.log(actividades);

const persona = {
    nombre: "Dimas",
    edad: 23
}

persona.nombre = "Alberto"
persona.colorFavorito = "Azul"
console.log(persona);

// No se pueden reasignar: 
// Shift + Alt + A  -> comentar/descomentar un bloque seleccionado
/* actividades = ["baloncesto", "futbol", "ciclismo", "natación"]
persona = {
    nombre: "Alan",
    edad: 33
} */
