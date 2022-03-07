/**
 * BLOQUE 7 - Object literals
 *
 */
console.log("[GUÍA]: Aquí empezamos con los Object literals");

/**Crear Object Literals 
*  Son similares a los diccionarios de Python.
*  Se definen como pares de atributo: valor
*/

const video1 = {
    nombre: 'Variables en JavaScript',
    visitas: 100,
    likes: 20,
    dislikes: 0,
    playlist: 'Curso Javascript'
};

console.log(video1);

const video2 = {
    nombre: 'Tipos de datos en JavaScript',
    visitas: 200,
    likes: 30,
    dislikes: 0,
    playlist: 'Curso Javascript'
};


const cursoJavascript = {
    nombre: 'Curso Javascript',
    numVideos: 2,
    videos: [
        video1,
        video2,
        {
            nombre: 'Operaciones aritmeticas en JavaScript',
            visitas: 70,
            likes: 40,
            dislikes: 2,
            playlist: 'Curso Javascript'
        }
    ]
}

console.log(cursoJavascript);

// Acceder a un atributo de un objeto
// Dot notation
let visitas1 = video1.visitas;
let visitas2 = video2.visitas
console.log(`El primer vídeo tiene ${visitas1} y el segundo ${visitas2}`);

// Key notation
let likes = video1["likes"];
console.log(`El primer vídeo tiene ${likes} likes y ${video1["dislikes"]} dislikes`);

console.log(`El video uno tiene ${cursoJavascript.videos[0].visitas} visitas`);


// Podemos modificar propiedades
video1.visitas = 300;
console.log(video1);

video1.nuevosSubs = ["Juan", "Jose", "Daniela"];
console.log(video1);

// Podemos añadir métodos (funciones) a los objetos
const cursoJavascript2 = {
    nombre: 'Curso Javascript',
    numVideos: 2,
    videos: [
        video1,
        video2,
        {
            nombre: 'Operaciones aritmeticas en JavaScript',
            visitas: 70,
            likes: 40,
            dislikes: 2,
            playlist: 'Curso Javascript'
        }
    ],
    visitasTotales: function(){ 
        return this.videos.reduce((acc, elem) => acc + elem.visitas, 0)
    }
};

console.log(cursoJavascript2.visitasTotales());
