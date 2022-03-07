/**
 * BLOQUE 6 - Arrays
 *
 */
console.log("[GUÍA]: Aquí empezamos con los Arrays");

/** Declarar Arrays 
*   Los arrays pueden contener los distintos tipos de datos 
*   vistos en la sección B. Pueden contener todos los elementos
*   de un mismo tipo o pueden ser de tipos distintos
*/
console.log("[GUÍA]: Formas de construir un Array: ");

const arrayNumerico = [0, 1, 2, 3, 4];
const arrayStrings = ['primero', 'segundo', 'tercero'];
const arrayMixto = [
    10, 
    true,
    false,
    'hola',
    {
        nombre: 'dimas',
        edad: 23
    },
    arrayNumerico
];

console.log(arrayNumerico);
console.log(arrayStrings);
console.log(arrayMixto);

// longitud de un array
console.log(`La longitud de arrayNumerico es: ${arrayNumerico.length}`);
console.log(`La longitud de arrayStrings es: ${arrayStrings.length}`);

// Acceder a un elemento del array:
let variable;

variable = arrayNumerico[0];
console.log(`Primer elemento del array numerico: ${variable}`);
variable = arrayNumerico[ arrayNumerico.length - 1 ];
console.log(`Último elemento del array numerico: ${variable}`);

// Si accedemos a una posición superior a la longitud del array - 1
// retorna 'undefined'
let posicion = 120;
console.log(`Elemento en la posición ${posicion}: ${arrayStrings[posicion]}`);
//  IMPORTANTE! No lanza una excepción, el flujo de ejecución contiúa. 

// Constructor de Array: 
const frutas = new Array('Mandarina', 'Plátano', 'Manzana');
console.log(frutas);

// Cuidado: El constructor de array también se puede usar 
// pasando un solo argumento: Un entero que define el 
// número de elementos 'undefined' dentro del array:
const empty = new Array(10);
console.log(empty);
console.log(empty[0]);
console.log(empty[9]);

empty[0] = 'Ei'
console.log(empty, empty[0]);

// Comprobar si un elemento es un array
let numero = 230;
let _isArray;
_isArray = Array.isArray(arrayMixto);

console.log(`Array mixto es un array? ${_isArray}`);
_isArray = numero instanceof Array;

console.log(`La variable numero es un array? ${_isArray}`);


// Modificar elementos de un array:
arrayNumerico[0] = 55;
console.log(arrayNumerico);

arrayNumerico[0] = 'primer elemento';
console.log(arrayNumerico);

/* AÑADIR ELEMENTOS A UN ARRAY*/
// Añadir un elemento al final
arrayStrings.push('cuarto');
arrayStrings.push('quinto');

console.log(arrayStrings);

// Añadir elemento al principio
arrayStrings.unshift('cero')
console.log(arrayStrings);

/* Eliminar elementos de un array */
let deleted;
// El método pop elimina el último elemento y lo retorna
deleted = arrayStrings.pop();

console.log(`El elemento "${deleted}" ha sido eliminado del array: ${arrayStrings}`);
arrayStrings.pop()

// Eliminar el primer elemento
deleted = arrayStrings.shift();
console.log(`El elemento "${deleted}" ha sido eliminado del array: ${arrayStrings}`);

// Encontrar el índice de un elemento determinado
const nums = [0, 1, 2, 3, 4, 5];
let posicionElemento;
let valorBuscado = 3;

console.log(nums);
// Atención: si el valor no está presente en el array, el método devolverá -1
posicionElemento = nums.indexOf(valorBuscado)
console.log(`El valor: ${valorBuscado} ha sido encontrado en la posición: ${posicionElemento}`);
// Encontrar un elemento a partir de una posición
posicionElemento = nums.indexOf(valorBuscado, 3)
console.log(`El valor: ${valorBuscado} ha sido encontrado en la posición: ${posicionElemento}`);


// Método splice

// Splice -> Posición de inicio, número de elementos a eliminar
deleted = nums.splice(2, 3);
console.log(nums);
console.log(`Números eliminados: ${deleted}`);

// Método splice para eliminar el elemento de una posición determinada
const deportes = ['furbo', 'basket', 'hokey', 'lol']
deportes.splice(deportes.indexOf('basket'), 1);
console.log(deportes);
// Método splice para insertar elementos sin eliminar ninguno
deportes.splice(1, 0, 'baloncesto');
console.log(deportes);
deportes.splice(3, 0, 'rugby', 'natacion');
console.log(deportes);


// Concatenar arrays:
const num1 = [23, 199, 200, 5, 4, 1, 33];
const num2 = [-1, 0 , 9, 33]
const concatNums = num1.concat(num2);
console.log(concatNums);

// Ordenadr arrays numéricos
console.log(concatNums.sort());

// Si queremos orden descendente a-b
function descending(a, b){
    return a - b;
}

concatNums.sort(
    function(a, b) {
        return a - b;
    }
);

console.log(concatNums);


// Método find
function mayorDeEdad(edad) {
    return edad >= 18;
}

let edad = concatNums.find(mayorDeEdad);
console.log(edad);

// Avance: arrow functions
console.log(
    concatNums.find((elem) => elem >= 18)
);

