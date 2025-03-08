document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulario__form');
    const inputs = form.querySelectorAll('input, textarea');

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
            mensaje.remove();
        }, 2000);

    }

    function mostrarMensajeError(texto) {
        const mensaje = document.createElement('div');
        mensaje.className = 'mensaje-error';
        mensaje.textContent = texto;
        form.appendChild(mensaje);

        setTimeout(() => {
            mensaje.remove();
        }, 2000);

    }

    let errorMostrado = false;
    inputs.forEach(function(it) {
        // Evento 'input' para resetear el mensaje de error y la validez personalizada
        it.addEventListener('input', function(e) {
            // Resetea el mensaje de error cuando el usuario empieza a escribir
            it.setCustomValidity('');

            errorMostrado = false;
        });

        // Si el campo es válido, elimina el mensaje personalizado
        if (it.checkValidity()) {
            it.setCustomValidity('');
        } else {
            // Evento 'invalid' (se dispara cuando el campo no es válido)
            it.addEventListener('invalid', function(e) {
                let mensajeError = false;

                switch (it.className) {
                    case 'nombre':
                        it.setCustomValidity('El nombre es obligatorio y no puede estar vacío.');
                        mensajeError = true;
                        break;
                    case 'email':
                        it.setCustomValidity('Por favor, introduce un correo electrónico válido.');
                        mensajeError = true;;
                        break;
                    case 'fecha':
                        it.setCustomValidity('Por favor, introduce una fecha válida.');
                        mensajeError = true;                        break;
                    case 'radio':
                        // Validamos si al menos un radio button está seleccionado
                        const radios = document.querySelectorAll('.radio');

                        //Esto es para obtener si alguna de las dos opciones ha sido seleccionada
                        const radioSeleccionado = Array.from(radios).some(radio => radio.checked);

                        if (!radioSeleccionado) {
                            it.setCustomValidity('Por favor, selecciona una opción.');
                            mensajeError = true;                        } else {
                            it.setCustomValidity(''); // Si está seleccionado, reseteamos cualquier error
                        }
                        break;
                    case 'telf':
                        // Asegúrate de que el teléfono tiene una validación que se active
                        it.setCustomValidity('Por favor, introduce un número de teléfono válido.');
                        mensajeError = true;
                        break;
                    case 'asunto':
                        it.setCustomValidity('El asunto es obligatorio y no puede estar vacío.');
                        mensajeError = true;
                        break;
                    case 'mensaje':
                        it.setCustomValidity('El mensaje es obligatorio y no puede estar vacío.');
                        mensajeError = true;
                        break;
                    case 'check':
                        it.setCustomValidity('Por favor, marca la checkbox. Es obligatorio.');
                        mensajeError = true;
                        break;
                }

                // Si hubo un error y no se ha mostrado, muestra el mensaje de error
                if (mensajeError && !errorMostrado) {
                    mostrarMensajeError('ERROR -> Campos erróneos.');
                    errorMostrado = true;
                }
            });
        }
    });
});

