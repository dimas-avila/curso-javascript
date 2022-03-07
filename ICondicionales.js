/**
 * BLOQUE 9 - Condicionales
 *
 */
console.log("[GUÍA]: Aquí empezamos con los Condicionales");

// Estructura básica: 

let edad = 20;

if (edad >= 65) {
    console.log("Jubilado");
}else if( edad >= 18 ){
    console.log("Mayor de edad");
}else if( edad == 23){
    console.log("Felicidades, estás en la mejor edad");
}
else {
    console.log("Menor de edad");
}

// Comparación de igualdad

// Comparar valor
if (10 == 10) {
    console.log('Son iguales');
}else {
    console.log('Son diferentes');
}

// Atención!
if (10 == '10'){
    console.log('Son iguales');
}else{
    console.log('Son diferentes');
}

// Solución -> ===
// El operador === compara los tipos de datos y su valor
if (10 === '10'){
    console.log('Son iguales');
}else{
    console.log('Son diferentes');
}

// Son iguales porque JS los considera ambos de tipo numeric
if (10.00 === 10){
console.log('Son iguales');
}else{
console.log('Son diferentes');
}

// Comparación de diferencia
let a = '10';
let b = 10;

if (a !== b){
    console.log('a y b son distintos');
}else {
    console.log('a y b son iguales');
}

if (a != b){
    console.log('a y b son distintos');
}else {
    console.log('a y b son iguales');
}

// Operadores AND y OR
// Si venís de python: and -> &&, or -> ||

// And -> ambas condiciones deben cumplirse
let nombre = 'Dimas';
let dni = '2323A';

if(nombre === 'Dimas' && dni == '2323A'){
    console.log("Puedes votar (con and)");
}else {
    console.log("Los datos no se corresponden");
}

//Or -> es suficiente con que se cumpla una condición
if(nombre === 'Juan' || dni == '2323A'){
    console.log("Puedes votar (con or)");
}else {
    console.log("Los datos no se corresponden");
}

// Operador ternario
// condicion ? codigo si se cumple : codigo si no se cumple

edad = 23;
console.log(edad >= 21 ? 'Puedes beber en USA' : 'No puedes beber en USA');

edad = 19;
console.log(
    edad >= 21 ? 'Puedes beber en USA' : edad >= 18 ? 'Puedes beber en españa' : "No puedes beber"
)


// EJERCICIO: Comprobar si una persona puede acceder a una fiesta. 
// Únicamente podrá acceder si: 
//  - Es mayor de edad y su nombre está en la lista de acceso.
//  - Su nombre está en la lista VIP (entonces da igual la edad)  

const fiestero1 = {
    nombre: 'Carlos',
    edad: 21
}

const fiestero2 = {
    nombre: 'Dross',
    edad: 16
}

const listaAcceso = ['Carlos', 'Marta', 'Ana', 'Juan'];
const listaVIP = ['Dross', 'Auron', 'Jeff Bezzos'];


let acceso = ( (fiestero1.edad >= 18 && listaAcceso.indexOf(fiestero1.nombre) !== -1 ) 
|| listaVIP.indexOf(fiestero1.nombre) !== -1 ) ? 
'Acceso Permitido' : 
'Acceso Denegado'

console.log(acceso);
