//Seleccionar y acceder a elementos del documento web utilizando diferentes métodos.

/*
//getElementById() devuelve el elemento que contenga esa id, como no he utilizado ningún id sale null.
const elementoId = document.getElementById("imagenWeb");
console.log(elementoId);

//Siguientes métodos devuelven un htmlcollection, si no coinciden elementos, devuelven un array vacío [].

//getElementByClassName() devuelve una colección con los elementos que coincidan con esa clase 'cabecera'.
const elementoClase = document.getElementsByClassName("cabecera");
console.log(elementoClase);

//getElementByName() devuelve una colección con los elementos que coincidan con ese valor en el atributo name -> 'fecha'.
const elementoName = document.getElementsByName("fecha");
console.log(elementoName);

//getElementByTagName() devuelve un colección con los elementos que coincidan con esa etiqueta 'a' (enlaces).
const elementoTag = document.getElementsByTagName("a");
console.log(elementoTag); 
*/



//Crear y añadir nuevos elementos dinámicamente al documento.

/*
//Ejemplo: añado en el footer, la red twitch a los enlaces de las redes sociales

//Obtengo la colección con las 4 listas de redes (de cada página) con el nombre de su clase que es '.pie__lista' 
const redes = document.getElementsByClassName("pie__lista");
console.log(redes); 

// Primero, creo el elemento 'li'
let li = document.createElement('li');

// Segundo, creo el elemento 'a'
let a = document.createElement('a');
a.href = 'https://www.twitch.tv'; //A la etiqueta le añado el atributo 'href' con su enlace a la red

// Tercero, creo el elemento 'img'
let img = document.createElement('img');
img.src = 'https://th.bing.com/th/id/OIP.ofgmCLCvlE_m62kwn9cndQHaHa?w=158&h=180&c=7&r=0&o=5&pid=1.7'; // Le añado el atributo 'src' con su enlace a la imagen.
//Le añado el atributo 'alt' y 'title' con sus valores
img.alt = 'Twitch'; 
img.title = 'Twitch'; 

// Agrego la etiqueta 'img' a la etiqueta 'a'
a.appendChild(img);

// Agrego la etiqueta 'a' a la etiqueta 'li'
li.appendChild(a);

// Finalmente, agrego li y todo lo que está dentro de li al DOM (a cada lista de las redes de cada página)

//Recorre la colección añadiendo li a cada lista de redes
for (let pos = 0; pos < redes.length; pos++) {
    let elemento = redes[pos];
    elemento.appendChild(li);
};

*/


//Modificar el contenido y atributos de elementos existentes.



// Eliminar elementos de la página según criterios específicos.



// Manipular estilos directamente desde JavaScript para modificar colores, tamaños o propiedades visuales según la interacción del usuario.
