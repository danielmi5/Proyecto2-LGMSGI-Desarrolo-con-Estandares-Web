document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulario__form');

    // Verifica si el formulario fue enviado antes y muestra el mensaje
    if (localStorage.getItem('formularioEnviado') === 'true') {
        mostrarMensajeExito('¡Formulario enviado con éxito!');
        localStorage.removeItem('formularioEnviado'); // Borra el estado
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío inmediato del formulario
        mostrarMensajeExito('Enviando formulario...');

        // Guarda en localStorage que el formulario se enviará
        localStorage.setItem('formularioEnviado', 'true');

        setTimeout(() => {
            form.submit(); // Envía el formulario después de 1,5 segundos
        }, 1500);

    });

    function mostrarMensajeExito(texto) {
        const mensaje = document.createElement('div');
        mensaje.className = 'mensaje-exito';
        mensaje.textContent = texto;
        form.appendChild(mensaje);

        setTimeout(() => {
            mensaje.remove(); // Elimina el mensaje después de 2 segundos
        }, 2000);

    }
});
/*
const inputNombre = document.getElementsByClassName('nombre')
const inputFecha = document.getElementsByClassName('fecha')
const inputNombre = document.getElementsByClassName('nombre')
const inputNombre = document.getElementsByClassName('nombre')
const inputNombre = document.getElementsByClassName('nombre')
const inputNombre = document.getElementsByClassName('nombre')
*/
