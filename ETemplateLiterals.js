/**
 * BLOQUE 5 - TEMPLATE LITERALS
 *
 */
console.log("[GUÍA]: Aquí empezamos con los Template Literals");

const nombre = 'Dimas';
const edad = 23;
const ciudad = 'Barcelona';
const profesion = 'Ingeniero de Telecomunicaciones';

let frase;
// Sin usar template literals
frase = nombre + ' es de ' + ciudad + ' y tiene ' + edad + ' años.'
console.log(frase);

// Usando template literals
frase = `${nombre} es de ${ciudad} y tiene ${edad} años. Trabaja de ${profesion}.`
console.log(frase);

// Ejemplo más complejo

// Añadir elementos al html

newHtml = `
<h3>Descripción usuario</h3>
<ul>
    <li>${nombre}</li>
    <li>${edad}</li>
    <li>${ciudad}</li>
    <li>${profesion}</li>
</ul>
`

document.body.innerHTML += newHtml

// Dentro de las llaves, podemos realizar operaciones
// e incluso llamar a funciones

function getNombre(){
    return 'Dimas';
}

const numeroVideos = 70;
const visitasPorVideo = 200;

console.log(
    `Nombre: ${getNombre()},
Visitas totales: ${numeroVideos * visitasPorVideo}`
);




