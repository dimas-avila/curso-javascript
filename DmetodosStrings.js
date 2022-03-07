/**
 * BLOQUE 4 - Métodos de Strings
 * Métodos para tratar con cadenas
 * de texto.
 */

console.log("[GUÍA]: Aquí empezamos con los métodos de Strings");

const nombre = 'Dimas'
const profesion = 'Youtuber'
const telefono = 666666666

// Formas de concatenar variables en un string
let str;
str = nombre + ' ' + profesion
console.log(str);

str += ' ' + telefono
console.log(str);

// Número de caracteres en un string: 
console.log("Longitud de nombre: " + nombre.length);

// Acceder a un caracter dentro de un string: 
console.log(
    nombre[2]
);

/* MÉTODOS NATIVOS DE JAVASCRIPT PARA STRINGS */

// Concatenar strings
str = nombre.concat(' ',profesion, ' ', telefono)
console.log(str);

// Mayúsculas, minúsculas
console.log(
    nombre.toUpperCase()
); 

str = 'HoLAa33O()uUwu'
console.log(
    str.toLowerCase()
);

// Encontrar la posición de un caracter: 
// Buscando des del principio:
str = 'cocodrilo'
console.log(
    "Primera ocurrencia de la letra o: "+
    str.indexOf('o')
);

console.log(
    "Última ocurrencia de la letra o: "+
    str.lastIndexOf('o')
);

// Encontrar un caracter dada la posición: 
console.log(
    "El último caracter del nombre es: " +
    nombre.charAt(nombre.length - 1)
);

// Substring:
str = 'cocodrilo'
console.log(
    "Substring de cocodrilo: " + 
    str.substring(0, 4)
)
// Slice, permite usar índices negativos
console.log(
    "Substring usando slice: " + 
    str.slice(2, 5) +
    '\n' +
    str.slice(-4)
);

// Split
const categorias = 'desarrollo web; programación; software;';
str = categorias.split(';');
console.log(str);
console.log(typeof str);

// Replace: Solo reemplaza el primero
str = categorias.replace(';', ',')
console.log(str);

// Truco para reemplazarlos todos: 
// Join es un método para unir elementos
// de un array mediante un separador.
str = categorias.split(';').join(',')
console.log(str);

// Includes
console.log(
    'Contiene "web" ? ' +
    categorias.includes("web")
);






















