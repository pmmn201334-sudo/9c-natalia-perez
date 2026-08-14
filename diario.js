const formulario = document.getElementById('form-diario');
const lista = document.getElementById('lista-diario');
const campoFecha = document.getElementById('fecha');

let entradas = JSON.parse(localStorage.getItem('academia_diario')) || [];

function hoy() {
    return new Date().toISOString().slice(0, 10);
}

function guardar() {
    localStorage.setItem('academia_diario', JSON.stringify(entradas));
}

function pintar() {
    lista.innerHTML = '';

    if (entradas.length === 0) {
        lista.innerHTML = '<p class="mensaje">Aún no hay aventuras registradas.</p>';
        return;
    }

    entradas.forEach((entrada, indice) => {
        const div = document.createElement('div');
        div.className = 'entrada';

        div.innerHTML =
            '<h3>' + entrada.titulo + '</h3>' +
            '<p class="fecha">📅 ' + entrada.fecha + '</p>' +
            '<p>' + entrada.texto + '</p>' +
            '<div class="botones_1">' +
                '<button class="boton_2">🗑️ Borrar</button>' +
            '</div>';

        div.querySelector('button').addEventListener('click', () => {
            entradas.splice(indice, 1);
            guardar();
            pintar();
        });

        lista.appendChild(div);
    });
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const titulo = document.getElementById('titulo').value.trim();
    const texto = document.getElementById('texto').value.trim();

    if (!titulo || !texto) {
        return;
    }

    entradas.push({
        titulo: titulo,
        fecha: campoFecha.value || hoy(),
        texto: texto
    });

    guardar();
    pintar();
    formulario.reset();
    campoFecha.value = hoy();
});

campoFecha.value = hoy();
pintar();
