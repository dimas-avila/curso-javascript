/**
 * BLOQUE 8 - Fechas y horas
 *
 */
console.log("[GUÍA]: Aquí empezamos con Fechas y Horas");

// Las fechas en Javascript son objetos.


// Para conseguir la fecha actual: 
const fechaActual = new Date();
console.log(fechaActual);

// Obtener dia, mes, año, horas de una fecha

// // Los meses van del 0 al 11 (Enero es el mes 0, Diciembre es el mes 11)
const dia = fechaActual.getDay();
console.log('Dia: ' + dia);
// Para mostrar el día del mes: 
console.log('Día del mes: ' + fechaActual.getDate());
// Los meses van del 0 al 11 (Enero es el mes 0, Diciembre es el mes 11)
const mes = fechaActual.getMonth();
console.log('Mes: ' + mes);
const year = fechaActual.getFullYear();
console.log('Año: ' + year);
const hora = fechaActual.getHours();
console.log('Hora: ' + hora);


/**
 * Existen tres formas distintas de definir una fecha en concreto: 
 * 1. new Date(year, month, day, hours, minutes, seconds, milliseconds)
 * 2. new Date(milliseconds)
 * 3. new Date(date string)
 */

// Primera manera: 
const finOferta = new Date(2022, 06, 06, 22, 33);
console.log(finOferta);

// Segunda manera: 
// La función getTime() devuelve el número de milisegundos que han pasado des de 1970
console.log(fechaActual.getTime());

const hoy = new Date(fechaActual.getTime() + 365 * 24 * 60 * 60 * 1000);
console.log(hoy);

// Tercera manera
// Formato ISO: yyyy-mm-ddS
console.log("[GUÍA]: Declarar Fechas con strings");
let unaFecha = new Date("2025-10-22");
console.log(unaFecha);
// Short Date
unaFecha = new Date("03/10/2019");
console.log(unaFecha);

// Long Date
unaFecha = new Date("Feb 14 2012");
console.log(unaFecha);


// Modificar una fecha: 
fechaActual.setMonth(0);
console.log(fechaActual);

fechaActual.setDate(10);
console.log(fechaActual);

fechaActual.setFullYear(2033);
console.log(fechaActual);

// Ejercicio 1: 
// Enunciado: Dado un objeto de tipo fecha, mostrar por pantalla 
// la fecha en formato: Lunes 13 de Enero de 2022. 

// Normal: Hacerlo para un solo objeto de tipo fecha.
// Sol: 
const fechaAleatoria = new Date("2010-10-25");
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

let fechaFormateada =
    dias[fechaAleatoria.getDay()] + " " +
    fechaAleatoria.getDate() +
    " de " + meses[fechaAleatoria.getMonth()] +
    " de " + fechaAleatoria.getFullYear();

console.log(fechaFormateada);

// Pro: Crear una función que lo haga para cualquier objeto.
function formateaFecha(fecha) {
    let fechaFormateada =
        dias[fecha.getDay()] + " " +
        fecha.getDate() +
        " de " + meses[fecha.getMonth()] +
        " de " + fecha.getFullYear();
    return fechaFormateada
}

console.log(
    formateaFecha(fechaAleatoria)
);

console.log(
    formateaFecha(new Date())
);


// Goooooood: Lo mismo que pro, pero generando fechas aleatorias.
function randomDate(){
    const year = Math.round( (2050 - 2000) * Math.random() + 2000 );
    const month = Math.floor( (12 - 1) * Math.random() + 1 );
    const day = Math.floor( (31 - 1) * Math.random() + 1 );
    return new Date(`${year}-${month}-${day}`);
}


console.log(
    formateaFecha(randomDate())
);

console.log(
    formateaFecha(randomDate())
);

console.log(
    formateaFecha(randomDate())
);

