//PARA PODER EJECUTAR CADA APARTADO, PASAR POR EL PARÁMETRO DE LA FUNCIÓN, TRUE. Ejemplo -> function(true) | Eliminar este true para que no se ejecute.


//Función global para comprobar selectores
function selectorValido(selector) {
    // Verifica si el selector es una cadena y si no está vacío
    if (typeof selector !== "string" || selector.trim() === "") {
        console.log("**ERROR** -> Debes proporcionar un selector CSS válido.");
        return false; // Retorna false si el selector no es válido
    }

    return true; // Retorna true si el selector es válido
}

//Seleccionar y acceder a elementos del documento web utilizando diferentes métodos.

function accederAElementos(seEjecuta = false){
    if (!seEjecuta){
        return
    }
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
}

//Crear y añadir nuevos elementos dinámicamente al documento.

//Ejemplo: En el footer, añado twitch a la lista de enlaces de las redes sociales
function ejemploCreacion(seEjecuta = false){
    if (!seEjecuta){
        return;
    }

    //Obtengo la colección con las 4 listas de redes (de cada página) con el nombre de su clase que es '.pie__lista'
    const redes = document.getElementsByClassName("pie__lista");
    console.log(redes);

    // Primero, creo el elemento 'li'
    let li = document.createElement('li');

    // Segundo, creo el elemento 'a' con su enlace
    let a = document.createElement('a');
    a.href = 'https://www.twitch.tv'; //A la etiqueta le añado el atributo 'href' con su enlace a la red

    // Tercero, creo el elemento 'img' con su ruta, el título y el texto alternativo
    let img = document.createElement('img');
    img.src = 'https://th.bing.com/th/id/OIP.ofgmCLCvlE_m62kwn9cndQHaHa?w=158&h=180&c=7&r=0&o=5&pid=1.7'; // Le añado el atributo 'src' con su enlace a la imagen.
    //Le añado el atributo 'alt' y 'title' con sus valores
    img.alt = 'Twitch';
    img.title = 'Twitch';

    // Agrego la etiqueta 'img' a la etiqueta 'a'
    a.appendChild(img);

    // Agrego la etiqueta 'a' a la etiqueta 'li'
    li.appendChild(a);

    // Finalmente, agrego li y todo su contenido ('a' e 'img') al DOM (a cada lista de las redes de cada página)

    //Recorre la colección añadiendo li a cada lista de redes
    for (let pos = 0; pos < redes.length; pos++) {
        let elemento = redes[pos];
        elemento.appendChild(li);
    }
}




//Modificar el contenido y atributos de elementos existentes.

function contenido(seEjecuta = false){
    if (!seEjecuta){
        return;
    }
    //textContent obtiene el contenido (texto) de un elemento
    let titulo = document.querySelector(".intro__titulo");
    console.log(titulo.textContent); //muestra el contenido del texto antes de modificar
    titulo.textContent = "Probando cambios de contenido"; //modifica el contenido
    console.log(titulo.textContent); // muestra el contenido cambiado

    //innerText obtiene el contenido HTML de un elemento (incluido las etiquetas). Es decir que si de modifica un elemento con innerHTML eliminaría todo el contenido HTML.
    const seccionIntro = document.querySelector(".intro");
    console.log(seccionIntro.innerHTML) // Muestra el contenido HTML de la sección intro
    seccionIntro.innerHTML = "<img src='../assets/ser3.jpg' width='1000px' height='853px'>Contenido de la sección cambiado por esta img" //Esta etiqueta está incompleta, pero con innerHTML el navegador comprueba y lo parsea, intentando que el código HTML sea correcto en todo momento
    console.log(seccionIntro.innerHTML);

    //outerText obtiene el contenido HTML de un elemento (incluyendo el html de dicho elemento)
    let listaRedes = document.querySelector(".pie__redes .pie__lista");
    console.log(listaRedes); //Muestra todo el html de listaRedes (ul), incluyendo su etiqueta y su contenido HTML
    listaRedes.outerHTML = "<p>He pasado a ser un párrafo</p>"; //Ahora en vez de ser una ul con todo su contenido, es una etiqueta <p>

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
    pieContacto.setHTMLUnsafe(html); //Y le cambia el contenido por el HTML de html
}


//ATRIBUTOS

function atributos(seEjecuta = false){
    if (!seEjecuta){
        return;
    }
    //Para obtener atributos
    const elementoPrueba = document.querySelector(".cabecera__logo")
    //hasAttributes()	Indica si el elemento tiene atributos HTML.
    console.log(elementoPrueba.hasAttributes());
    //hasAttribute(??)	Indica si el elemento tiene el atributo HTML ??.
    console.log(elementoPrueba.hasAttribute("style"));
    //getAttributeNames()	Devuelve un array con los atributos del elemento.
    console.log(elementoPrueba.getAttributeNames());
    //getAttribute(??)	Devuelve el valor del atributo ?? del elemento o null si no existe.
    console.log(elementoPrueba.getAttribute("src"));

    //Para modificar se coloca el nombre de la variable seguido de un punto y el nombre del atributo --> name.atributo
    elementoPrueba.src = "assets/ser3.jpg";
    elementoPrueba.title = "NO LOGO";
    //Otra manera sería con .setAttribute(nombreAtributo, valorAtributo);
    elementoPrueba.setAttribute("alt", "Imagen que no es un logo");
}





// Eliminar elementos de la página según criterios específicos.
function eliminarElementos(seEjecuta = false){
    if (!seEjecuta){
        return;
    }
    //Funciones creadas a utilizar:
    //función que recoge mediante un selector elementos y los elimina con remove()
    function eliminarElementos(selector) {
            if (!selectorValido(selector)) {
                return //Sale de la función si no es válido
            }
            const elementos = document.querySelectorAll(selector);
            //Recorre la 'lista' de elementos borrando los que existan
            elementos.forEach(elemento => {
                //Verifica si el elemento existe, si no muestra en la consola un error
                if (elemento) {
                    elemento.remove();
                } else {
                    console.log("**ERROR** -> El elemento no existe en el DOM.");
                }
            })
        }

    //función que recoge mediante un selector un elemento y lo elimina con remove()
    function eliminarElemento(selector) {
            if (!selectorValido(selector)) {
                return //Sale de la función si no es válido
            }
            const elemento = document.querySelector(selector);
            //Verifica si el elemento existe, si no muestra en la consola un error
            if (elemento) {
                elemento.remove();
            } else {
                console.log("**ERROR** -> El elemento no existe en el DOM.");
            }
        }

    //función que recoge mediante dos selectores un elementoPadre y un elementoHijo, y elimina al hijo con padre.removeChild(hijo)
    function eliminarHijo(selectorPadre, selectorHijo)  {
            if (!selectorValido(selectorPadre) || !selectorValido(selectorHijo)) {
                return //Sale de la función si alguno de los no es válido
            }

            const padre = document.querySelector(selectorPadre);
            const hijo = document.querySelector(selectorHijo);

            // Verifica que el padre y el hijo existen, y que el padre contenga al hijo antes de eliminar
            if (padre && hijo && padre.contains(hijo)) {
                padre.removeChild(hijo);
            } else {
                // En este caso muestra un error
                console.log("**ERROR** -> El elemento o su padre no existen en el DOM.");
            }
        }

    const selectorPadre = "contenedor";
    const selectorHijo = "elementoAEliminar";
    eliminarHijo(selectorPadre, selectorHijo); //elimina el hijo que pertenece al padre

    eliminarElemento(".newsletter"); //elimina la sección newsletter
    eliminarElementos("li"); //elimina todos los elementos li
}



// Manipular estilos directamente desde JavaScript para modificar colores, tamaños o propiedades visuales según la interacción del usuario.
function manipularEstilos(seEjecuta = false){
    if (!seEjecuta) {
        return;
    }
    const elementoEstilos = document.querySelector(".principal");
    // classList()
    console.log(elementoEstilos.classList); //muestra las clases de ese elemento
    //classAdd()
    elementoEstilos.classList.add("informacion"); //Añade información como clase del elemento
    console.log(elementoEstilos.classList); //Comprobación de que se ha añadido
    elementoEstilos.classList.remove("informacion"); //Elimina la clase informacion
    console.log(elementoEstilos.classList); //Comprobación de que se ha eliminado

    //modificar estilos con style.property
    elementoEstilos.style.backgroundColor = "black";  // Cambia el fondo
    elementoEstilos.style.color = "white";           // Cambia el color del texto
    elementoEstilos.style.fontSize = "18px";         // Cambia el tamaño de la fuente
    elementoEstilos.style.padding = "20px";          // Añade padding
    elementoEstilos.style.borderRadius = "10px";     // Redondea los bordes con un radio
    elementoEstilos.style.textAlign = "center";      // Centra el texto

}

//Voy a cambiar la última noticia del blog por una noticia nueva, y los estilos de la sección de noticias.
function ejemploCombinado(seEjecuta = false){
    if (!seEjecuta){
        return 
    }

    // Selecciono la sección de noticias con su nombre de clase
    const seccionNoticias = document.querySelector('.noticias');

    // Selecciono el articulo último
    const ultimoArticulo = seccionNoticias.querySelector('.noticias__articulo:last-child');
    seccionNoticias.removeChild(ultimoArticulo); //Lo elimino mediante removeChild desde el padre(la sección)
    

    // Creo un nuevo artículo
    const nuevoArticulo = document.createElement('article');
    nuevoArticulo.classList.add('noticias__articulo'); // Y le añado las mismas clases que las demás noticias

    const htmlContenido = `
    <h3 class="noticia__titulo">Nuevas alianzas estratégicas en el mundo del motorsport</h3>
    <p class="noticia__info">Nos complace anunciar una serie de nuevas alianzas estratégicas con importantes marcas del mundo del motorsport. Estas colaboraciones fortalecerán nuestra presencia en los principales campeonatos de carreras y permitirán la integración de nuevas tecnologías que optimicen el rendimiento de nuestros vehículos. Entre los principales beneficios de estas alianzas se incluyen el acceso a recursos exclusivos y el intercambio de conocimientos técnicos que contribuirán al éxito de nuestra compañía y nuestros socios en el circuito.
    </p>
    <img src="assets/gar.png" class="noticia__imagen">
    `; //HTML del contenido HTML para la nueva Noticia
    
    nuevoArticulo.innerHTML = htmlContenido; // Le asigno el contenido HTML mediante innerHTML

    //Le asigno el texto alternativo y el titulo
    nuevoArticulo.alt = "img4";
    nuevoArticulo.title = "Imagen nueva";

    // Añado el nuevo artículo a la sección de noticias
    seccionNoticias.appendChild(nuevoArticulo);

    // Modifico los estilos de la sección mediante style.property (miniDarkmode)
    seccionNoticias.style.backgroundColor = "#2e2e2e"; // Fondo oscuro
    seccionNoticias.style.color = "#ffffff"; // Texto blanco
    let noticias = document.getElementsByClassName("noticias__articulo");
    Array.from(noticias).forEach(noticia => {noticia.style.border = "2px solid white"}); // Borde blanco)


    
}

// =====================================================================================================

//Apartado 1
accederAElementos();

//Apartado 2
ejemploCreacion();

//Apartado 3
contenido();

atributos();

//Apartado 4
eliminarElementos();

//Apartado 5
manipularEstilos();

//Ejemplo combinando todos los apartados
ejemploCombinado()


/*=================================*/

//============ DARKMODE ===================================


const botonDarkMode = document.querySelector(".botones__darkmode input");

// Función para cambiar entre modos
function darkMode() {
    //Mediante toggle si la clase existe, la elimina y retorna false. Si no, la añade y retorna true.
    const esDarkMode = document.body.classList.toggle("dark-mode");

    // Para que se guarde si el DarkMode está en uso (clave: darkMode - valor: true o false). Se guarda en el almacenamiento local sin expiración de tiempo.
    localStorage.setItem("darkMode", esDarkMode.toString());

    // Sincroniza el estado del checkbox, si está en darkmode está activado
    botonDarkMode.checked = esDarkMode;
}

// Activa Dark Mode si estaba activado antes
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    botonDarkMode.checked = true;
}

// Cada vez que se pulse el botón (cambia el estado del checkbox) se llama a la función darkMode()
botonDarkMode.addEventListener("change", darkMode);


//============ FORMULARIO ===================================


const form = document.querySelector(".formulario__form");
if (form) {
    const inputs = form.querySelectorAll("input, textarea");

    form.addEventListener("submit", function(e) {
        let formOk = false;
        //Verificación última de que todo está correcto, en caso de que no cancela el envío
        inputs.forEach(input => verificarInput(input));
        formOk = comprobarForm()
        if (!formOk) {
            e.preventDefault();
            alert("No se ha podido enviar el formulario (campos incorrectos)")
        }


    });


    inputs.forEach(input => {
        localStorage.removeItem(input.name);
        input.addEventListener('input', (event) => verificarInput(event.target));
    });
}

//Comprueba si el valor del input está correcto

function verificarInput(input) {
    switch (input.name) {
        case "name":
            if (!validarPatron(input.value, "^[a-zA-ZÀ-ÿ\\s]{3,40}$")) {
                lanzarError("El nombre no es válido.", input);
            } else {
                eliminarError(input);
                lanzarBien("Nombre válido.", input);
            }
            break;
        case "email":
            if (!validarPatron(input.value, "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")) {
                lanzarError("El correo electrónico no es válido.", input);
            } else {
                eliminarError(input);
                lanzarBien("Correo electrónico válido.", input);
            }
            break;
        case "fecha":
            if (!validarPatron(input.value, "^\\d{4}-\\d{2}-\\d{2}$")) {
                lanzarError("La fecha no es válida.", input);
            } else {
                const fechaIntroducida = new Date(input.value);
                const fechaActual = new Date();

                if (fechaIntroducida > fechaActual) {
                    lanzarError("La fecha no es válida.", input);
                } else {
                    eliminarError(input);
                    lanzarBien("Fecha válida.", input);
                }
            }
            break;
        case "radio":
            const radios = document.querySelectorAll(".radio");
            const radioSeleccionado = Array.from(radios).some(radio => radio.checked);
            if (!radioSeleccionado) {
                lanzarError("Debe seleccionar una opción de radio.", input);
            } else {
                eliminarError(input);
                lanzarBien("Opción seleccionada correctamente.", input);
            }
            break;
        case "telefono":
            if (!validarPatron(input.value, "^[0-9]{9}$")) {
                lanzarError("El teléfono no es válido.", input);
            } else {
                eliminarError(input);
                lanzarBien("Teléfono válido.", input);
            }
            break;
        case "asunto":
            if (input.value.trim() === "") {
                lanzarError("El asunto no puede estar vacío.", input);
            } else {
                eliminarError(input);
                lanzarBien("Asunto válido.", input);
            }
            break;
        case "mensaje":
            const caracteres = 10;
            if (input.value.trim().length < caracteres) {
                lanzarError(`El mensaje debe tener al menos ${caracteres} caracteres.`, input);
            } else {
                eliminarError(input);
                lanzarBien("Mensaje válido.", input);
            }
            break;
        case "check":
            if (!input.checked) {
                lanzarError("Debe aceptar los términos y condiciones.", input);
            } else {
                eliminarError(input);
                lanzarBien("Términos y condiciones aceptados.", input);
            }
            break;
    }

}

//Comprueba si el formulario tiene errores

function comprobarForm(){
    const mensajesError = form.querySelectorAll(".linea-error");
    if (mensajesError.length > 0) {
        return false
    } else return true;
}

//Valida el valor según patrón pasados por argumento

function validarPatron(valor, patron) {
    const regex = new RegExp(patron);  // Convierto la cadena en una expresión regular
    return regex.test(valor);
}

//Lanza un mensaje de error

function lanzarError(mensaje, input) {
    if (localStorage.getItem(input.name) == null) {
        const contMensaje = document.createElement('div');
        contMensaje.className = 'linea-error';
        contMensaje.textContent = mensaje;

        contMensaje.classList.add("msj-" + input.name);  // Clase única para cada mensaje

        // Añade el mensaje debajo del input
        input.insertAdjacentElement('afterend', contMensaje);

        localStorage.setItem(input.name, "true");
    }
}

//Lanza un mensaje de que está bien

function lanzarBien(mensaje, input) {
    // Solo si no existe el mensaje lo lanza
    const mensajeExistente = document.querySelector('.linea-bien.' + input.name);
    if (!mensajeExistente) {

        const contMensaje = document.createElement('div');
        contMensaje.className = 'linea-bien ' + input.name; // Añadir una clase con el nombre del campo
        contMensaje.textContent = mensaje;

        // Añadir el mensaje debajo del input
        input.insertAdjacentElement('afterend', contMensaje);

        setTimeout(function () {
            contMensaje.remove();
        }, 1000);
    }
}

//Elimina el mensaje de error

function eliminarError(input) {
    const contMensaje = document.querySelector('.msj-' + input.name);

    if (contMensaje) {
        contMensaje.remove();
        localStorage.removeItem(input.name);
    }
}



/*========GALERÍA===========*/
const botonAgregar = document.querySelector(".boton_aniadir");
const imagenes = document.querySelector(".galeria_lista");

// Carga las imágenes guardadas al iniciar
document.addEventListener("DOMContentLoaded", () => {
    const imagenesGuardadas = JSON.parse(localStorage.getItem("imagenes")) || [];
    imagenesGuardadas.forEach(ruta => {
        const contenedor = document.createElement("div");
        contenedor.classList.add("contenedor_imagen");

        const img = document.createElement("img");
        img.classList.add("galeria__imagen");
        img.src = ruta;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("boton_eliminar");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", () => {
            contenedor.remove();
            eliminarImagenDeLocalStorage(ruta);
        });

        contenedor.appendChild(img);
        contenedor.appendChild(botonEliminar);
        imagenes.appendChild(contenedor);
    });
});

// Añade una imagen nueva
if (botonAgregar) {
    botonAgregar.addEventListener("click", () => {
        const archivo = document.querySelector(".input_imagen").files[0];
        if (archivo && archivo.type.startsWith("image/")) {
            const lector = new FileReader();
            lector.onload = (e) => {
                const ruta = e.target.result;
                agregarImagen(ruta);
                guardarImagen(ruta);
            };
            lector.readAsDataURL(archivo);  //Al leer el archivo lo convierte a un Data URL (en base64 para leer la imagen)
        } else {
            alert("Selecciona una imagen válida");
        }
    });
}

// Función para agregar imagen al DOM
function agregarImagen(src) {
    const contenedor = document.createElement("div");
    contenedor.classList.add("contenedor_imagen");

    const img = document.createElement("img");
    img.classList.add("galeria__imagen");
    img.src = src;

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("boton_eliminar");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
        contenedor.remove();
        eliminarImagenDeLocalStorage(src);
    });

    contenedor.appendChild(img);
    contenedor.appendChild(botonEliminar);
    imagenes.appendChild(contenedor);
}

// Guarda la ruta de la imagen en localStorage
function guardarImagen(src) {
    const imagenesGuardadas = JSON.parse(localStorage.getItem("imagenes")) || [];
    imagenesGuardadas.push(src);
    localStorage.setItem("imagenes", JSON.stringify(imagenesGuardadas));
}

// Elimina una imagen de localStorage
function eliminarImagenDeLocalStorage(src) {
    const imagenesGuardadas = JSON.parse(localStorage.getItem("imagenes")) || [];
    const nuevasImagenes = imagenesGuardadas.filter(imagen => imagen !== src);
    localStorage.setItem("imagenes", JSON.stringify(nuevasImagenes));
}

//=============== FILTROS =================

const formFiltros = document.querySelector(".filtros__form");
const seccionCompletaServicios = document.querySelector(".servicios");
const seccionServicios = document.querySelector(".servicios_articulos");

/*Esto es para guardar los servicios al principio, ya que al realizar los filtros puede que se eliminen algunos articulos */
let contador = 0;
let servicios;
if (contador === 0 && seccionCompletaServicios) {
    servicios = seccionCompletaServicios.querySelectorAll(".servicios__articulo")
    contador++;
}

//Solo si existe
if (formFiltros){
    actualizarRangoPrecio();
    formFiltros.addEventListener('submit', function (evento) {
        evento.preventDefault(); //Evita el envío para ordenar los servicios
        ordenarServicios(obtenerServiciosBuscados());
    });
}

// Devuelve los servicios que cumplen con lo buscado y los filtros

function obtenerServiciosBuscados() {
    const buscado = seccionCompletaServicios.querySelector(".filtros__buscador").value.trim().toLowerCase();

    const articulosBuscados = [];

    const haBuscado = buscado === ""

    if (haBuscado) {
        servicios.forEach(servicio => {
            if(seFiltra(servicio)) articulosBuscados.push(servicio);
        })
    } else {
        servicios.forEach(servicio => {
            const titulo = servicio.querySelector('.servicio__titulo').textContent.toLowerCase();
            if (titulo.includes(buscado)) {
                if(seFiltra(servicio)) articulosBuscados.push(servicio);
            }
        })
    }
    return articulosBuscados;
}

// Ordena los servicios en la página

function ordenarServicios(serviciosAOrdenar) {
    seccionServicios.innerHTML = ""; //Elimino el contenido de la sección
    const filtro  = seccionCompletaServicios.querySelector(".filtros__orden").value;

    if (serviciosAOrdenar.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "No existen servicios con esa búsqueda.";
        mensaje.style.padding = "2rem 0 1.5rem 0";
        mensaje.style.fontSize = "1.5rem";
        mensaje.style.textAlign = "center";

        seccionServicios.appendChild(mensaje);
    } else{
        //Según el filtro elegido, se ordena de una manera
        switch (filtro) {
            case "Todos":
                serviciosAOrdenar.forEach(servicio => {seccionServicios.appendChild(servicio);})
                break;
            case "Más antiguos":
                serviciosAOrdenar.sort((a, b) => {
                    const fechaA = convertirFechaADate(a.querySelector('.servicio_fecha').textContent.split(" ")[1]);
                    const fechaB = convertirFechaADate(b.querySelector('.servicio_fecha').textContent.split(" ")[1]);
                    return fechaA - fechaB
                }).forEach(servicio => {seccionServicios.appendChild(servicio);});
                break;
            case "Recientes":
                serviciosAOrdenar.sort((a, b) => {
                    const fechaA = convertirFechaADate(a.querySelector('.servicio_fecha').textContent.split(" ")[1]);
                    const fechaB = convertirFechaADate(b.querySelector('.servicio_fecha').textContent.split(" ")[1]);
                    return fechaB - fechaA
                }).forEach(servicio => {seccionServicios.appendChild(servicio);});
                break;
            case "Precio de mayor a menor":
                serviciosAOrdenar.sort((a, b) => {
                    const precioA = a.querySelector('.servicio_precio').textContent.split(" ")[1]
                    const precioB = b.querySelector('.servicio_precio').textContent.split(" ")[1] // Solo coge el número del precio
                    return precioB - precioA
                }).forEach(servicio => {seccionServicios.appendChild(servicio);});
                break;
            case "Precio de menor a mayor":
                serviciosAOrdenar.sort((a, b) => {
                    const precioA = a.querySelector('.servicio_precio').textContent.split(" ")[1]
                    const precioB = b.querySelector('.servicio_precio').textContent.split(" ")[1] // Solo coge el número del precio
                    return precioA - precioB
                }).forEach(servicio => {seccionServicios.appendChild(servicio);});
                break;
        }
    }

}

//Comprueba si el servicio cumple con los filtros

function seFiltra(servicioAFiltrar){
    const precioServicio = parseFloat(servicioAFiltrar.querySelector(".servicio_precio").textContent.split(" ")[1]);
    const fechaServicio = convertirFechaADate(servicioAFiltrar.querySelector(".servicio_fecha").textContent.split(" ")[1]);

    let seFiltra = true;

    if (!verificarPrecioFiltro(precioServicio) || !verificarFechaFiltro(fechaServicio)) {
        seFiltra = false;
    }

    return seFiltra;
}

//Comprueba si cumple con el filtro de precio

function verificarPrecioFiltro(precio){
    const precioMin = formFiltros.querySelector(".input_precioMin").value;
    const precioMax = formFiltros.querySelector(".input_precioMax").value;
    if(precio <= precioMin || precioMax <= precio) return false; else return true;
}

//Comprueba si cumple con el filtro de fecha

function verificarFechaFiltro(fecha){
    const fechaMin = new Date(formFiltros.querySelector(".input_fechaMin").value);
    const fechaMax = new Date(formFiltros.querySelector(".input_fechaMax").value);

    if (fechaMin === "" && fechaMax === "") return true;
    else if (fechaMin === "") if (fecha >= fechaMax) return false; else return true;
    else if (fechaMax === "") if (fecha <= fechaMin) return false; else return true;
    else {
        if(fecha <= fechaMin || fechaMax <= fecha) return false; else return true;
    }

}

// FUNCIÓN PARA MOSTRAR/NO MOTRAR FILTROS

let botonMostrarFiltros;
let filtros;
if (formFiltros) {
    botonMostrarFiltros = formFiltros.querySelector(".boton_mostrar_filtros");
    filtros = formFiltros.querySelector(".filtros__extras");
}

if (botonMostrarFiltros && filtros) {
    botonMostrarFiltros.addEventListener('click', function (){
        mostrarFiltro(filtros, "mostrarFiltros");
    });
}

//Muestra o no muestra un contenedor pasado por argumento y una clave para identificar si está mostrado o no
function mostrarFiltro(contenedor, clave){
    if (localStorage.getItem(clave) == null){
        contenedor.style.display = "flex";
        localStorage.setItem(clave, "true");
    } else {
        contenedor.style.display = "none";
        localStorage.removeItem(clave);
    }
}

// FUNCIÓN PARA ACTUALIZAR EL RANGO DE PRECIO DE LOS SERVICIOS

function actualizarRangoPrecio() {
    const labelPrecioMin = formFiltros.querySelector(".label_precioMin");
    const labelPrecioMax = formFiltros.querySelector(".label_precioMax");

    const inputPrecioMin = formFiltros.querySelector(".input_precioMin");
    const inputPrecioMax = formFiltros.querySelector(".input_precioMax");

    if (inputPrecioMin && inputPrecioMax) {
        labelPrecioMin.textContent = "Precio mínimo:  " + inputPrecioMin.value;
        labelPrecioMax.textContent = "Precio máximo:  " + inputPrecioMax.value;

        inputPrecioMin.addEventListener("input", function () {
            inputPrecioMax.min = inputPrecioMin.value;
            labelPrecioMin.textContent = "Precio mínimo:  " + inputPrecioMin.value;
        })
        inputPrecioMax.addEventListener("input", function () {
            inputPrecioMin.max = inputPrecioMax.value;
            labelPrecioMax.textContent = "Precio máximo:  " + inputPrecioMax.value;
        })
    }
}


/* ========== CARRITO ==============*/

//VARIABLE PARA LA ID DE ELEMENTOS CARRITO
let idCarrito;
let contCar = 0;
const objetosServicio = []

//Crea objetos, para guardar la id del servicio y su título (para buscar el servicio después), y guarda en localStorage el número de servicios existentes
function guardarInfoId(){
    if (contCar === 0){
        for (let i = 0; i < servicios.length; i++){
            objetosServicio.push({
                id: contCar++,
                titulo: servicios[i].querySelector(".servicio__titulo").textContent
            });
        }
        idCarrito = objetosServicio.length
        localStorage.setItem("numServicios", objetosServicio.length.toString());
    }
}

if (servicios){
    guardarInfoId()
    cambiarTextoBotones()

    servicios.forEach(servicio => {
        //Evento para añadir o eliminar servicios del carrito desde la página servicios
        servicio.addEventListener('click', (evento) => {
            aniadirOEliminarServicios(evento);
        })
    });
}

const carrito = document.querySelector(".seccion_carrito");

//Si existe, realiza el proceso del carrito
if (carrito) {
    colocarServiciosYaEnCarrito()
    actualizarSubTotal()
    //Evento para eliminar servicios del carrito desde la página carrito
    if (carrito.querySelectorAll("article").length > 0) {
        eliminarDelCarrito(carrito);
    }
}

/*Guarda en localStorage la id del servicio si lo añade con su HTML, lo elimina si lo borra y cambia el contenido de los botones según el caso*/

function aniadirOEliminarServicios(evento) {
    if (evento.target.classList.contains("boton_aniadir_carrito")) {
        const servicioEvento = evento.target.parentElement;
        const id = obtenerServicioId(servicioEvento);
        const servicioId = "Carrito"+id; // "Identificador"
        if (localStorage.getItem(servicioId) == null) {
            evento.target.textContent = "Eliminar del carrito";
            localStorage.setItem(servicioId, servicioEvento.innerHTML);
        } else {
            evento.target.textContent = "Añadir al carrito";
            localStorage.removeItem(servicioId);
        }
    }
}

//Obtiene la id del servicio carrito desde la página servicios

function obtenerServicioId(servicio){
    for (let i = 0; i < parseInt(localStorage.getItem("numServicios")); i++) {
        if (objetosServicio[i].titulo === servicio.querySelector(".servicio__titulo").textContent) {
            return objetosServicio[i].id;
        }
    }
}

// Crea un "nuevo" artículo mediante la info del servicio a añadir y lo añade al carrito

function aniadirACarrito(servicio) {
    const servicioTitulo = servicio.querySelector('.servicio__titulo').textContent;
    const servicioPrecio = servicio.querySelector('.servicio_precio').textContent.split(" ")[1];
    const servicioFecha = servicio.querySelector('.servicio_fecha').textContent.split(" ")[1];
    const servicioImagen = servicio.querySelector('.servicio__imagen').src;

    const nuevoServicioCarrito = document.createElement('article');
    nuevoServicioCarrito.classList.add('carrito__servicio');

    nuevoServicioCarrito.innerHTML = `
    <img src="${servicioImagen}" alt="Imagen del servicio" class="servicio_carrito_imagen">
    <div class="servicio_carrito_info">
        <h4 class="servicio_carrito_titulo">${servicioTitulo}</h4>
        <ul class="servicio_carrito_caracteristicas">
            <li class="servicio_precio">→<span>Precio: </span>${servicioPrecio} €</li>
            <li class="servicio_fecha">→<span>Fecha: </span>${servicioFecha}</li>
        </ul>
    </div>
    <button title="eliminar" class="boton_eliminar_carrito"><img src="assets/marca_x.png" alt="x"></button>
`;
    carrito.appendChild(nuevoServicioCarrito);

}

//Cambia el contenido de los botones de los servicios

function cambiarTextoBotones(){
    servicios.forEach(servicio => {
        if(localStorage.getItem("Carrito"+obtenerServicioId(servicio)) == null){
            servicio.querySelector(".boton_aniadir_carrito").textContent = "Añadir al carrito";
        } else servicio.querySelector(".boton_aniadir_carrito").textContent = "Eliminar del carrito";
    })
}

//Elimina servicios del carrito desde la página carrito

function eliminarDelCarrito() {
    carrito.addEventListener("click", function(evento){
        if(evento.target.parentElement.classList.contains("boton_eliminar_carrito")){
            localStorage.removeItem("Carrito"+obtenerClave(evento.target.parentElement.parentElement.querySelector(".servicio_carrito_titulo").textContent));
            evento.target.parentElement.parentElement.remove();

            actualizarSubTotal()
        }
    })

}

//Obtiene la id desde la página carrito

function obtenerClave(titulo){
    const num = parseInt(localStorage.getItem("numServicios"));
    for (let i = 0; i < num; i++) {
        const contenedorH = document.createElement("article");
        contenedorH.innerHTML = localStorage.getItem("Carrito"+i);
        if (localStorage.getItem("Carrito"+i) != null) {
            if (titulo === contenedorH.querySelector(".servicio__titulo").textContent) {
                return i;
            }
        }
    }
}

//Coloca los servicios añadidos al carrito

function colocarServiciosYaEnCarrito() {
    for (let numid = 0; numid < parseInt(localStorage.getItem("numServicios")); numid++){
        const servicioId = "Carrito"+numid;

        if (localStorage.getItem(servicioId) != null) {
            const servicio = document.createElement("article");
            servicio.innerHTML = localStorage.getItem(servicioId)
            aniadirACarrito(servicio)
        }
    }
}

//Actualiza el subtotal del carrito

function actualizarSubTotal(){
    let suma = 0;
    const precios = carrito.querySelectorAll(".servicio_precio")

    if (precios.length > 0){
        precios.forEach(precio => {
            console.log(precio.textContent.split(" ")[1])
            suma += parseFloat(precio.textContent.split(" ")[1]);
        })
    }
    document.querySelector(".carrito_subtotal").textContent = "Subtotal: " + suma + " €"
}

//FUNCIÓN PARA CONVERTIR LA FECHA QUE UTILIZO EN LOS SERVICIOS (TIENE OTRO FORMATO) en un objeto Date

function convertirFechaADate(fecha) {
    const partes = fecha.split("-");
    return new Date(partes[2], partes[1] - 1, partes[0]); // En JS el número de mes empieza en 0 con Enero por eso hay que restar 1
}









