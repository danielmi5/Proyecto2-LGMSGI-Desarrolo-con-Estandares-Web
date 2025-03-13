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

### Manipulación del DOM

Para la **ejecución** del script, los apartados están hecho en funciones, de forma predeterminada no se ejecutan, se tiene que pasar true como parámetro de la función (esta se encuentra justo después de la lógica de la función) para poder ejecutarla.

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
	
- **Ejemplo:** 

https://github.com/danielmi5/Proyecto2-LGMSGI-Desarrolo-con-Estandares-Web/blob/cea71c4d816daa455016fdb04265e6cd0fbb11e5/js/script.js#L234-L249
