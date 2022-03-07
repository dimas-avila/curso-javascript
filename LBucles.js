/**
 * BLOQUE 12 - Bucles
 *
 */
console.log("[GUÍA]: Aquí empezamos con los Bucles");

// Bucle FOR:
const MAX_ITER = 5
for (let i = 0; i < MAX_ITER; i++) {
    console.log(`Esta es la iteración núnero ${i}`);
}

// Bucle while:
let i = 0;
while (i < MAX_ITER) {
    console.log(`Esta es la iteración número ${++i}`);
    if (i == 3) {
        console.log('Saliendo del bucle ...');
        break;
    }
}

// Bucle do while:
/*let primo = 0
let password;
do {
password = prompt("Escribe la contraseña: 123");
}while(password !== '123')

console.log("Contraseña correcta");*/

// Iterar Sobre arrays (u otros iterables)
const productos = [
    "Camisetas",
    "Pantalones",
    "Trajes",
    "Zapatillas"
];

// Método 1:
console.log("Lista de productos con for: ");
for (let i = 0; i < productos.length; ++i) {
    console.log(productos[i]);
}

// Método 2: 
console.log("Lista de productos con for each: ");
for (let producto of productos) {
    console.log(producto);
}

// Método 3: High order methods
// Array.forEach(function(value, index))

console.log("Lista de productos con un array method: ");
const angulos = [0, Math.PI / 4, Math.PI / 2, Math.PI, 3 * Math.PI / 4, 2 * Math.PI];

angulos.forEach(function (val, index) {
    console.log(`Posición ${index}: ${Math.cos(val).toFixed(2)}`);
});

// Arrow function
console.log("Usando arrow functions: ");
angulos.forEach(num => console.log(Math.cos(num).toFixed(2)));

// Otros high order methods: 
// Método filter: 
const emails = ['hola@gmail.com', 'adios', 'megaflow@hotmail.es'];
let emailsValidos = emails.filter(email => email.includes('@'));
console.log(emailsValidos);

// Método MAP: 
const datosMal = ['Dimas', 'jesús', 'JUAN', 'AnA', 'Maria'];
const datosLimpios = datosMal.map(
    function (nombre) {
        return nombre.toLowerCase();
    }
)
console.log(datosLimpios)



// Iterar sobre los atributos de un objeto
console.log(("Iterar sobre los atributos de un objeto: "))
const persona = {
    nombre: 'Dimas',
    edad: 23,
    DNI: 232323
}

for (let atributo in persona) {
    console.log(`${atributo}: ${persona[atributo]}`)
}

// EJERCICIO: 
// Queremos aplicar un 20% de descuento a todos los nuevos productos añadidos a nuestra tienda.
// Consideramos que un producto es nuevo si se ha añadido este mes. 
// Queremos obtener una lista de los productos que han recibido el descuento con el precio actualizado.

const objetos = [
    {
        nombre: 'Camiseta',
        precio: 20,
        fecha: new Date('10-10-2021'),
    },

    {
        nombre: 'Pantalones',
        precio: 50,
        fecha: new Date('03-13-2021'),
    },

    {
        nombre: 'Zapatos',
        precio: 80,
        fecha: new Date('03-03-2021'),
    },
]

const fechaActual = new Date();
const descuentos = objetos.filter((producto) => {
    return producto.fecha.getMonth() === fechaActual.getMonth()
}
).map((producto) => {
    producto.precio = producto.precio - 0.2 * producto.precio;
    return producto
}

)

console.log(descuentos)


