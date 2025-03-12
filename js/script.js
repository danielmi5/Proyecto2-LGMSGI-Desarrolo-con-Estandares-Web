//Seleccionar y acceder a elementos del documento web utilizando diferentes métodos.

/*
//getElementById() devuelve el elemento que contenga esa id, como no he utilizado ningún id sale null.
const elementoId = document.getElementById("imagenWeb");
console.log(elementoId);

//querySelector() seleccionar el primer elemento dentro del DOM que coincide con un selector CSS

const primerSection = document.querySelector("section") //Selecciona el primer section en el documento
console.log(primerSection)

//querySelectorAll() selecciona todos los elementos que coinciden con un selector CSS especificado
const todosSection = document.querySelectorAll("section") //Selecciona todos los elemenots section del documento
console.log(todosSection)
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

/* CONTENIDO

/*
//textContent obtiene el contenido (texto) de un elemento
let titulo = document.querySelector(".intro__titulo");
console.log(titulo.textContent); //muestra el contenido del texto antes de modificar
titulo.textContent = "Probando cambios de contenido"; //modifica el contenido
console.log(titulo.textContent); // muestra el contenido cambiado

//innerText obtiene el contenido HTML de un elemento (incluido las etiquetas). Es decir que si de modifica un elemento con innerHTML eliminaría todo el contenido HTML.
const seccionIntro = document.querySelector(".intro");
console.log(seccionIntro.innerHTML) // Muestra el contenido HTML de la sección intro
seccionIntro.innerHTML = "<img src='../assets/ser3.jpg' width='1000px' height='853px'>Contenido de la sección cambiado por esta img" //Esta etiqueta está incompleto, pero con innerHTML el navegador comprueba y lo parsea, intentando que el código HTML sea correcto en todo momento
console.log(seccionIntro.innerHTML);

//outerText obtiene el contenido HTML de un elemento (incluyendo el html de dicho elemento)
let listaRedes = document.querySelector(".pie__redes .pie__lista");
console.log(listaRedes); //Muestra todo el html de listaRedes (ul), incluyendo su etiqueta y su contenido HTML
listaRedes.outerHTML = "<p>He pasado a ser un párrafo</p>" //Ahora en vez de ser una ul con todo su contenido, es una etiqueta <p>

//.setHTMLUnsafe() es una alternativa moderna para la propiedad .innerHTML (solo para modificar). Tiene la peculiaridad de que cuenta con soporte de DOM Shadow declarativo. Para obtenerlo sería con .getHTML() (igualmente compatible con DOM Shadow declarativo)
//Esto es otra manera de hacer HTML con ``
let html = `
  <ul>
    <li>
      <p>Hola</p>
    </li>
    <li>
      <p>Interesante, pero no muy seguro</p>
    </li>
    <li>
      <p>3 linea</p>
    </li>
  </ul>
`;
const pieContacto = document.querySelector(".pie__lista"); //Cojo la primera lista del footer
pieContacto.setHTMLUnsafe(html); //Y le camvia el contenido por el HTML de html
*/

//ATRIBUTOS

/*
//Para obtener atributos
const elementoPrueba = document.querySelector(".cabecera__logo")
//hasAttributes()	Indica si el elemento tiene atributos HTML.
console.log(elementoPrueba.hasAttributes())
//hasAttribute(??)	Indica si el elemento tiene el atributo HTML ??.
console.log(elementoPrueba.hasAttribute("style"))
//getAttributeNames()	Devuelve un array con los atributos del elemento.
console.log(elementoPrueba.getAttributeNames())
//getAttribute(??)	Devuelve el valor del atributo ?? del elemento o null si no existe.
console.log(elementoPrueba.getAttribute("src"))

//Para modificar se coloca el nombre de la variable seguido de un punto y el nombre del atributo --> name.atributo
elementoPrueba.src = "assets/ser3.jpg"
elementoPrueba.title = "NO LOGO"
//Otra manera sería con .setAttribute(nombreAtributo, valorAtributo)
elementoPrueba.setAttribute("alt", "Imagen que no es un logo")
*/

// Eliminar elementos de la página según criterios específicos.



// Manipular estilos directamente desde JavaScript para modificar colores, tamaños o propiedades visuales según la interacción del usuario.
