Bienvenido al **Portfolio de Velox**, una empresa innovadora y líder en el sector del automovilismo. A través de este sitio web, podrás explorar nuestros proyectos más destacados, nuestros servicios y ponerte en contacto con nosotros para más información. Este portfolio está diseñado para ofrecerte una visión clara de lo que hacemos y cómo revolucionamos la industria del automovilismo.

## Descripción del Proyecto

Este portfolio digital tiene como objetivo presentar la amplia gama de servicios y proyectos que Velox ha desarrollado en el mundo del automovilismo. A través de un diseño moderno y fácil de navegar, los visitantes pueden descubrir no solo nuestros vehículos de alto rendimiento, sino también los servicios que ofrecemos, nuestra visión empresarial y mucho más.

### Secciones del Portfolio

- **Inicio**: Un resumen visual de lo que Velox representa, incluyendo información destacada sobre la empresa y sus principales logros.
- **Blog**: Publicaciones periódicas sobre innovaciones en automovilismo, noticias de la industria y las últimas actualizaciones de nuestros proyectos y eventos.
- **Servicios**: Un detalle de los servicios que Velox ofrece.
- **Contacto**: Información de contacto para consultas, solicitudes de servicio o colaboraciones con la empresa.

## Instrucciones para Visualizar el Portfolio

1. **Acceso a la Página Web**:  
   Para visualizar el portfolio de Velox, dirígete a:  [Visita mi sitio web](https://danielmi5.github.io/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/)

2. **Navegación del Sitio**:  
   El sitio web está dividido en las siguientes secciones:  
   - **Inicio**: Sección principal con imágenes destacadas y enlaces a las demás partes del sitio.
   - **Blog**: Accede a las publicaciones más recientes sobre tendencias y noticias del mundo automovilístico.
   - **Servicios**: Infórmate sobre los servicios personalizados que Velox ofrece a sus clientes.
   - **Contacto**: Encuentra todos los detalles para ponerte en contacto con nosotros.

3. **Optimización para Móviles**:  
   El sitio está completamente optimizado para dispositivos móviles y tablets, por lo que puedes disfrutar de una experiencia fluida sin importar el dispositivo que utilices.

4. **Interactividad**:  
   El portfolio incluye elementos interactivos, como imágenes de alta calidad, transiciones y animaciones.

5. **Accesibilidad**:  
   La web está diseñada con la accesibilidad en mente, incluyendo texto alternativo para imágenes, ajustes de contraste y navegación intuitiva.


## Validación de la página web

HTML y CSS validado mediante W3C Validator. Página sin errores.

#### Proceso

- **HTML:**

Documento `index.html`
  ![Documento inicio html](readme-images/index.png)
  1-Error: div no permitido dentro de un label en ese contexto (en "botón" para darkmode). Para arreglarlo decidí cambiar       el div por un span.
  
  2-Warning: Elemento h2-h6 faltante en el section del header. Carece de sentido utilizar un section para agrupar todos los elementos ya que de por sí el header ya lo hace. Por lo que decidí eliminar el elemento `section`.
  
  3-Warning: Elemento h2-h6 faltante en el article del contexto. Para arreglar esa parte cambié la estructuración de esa sección (apatado para texto de esa sección). Puse el contenido fuera del article y eliminé el article. El div que agrupa todo el contenido pasó a ser una section con su h3, el contenido anterior y los demás article. Las etiquetas h3 de los demás article pasaron a ser h4. 
  
  4-Warning: Elemento h2-h6 faltante en el article de la imagen. Como no necesitaba un identificador para la imagen, cambie el article por un elemento aside ya que la imagen la utilizo como un recurso complementario de la sección.

Documento `contacto.html`
![Documento inicio html](readme-images/contacto.png)
   
   1-Error: Mismo error que el index ya que pertenece al header (Este error ya arreglado para la validación de los siguienetes documentos).
   
   2-Warning: Mismo warning que el index ya que pertenece al header (Este warning ya arreglado para la validación de los siguienetes documentos).
   
   3-Warning: Elemento h2 vacío. Añadí el contenido del h2.
   

Documento `servicios.html`
![Documento contacto html](readme-images/servicios.png)
   
Los tres warnings coinciden, elemento h2-h6 faltante en los 3 article. Como no necesito un identificador para los testimonios he decidio agruparlos con el elemento ul, y he cambiado los article por los correspondientes elementos li.

El documento blog.html sin errores ni warnings.

- **CSS:**

CSS validado sin errores:

![¡CSS Válido!](http://jigsaw.w3.org/css-validator/images/vcss)


- **JavaScript:**
  
## Sintaxis moderna JavaScript (ES6+)
Se utiliza la sintaxis moderna de JavaScript (ES6+) queintroduce mejoras significativas en la escritura del código. `let` y `const` se utilizan para declarar variables con alcance de bloque, donde `let` permite reasignaciones y `const` no. Las `arrow functions` proporcionan una forma más concisa de escribir funciones, manteniendo el contexto de `this`. Las `template literals` permiten incluir variables y expresiones dentro de cadenas de texto usando ${}. Además, la desestructuración facilita la extracción de valores de objetos y arreglos, asignándolos directamente a variables, mejorando la legibilidad y eficiencia del código.

## **Lenguajes de Script de Cliente para la Web**

Los lenguajes de script de cliente relacionados con la web se utilizan para ejecutar código en el navegador del usuario sin necesidad de comunicarse con el servidor en cada acción del usuario, permitiendo interactividad y dinamismo en las páginas web.  

---
### **ECMAScript**  

ECMAScript (ES) es el estándar en el que se basan muchos lenguajes de script de cliente. Su objetivo principal es definir las características y el comportamiento de los lenguajes de programación para garantizar que sean compatibles entre diferentes plataformas y entornos de ejecución.  

#### **Principales versiones de ECMAScript**  
- **ES5 (2009)**: Introducción del modo estricto (`"use strict";`), JSON nativo.  
- **ES6 (2015)**: Añade `let`, `const`, clases, `Promise`, funciones flecha.  
- **ES7 - ES13 (2016 - 2022)**: `async/await`, `?.` (optional chaining), `??` (nullish coalescing), `BigInt`.  

---

### Principales Lenguajes de Script de Cliente  


#### JavaScript (JS)

JavaScript es el lenguaje más utilizado en el desarrollo web del lado del cliente debido a su versatilidad y compatibilidad con tecnologías modernas. Creado en 1995 por Brendan Eich en Netscape.

- **Características:**
    - Lenguaje interpretado y basado en prototipos.
    - Compatible con todos los navegadores modernos.
    - Permite manipulación del DOM para modificar contenido dinámicamente.
    - Soporta programación orientada a objetos, funcional y basada en eventos.
    - Se puede usar con frameworks como React, Angular y Vue.js.
    - Compatible con AJAX para realizar peticiones asíncronas.
- **Ejemplo:**

```javascript
// Un ejemplo simple de JavaScript
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

let nombre = "Juan";
console.log(saludar(nombre));

```

#### TypeScript (TS)

TypeScript es un superset de JavaScript que añade tipado estático y características avanzadas al lenguaje.

- **Características:**
    - Superset de JavaScript desarrollado por Microsoft.
    - Agrega tipado estático y mejora la mantenibilidad del código.
    - Se compila a JavaScript estándar para ejecución en el navegador.
    - Usado en proyectos grandes como Angular.
- **Ejemplo:**

```typescript
// Un ejemplo simple de TypeScript con una función que usa tipos
function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

let nombre = "Juan";
console.log(saludar(nombre));

```

#### Dart

Dart es un lenguaje de programación desarrollado por Google, diseñado principalmente para el desarrollo de aplicaciones móviles, web y de escritorio. Es conocido por ser el lenguaje detrás de Flutter y por su rendimiento.

- **Características:**
    - Creado por Google, optimizado para el desarrollo web y móvil.
    - Se usa en conjunto con el framework Flutter.
    - Soporta tipado opcional y programación reactiva.
    - Puede compilarse a JavaScript para ejecución en navegadores.
- **Ejemplo:**

```dart
// Un ejemplo simple de Dart
String saludar(String nombre) {
  return 'Hola, $nombre!';
}

void main() {
  var nombre = 'Juan';
  print(saludar(nombre));
}

```

#### CoffeeScript

Fue creado para hacer que escribir código JavaScript sea más conciso y legible. Su sintaxis es más simple y expresiva, eliminando la necesidad de escribir ciertas palabras clave y puntuación, como las llaves {} y los puntos y coma ;.

- **Características:**
    - Sintaxis más limpia y concisa que JavaScript.
    - Se compila a JavaScript estándar.
    - Facilita la escritura de código más legible y estructurado.
- **Ejemplo:**

```coffeescript
# Un ejemplo simple de CoffeeScript
saludar = (nombre) ->
  "Hola, #{nombre}!"

nombre = "Juan"
console.log saludar(nombre)

```

#### VBScript (Obsoleto)

Es un lenguaje de scripting desarrollado por Microsoft. Es una versión más ligera del lenguaje Visual Basic y está diseñado principalmente para ser utilizado en aplicaciones web y scripts de automatización en entornos Windows. Actualmente ha quedado en gran medida obsoleto debido a la falta de soporte en la mayoría de los navegadores modernos y el auge de otros lenguajes como JavaScript para la web.

- **Características:**
    - Desarrollado por Microsoft y ejecutado en Internet Explorer.
    - Permitía scripts en páginas web pero fue descontinuado por falta de compatibilidad.
- **Ejemplo:**

```vbscript
' Un ejemplo simple de VBScript
Dim nombre
nombre = "Juan"
MsgBox "Hola, " & nombre & "!"

```

---

### Clasificación

| Característica   | JavaScript        | TypeScript        | Dart                | CoffeeScript       | VBScript (Obsoleto) |
|-----------------|------------------|------------------|---------------------|--------------------|---------------------|
| **Paradigma**   | Multiparadigma    | Multiparadigma   | Orientado a Objetos | Funcional          | Imperativo          |
| **Tipado**      | Dinámico, Débil   | Estático, Fuerte | Estático, Opcional  | Dinámico, Débil    | Estático            |
| **Compatibilidad** | Todos los navegadores | Compilado a JS   | Compilado a JS      | Compilado a JS     | Solo IE             |
| **Uso principal** | Web, Apps        | Web, Apps grandes | Web, Apps móviles   | Simplificar JS     | Web (obsoleto)      |

---

### FASE 2: Manipulación del DOM

Para la **ejecución** del script, los apartados están hechos en funciones, de forma predeterminada no se ejecutan, se tiene que pasar true como parámetro de la función que se quiera ejecutar para poder ejecutarla. Todas las funciones se encuentran al final del archivo.

#### 1. Seleccionar y acceder a elementos del documento web

- **Métodos**:
	- **`getElementById(id)`:** Devuelve el elemento que tiene el `id` especificado. Si no existe un elemento con ese `id`, retorna `null`.
	- **`querySelector(selector)`:** Selecciona el primer elemento dentro del DOM que coincide con un selector CSS.
	- **`querySelectorAll(selector)`:** Selecciona todos los elementos que coinciden con un selector CSS especificado y devuelve una `NodeList`.
	- **`getElementsByClassName(selector)`:** Devuelve una colección (`HTMLCollection`) con todos los elementos que coinciden con la clase especificada.
	- **`getElementByName(name)`:** Devuelve una colección (`NodeList`) con todos los elementos que tienen el atributo `name` con el valor especificado.
	- **`getElementsByTagName(etiqueta)`:** Devuelve una colección (`HTMLCollection`) con todos los elementos que coinciden con la etiqueta especificada.
	
- **Ejemplo:** 

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/cea71c4d816daa455016fdb04265e6cd0fbb11e5/js/script.js#L18-L42

#### 2. Crear y añadir nuevos elementos dinámicamente al documento

- **Métodos**:
	- **`createElement(etiqueta)`:** Crea un nuevo elemento HTML con la etiqueta especificada. Sin embargo, este elemento no se agrega automáticamente al documento, debe ser insertado manualmente.
	- **`elementoPadre.appendChild(elementoHijo)`:** Agrega un elemento hijo al final de otro elemento padre dentro del DOM (última posición). Si el elemento ya existe en el DOM, se mueve a la nueva posición.
	- Para el ejemplo, también se ha utilizado la modificación de atributos (detallada más adelante).
	
- **Ejemplo:** 

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/cea71c4d816daa455016fdb04265e6cd0fbb11e5/js/script.js#L55-L85

#### 3. Modificar el contenido y atributos de elementos existentes

- **Métodos**:
	- **Contenido**
		- **`textContent`:** Permite obtener o modificar el contenido de texto de un elemento sin interpretar etiquetas HTML, mostrando solo el texto plano.
		- **`innerHTML`:** Obtiene o establece el contenido HTML de un elemento, permitiendo modificar su estructura interna e interpretar etiquetas HTML.
		- **``outerHTML:** Funciona de manera similar a innerHTML, pero afecta a la propia etiqueta del elemento, reemplazándolo completamente en lugar de solo modificar su contenido interno.
		- **`setHTMLUnsafe()`:** Es una alternativa moderna a `innerHTML` utilizada únicamente para modificar contenido y es compatible con DOM Shadow declarativo.
		- **`getHTML()`:** Utilizada únicamente para obtener contenido y también es compatible con DOM Shadow declarativo.
	- **Atributos**
		- **`hasAttributes()`:** Verifica si un elemento tiene algún atributo HTML, devuelve `true`, si no tiene devuelve `false`.
		- **`hasAttribute(atributo)`:** Comprueba si un elemento posee un atributo específico.
		- **`getAttributeNames()`:** Devuelve un array con los nombres de los atributos del elemento.
		- **`getAttribute(atributo)`:** Obtiene el valor de un atributo específico o devuelve `null` si no existe.
		- Para **modificar** atributos se puede hacer directamente asignando un nuevo valor con `nombreElemento.atributo` o utilizando `setAttribute(nombreAtributo, valorAtributo)`, que permite establecer o modificar un atributo del elemento.

	
- **Ejemplo:** 

	- **Contenido**
https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/cea71c4d816daa455016fdb04265e6cd0fbb11e5/js/script.js#L99-L132

	- **Atributos**
https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/cea71c4d816daa455016fdb04265e6cd0fbb11e5/js/script.js#L142-L157

#### 4. Eliminar elementos de la página según criterios específicos

- **Métodos**:
	- **`remove()`:** elimina el elemento del DOM directamente.
	- **`elementoPadre.removeChild(elementoHijo)`:** Es un método del elemento padre y requiere que se especifique el elemento hijo que se va a eliminar.
	
- **Ejemplo:**

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/cea71c4d816daa455016fdb04265e6cd0fbb11e5/js/script.js#L169-L224

#### 5. Manipular estilos directamente desde JavaScript

- **Métodos**:
	- **`classList`:** Obtiene una 'lista' de las clases del elemento y permite manipular las clases de un elemento de manera dinámica, mediante las siguientes funcionalidades:
		- **`add("clase")`:** Se añade una clase al elemento, si existe no la añade. 
		- **`remove("clase")`:** Elimina una clase específica si está.
		- **`toggle("clase")`:** Añade la clase si no está presente y la elimina si ya lo está.
		- **`contains("clase")`:** Devuelve `true` si el elemento tiene la clase especificada y `false` en caso contrario.
		- **`replace("claseAntigua", "claseNueva")`:** Sustituye una clase por otra.
	- **`style.property`:** Permite modificar los estilos CSS de un elemento de manera directa.
	
- **Ejemplo:** 

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/cea71c4d816daa455016fdb04265e6cd0fbb11e5/js/script.js#L234-L249

#### Ejemplo con todos los apartados

Consiste en sustituir la última noticia de la sección noticias por una noticia nuevo, aplicando cada apartado:
- Selección de elementos.
- Creación de elementos.
- Modificacíón de contenido y atributos.
- Eliminación de elementos
- Manipulación de estilos

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/ae79cf9b55f7340b3868a77e3e496584be2d0879/js/script.js#L257-L289

1. Selecciono la sección de noticias mediante la clase de la sección. 
2. Selecciono el último elemento (articulo noticia) de la sección con el selector de la clase de los artículos y `last:child`.
3. Creo el artículo nuevo y le añado la clase de las noticias.
4. Guardo en una constante el contenido HTML y se lo asigno al nuevo artículo (noticia) mediante innerHTML.
5. Asigno al artículo alt y title.
6. Añado al artículo a la sección con appendChild().
7. Modifico los estilos de la sección (incluido artículos) mediante style.property.


### FASE 3: Funcionalidades Interactivas

#### DARKMODE

Permite alternar entre el **modo claro** y el **modo oscuro** de la página, y recuerda la opción elegida mediante `localStorage`.

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/8b66e3d9a4a0f813c620801487130eba93b447c7/js/script.js#L324-L345

Mediante `querySelector` selecciono el input del darmode, para añadirle un evento para que se active cuando cambie el estado del checkbox y llame a `darkmode()`. La función `darkMode()` se encarga de cambiar entre los modos. Obtengo en la constante `esDarkMode` mediante el método `toggle`, true (si la clase "dark-mode" no existe), y false (si existe la elimina). La valor de la constante la almaceno en localStorage, para guardar el modo actual (true - darkmode | false - lightmode). Y al final, asigno al estado del checkbox del darkmode al valor de `esDarkMode`.

Mediante un if verifico en localStorage, si darkmode estaba activo. Si lo estaba añade la clase "dark-mode" al body y cambia a true el estado del checkbox del darkmode.


#### FORMULARIO CON VALIDACIÓN DINÁMICA

Validación dinámica para el formulario de contacto mostrando mensajes de error o éxito según la interacción del usuario.

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/8b66e3d9a4a0f813c620801487130eba93b447c7/js/script.js#L351-L373

AL principio guardo en una constante el formulario de contacto a través de su clase con `querySelector`. Si el formulario existe, obtiene todos sus input (input y textarea) mediante `querySelectorAll`. Luego, añade un evento que se activa al enviar el formulario. Durante el evento, verifica todos los campos utilizando la función `verificarInput()` y, si la función `comprobarForm()` indica que hay errores, se cancela el envío y se muestra un mensaje de alerta al usuario. Además, por cada campo del formulario, se elimina cualquier dato guardado previamente en localStorage y se asigna un evento input que valida el campo en tiempo real cada vez que el usuario escribe.

##### Funciones utilizadas:

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/8b66e3d9a4a0f813c620801487130eba93b447c7/js/script.js#L377-L520

- `**verficarInput()**`: Valida un campo específico del formulario dependiendo de su name. Usa una estructura switch para aplicar comprobaciones según el tipo de campo. Si el valor no cumple con el patrón o la condición, se muestra un mensaje de error con `lanzarError()`. Si es válido, se limpia cualquier error anterior con `eliminarError()` y se muestra un mensaje correcto con `lanzarBien()`.

- `**comprobarForm()**`: Comprueba si el formulario está libre de errores. Revisa si hay mensajes de error (mediante su clase .linea-error). Si encuentra alguno, devuelve false; si no hay errores, devuelve true.

- `**validarPatron(valor, patron)**`: Recibe un valor y una cadena que representa una expresión regular (regex). Crea una expresión regular a partir del patrón y verifica si el valor lo cumple mediante el método test() (devuelve true si coincide el regex y la cadena, sino false). Devuelve true si es válido o false si no lo es. Utilizado para comprobar campos que deban seguir un formato específico (teléfono, correo).

- `**lanzarError(mensaje, input)**`: Muestra un mensaje de error debajo del campo si todavía no existe uno para ese input. Se crea un elemento div (contenedor del error) mediante `createElement` con la clase linea-error y una clase personalizada para identificar con que input está (.msj-nombreInput). También se guarda en localStorage que indica que se está utilizando un mensaje de error (para evitar repetir errores si ya está uno visible en ese input). Para añadirlo justo debajo del input, sobre el propio input utilizo el método `insertAdjacentElement()` pasando como parámetro "afterend" (indica que se añada justo después de este) y el elemento a añadir (el mensaje).

- `**lanzarBien(mensaje, input)**`: Exactamente igual que en `lanzarError`, pero no se mantiene, se elimina después de 1s.

- `**eliminarError(input)**`: Elimina el mensaje de error del input. Obtiene el mensaje, mediante su clase personalizada para identificarlo. Si existe, lo elimina y elimina del localStorage su "marca" (que indicaba que tenía un mensaje de error).

### GALERÍA INTERACTIVA

Permite a los usuarios interactuar con una galería de imágenes de manera dinámica. Pueden seleccionar una imagen desde su dispositivo, la cual se mostrará en una galería en la página web. Cada imagen tendrá un botón para eliminarla y además, la galería se guarda, por lo que al reiniciar mantiene las imagenes añadidas anteriormente.

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/8b66e3d9a4a0f813c620801487130eba93b447c7/js/script.js#L523-L571

La función `aniadirImagen()` se encarga de gestionar el proceso:

- **Selección**: Se selecciona una imagen mediante un input de tipo file (los archivos se guardan en files - File[], pero como solo utilizo uno, cojo la primera posición).
- **Lector**: Si el archivo existe, creo un objeto FileReader, este convierte el archivo en una URL de datos (Data URL), que es una representación en base64 del contenido del archivo, permitiendo que la imagen se cargue y se muestre en la página sin necesidad de subirla a un servidor.
- **Creación**: Una vez que el archivo ha sido leído, se crea el contenedor, la propia imagen con la ruta leída y un boton eliminar. Los añado al contenedor y los agrego a la galería.


### SISTEMA DE FILTROS

Está implementado en los servicios, es un buscador de servicios que permite filtrar y ordenar según opciones elegidas por el usuario.

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/b07a2fda5013726fa71afe2b545ff1702aa7d386/js/script.js#L573-L594

Antes de realizar los filtros, guardo los servicios en una variable `servicios`, ya que elimino los contenedores.
Si existe el formulario de los filtros se ejecuta. Primero, hace una llamada a `actualizarRangoPrecio()` que se encarga de mantener actualizado el rango del precio en los filtros. Después, el formulario recibe un evento cuando es envíado, mediante el `métodoPreventDefault()` evito que se envíe el formulario y hago una llamada conjunta a `ordenarServicios(obtenerServiciosBuscados())`, la función que paso como parámetro devuelve los servicios filtrados, y ordenarServicios se encarga de ordenar estos servicios filtrados.

##### Funciones utilizadas:

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/b07a2fda5013726fa71afe2b545ff1702aa7d386/js/script.js#L596-L709

- `**obtenerServiciosBuscados()**`: Devuelve un array con los servicios que coinciden con la búsqueda del usuario y que además cumplen los filtros seleccionados. Si no hay texto de búsqueda, se devuelven todos los servicios que pasen los filtros. Si hay texto de búsqueda, se compara con el título del servicio y se devuelve solo si también cumple con los filtros, usando `seFiltra()`.

- `**ordenarServicios(serviciosAOrdenar)**`: Ordena los servicios filtrados, recibidos como parámetro, según el filtro de orden seleccionado. Puede ordenar por fecha (más antiguos o recientes) o por precio (mayor a menor o menor a mayor). Si no hay servicios tras filtrar, muestra un mensaje de que no se encontraron resultados. Los ordeno mediante el método `sort()` y se usa `convertirFechaADate()` para convertir la fecha que utilizo (que está en otro formato) a objeto `Date`.

- `**seFiltra(servicioAFiltrar)**`: Determina si un servicio cumple con los filtros de precio y fecha. Extrae los valores desde el DOM y llama a `verificarPrecioFiltro()` y `verificarFechaFiltro()`. Devuelve `true` solo si ambos filtros se cumplen.

- `**verificarPrecioFiltro(precio)**`: Verifica si el precio del servicio está dentro del rango establecido por los inputs `input_precioMin` y `input_precioMax`. Si el precio está fuera de los límites, devuelve `false`; si está dentro, devuelve `true`.

- `**verificarFechaFiltro(fecha)**`: Comprueba si la fecha del servicio está dentro del rango de fechas introducido. Si ambos campos están vacíos, devuelve `true`. Si solo uno está vacío, verifica si la fecha cumple con el otro límite. Si hay ambos, asegura que la fecha esté entre los dos. Devuelve `true` si se cumple y `false` si no se cumple.

- `**actualizarRangoPrecio()**`: Actualiza dinámicamente el valor del label (añadiendo el valor actual) y los valores mínimos y máximos de los inputs de precio en el formulario de filtros. Al llamar a la función, instancio los labels (`.label_precioMin` y `.label_precioMax`) y los inputs (`.input_precioMin` y `.input_precioMax`). Al principio si los inputs existen, añade los valores actuales de los inputs de tipo range al contenido (texto) de los labels. Además, añade eventos `input` a ambos inputs para:
  - Asegurar que el valor mínimo no supere al máximo y viceversa.
  - Reflejar inmediatamente el nuevo valor en su label correspondiente.

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/b07a2fda5013726fa71afe2b545ff1702aa7d386/js/script.js#L737-L759

#### Funcionalidades añadidas

- **Mostrar y ocultar filtros**
https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/b07a2fda5013726fa71afe2b545ff1702aa7d386/js/script.js#L711-L735

Muestra u oculta el apartado de filtros del buscador de servicios.

Cuando el formulario exista, inicializa el botón de filtros y la sección filtros. Después, añado un evento al botón para que cuando se interactúe con este haga una llamada a la función `mostrarFiltro(contenedor, clave)` (contenedor = sección filtros y clave = "mostrarFiltros"). La clave se utiliza para guardar en localStorage si se muestra o no el aartado de filtros. Dentro de la función, si la clave no está en localStorage (no se muestra), por lo que lo muestra y guarda en localStorage que se está mostrando. En caso de que si estuviera guardada en localStorage, se dejaría de mostrar y se elimina la clave de localStorage.


### FLUJO LIBRE (CARRITO) 

Permite añadir los servicios al carrito de compras y dentro de este eliminarlos.

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/b07a2fda5013726fa71afe2b545ff1702aa7d386/js/script.js#L762-L805

Declaro dos variables, idCarrito(id por cada servicio para el carrito), contCar(contador de servicios), objetosServicio (un array que va a contener todos los servicios con id y titulo). Todas estas variables se inicializan y obtienes sus valores mediante la función `guardarInfoId()`.

Primero (desde servicios), si existe guarda la info mediante `guardarInfoId()` y llama a `cambiarTextoBotones()` (se encarga de mantener el contenido de los botones actualizado). Después, por cada servicio, le añado un evento que se inicia por hacer click y este evento llama a `aniadirOEliminarServicios(evento)`, esta función se encargará de guardar su estado de carrito (si está o no en el carrito) y dependiendo del caso: cambia el contenido del botón de añadir al carrito y modifica `localStorage`.

Segunda (desde carrito), instancio carrito (la sección) y si existe llama a `colocarServiciosYaEnCarrito` que al reiniciar, añade los servicios añadidos anteriormente al carrito guardados en `localStorage`; y también, llama a `actualizarSubTotal()` que dependiendo de los servicios que haya en el carrito modifica el subtotal en tiempo real. Después, si el carrito tiene servicios, llama a `eliminarDelCarrito(carrito)` que se encarga de eliminar servicios del carrito que hayan recibido un evento por interactuar con el botón de eliminar servicios. 

#### Funciones utilizadas

- `**guardarInfoId()**`: Crea un objetos que almacenan la `id` y el `título` de cada servicio visible, y son añadidos a `objetosServicio`. Esto sirve para identificar fácilmente los servicios más adelante. Solo se ejecuta una vez (cuando `contCar` es 0), para evitar duplicados. También guarda en `localStorage` el número total de servicios (`numServicios`) como string, para que pueda ser consultado después desde distintas páginas.

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/b07a2fda5013726fa71afe2b545ff1702aa7d386/js/script.js#L809-L926

- `**aniadirOEliminarServicios(evento)**`: Añade o elimina un servicio del carrito al hacer clic en el botón correspondiente. Verifica si ya está en `localStorage` mediante su ID personalizada (`Carrito + id`). Si no está, guarda su HTML en el almacenamiento y cambia el botón a "Eliminar del carrito". Si ya está, lo elimina de `localStorage` y cambia el texto a "Añadir al carrito".

- `**obtenerServicioId(servicio)**`: Devuelve el ID de un servicio comparando su título con los objetos almacenados en `objetosServicio`. Se utiliza para obtener el número de Id que se utiliza en `localStorage` para almacenar los servicios en el carrito.

- `**aniadirACarrito(servicio)**`: Crea un nuevo elemento HTML con la información del servicio (título, precio, fecha e imagen) y lo añade al contenedor del carrito.

- `**cambiarTextoBotones()**`: Recorre todos los servicios visibles en la página y cambia el texto de sus botones según si están añadidos al carrito (`localStorage`) o no.

- `**eliminarDelCarrito()**`: Escucha los clics en el contenedor del carrito. Si se pulsa el botón de eliminar (`.boton_eliminar_carrito`), elimina el servicio del DOM y del `localStorage`, y luego actualiza el subtotal con `actualizarSubTotal()`.

- `**obtenerClave(titulo)**`: Busca en `localStorage` la clave asociada al servicio cuyo título coincide con el proporcionado. Se usa desde la página del carrito para identificar correctamente el elemento a eliminar.

- `**colocarServiciosYaEnCarrito()**`: Recorre los servicios guardados en `localStorage` y los inserta en el carrito al cargar la página. Permite que los servicios añadidos anteriormente persistan entre sesiones.

- `**actualizarSubTotal()**`: Calcula el total del precio de los servicios añadidos al carrito. Suma todos los precios y actualiza el valor del subtotal.





