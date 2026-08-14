const inputTarea = document.getElementById('nueva-tarea');
const btnAgregar = document.getElementById('btn-agregar');
const lista = document.getElementById('lista-tareas');

let tareas = JSON.parse(localStorage.getItem('academia_tareas')) || [];

function guardar() {
    localStorage.setItem('academia_tareas', JSON.stringify(tareas));
}

function pintar() {
    lista.innerHTML = '';

    if (tareas.length === 0) {
        lista.innerHTML = '<p class="mensaje">No hay misiones pendientes.</p>';
        return;
    }

    tareas.forEach((tarea, indice) => {
        const li = document.createElement('li');

        if (tarea.hecha) {
            li.classList.add('hecha');
        }

        li.innerHTML =
            '<span class="tarea-texto">' + tarea.texto + '</span>' +
            '<input type="checkbox" ' + (tarea.hecha ? 'checked' : '') + '>' +
            '<button class="boton_2">🗑️</button>';

        li.querySelector('input').addEventListener('change', () => {
            tareas[indice].hecha = !tareas[indice].hecha;
            guardar();
            pintar();
        });

        li.querySelector('button').addEventListener('click', () => {
            tareas.splice(indice, 1);
            guardar();
            pintar();
        });

        lista.appendChild(li);
    });
}

function agregar() {
    const texto = inputTarea.value.trim();

    if (!texto) {
        return;
    }

    tareas.push({ texto: texto, hecha: false });
    guardar();
    pintar();
    inputTarea.value = '';
}

btnAgregar.addEventListener('click', agregar);

inputTarea.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        agregar();
    }
});

pintar();
