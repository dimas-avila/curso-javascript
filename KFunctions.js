/**
 * BLOQUE 11 - Funciones
 *
 */
 console.log("[GUÍA]: Aquí empezamos con las Funciones");

 // Declaración de funciones
 // Estructura básica: 

function euroADolar(euros){
    const ratio = 1.19;
    const dolares = (ratio * euros).toFixed(2);
    return dolares;
} 

// Podemos anidar funciones

function mostrarConversion(euros = 0){
    const dolares = euroADolar(euros);
    console.log(`${euros} € equivalen a ${dolares} $`);
}

mostrarConversion(10);
mostrarConversion(20);
// Aquí usamos el valor por defecto
mostrarConversion();

// Expresiones de funciones
const areaCirculo = function(radio = 0){
    return (Math.PI * radio * 2).toFixed(2);
}

console.log(`Area de un circulo con radio 2 = ${areaCirculo(2)} m^2`);

// IIFE: Immediately Invoked Function Expression
(
    function(){
        let nombre = 'Dimas';
        console.log("Esto solo se ejecuta una vez")
    }

)();
// Las variables de una IIFE desaparecen tras su ejecución.
// Nos deja libres los nombres de las variables.
//console.log(nombre);


// Métodos

const todoList = {
    name: 'Proyectos universidad',
    tasks: [
        'Práctica electrónica', 
        'Proyecto de programacion'
    ],

    addTask: function(task) { this.tasks.push(task) },
    showTasks: function() { console.log(this.tasks) }
}

todoList.addTask('Examen de cálculo');
todoList.showTasks();