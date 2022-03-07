/**
 * BLOQUE 3 - OPERACIONES ARITMÉTICAS
 * Operacions y funciones matemáticas.
 * El objeto Math.
 */

console.log("[GUÍA]: Aquí empezamos con las Operaciones Aritméticas");
let num1 = 10;
let num2 = 5;
let result;

// Operaciones matemáticas básicas
result = num1 + num2;
result = num1 - num2;
result = num1 * num2;
result = num1 / num2;
result = num1 % num2;

// Operaciones y funciones del objeto Math
// Contiene constantes
console.log(Math.PI);
console.log(Math.E);

// También contiene métodos para calcular funciones matemáticas
result = Math.sqrt(64);
console.log("La raíz de 64 es " + result);

result = Math.round(2.7);
console.log("El valor redondeado de 2.7 es " + result);

result = Math.pow(2, 6);
console.log("El resultado de 2^6 es " + result);

console.log(
    "El máximo es: " +
    Math.max(1,2,3,10,-2,-5,6)
);

console.log(
    "El coseno es: " +
    Math.cos(Math.PI)
);


