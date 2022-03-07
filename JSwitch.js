/**
 * BLOQUE 10 - Switch
 *
 */
console.log("[GUÍA]: Aquí empezamos con los Switch");

let vehiculo = prompt("Escribe el vehículo que quieras (coche, barco, avión): ");
let msg;
switch (vehiculo){
    case 'coche':
        msg = "Tienes un Mercedes clase A";
        break;
    case 'avion':
        msg = "Parece que te gusta volar";
        break;
    case 'barco':
        msg = "Tienes un jetski";
        break;
    default:
        msg = "Lo sentimos, no disponemos de ese vehículo";
        break;
}

alert(msg);
