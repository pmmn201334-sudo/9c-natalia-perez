const campoNota = document.getElementById('nota');
const campoPeso = document.getElementById('peso');
const btnAgregar = document.getElementById('btn-agregar');
const btnCalcular = document.getElementById('btn-calcular');
const btnReiniciar = document.getElementById('btn-reiniciar');
const lista = document.getElementById('lista-notas');
const resultado = document.getElementById('resultado');

let notas = [];

function pintar() {
    lista.innerHTML = '';

    if (notas.length === 0) {
        lista.innerHTML = '<p class="mensaje">Aún no has agregado notas.</p>';
        return;
    }

    notas.forEach((item, indice) => {
        const li = document.createElement('li');

        li.innerHTML =
            '<span class="tarea-texto">Nota <strong>' + item.nota +
            '</strong> con peso <strong>' + item.peso + '%</strong></span>' +
            '<button class="boton_2">🗑️</button>';

        li.querySelector('button').addEventListener('click', () => {
            notas.splice(indice, 1);
            pintar();
        });

        lista.appendChild(li);
    });
}

function agregar() {
    const nota = parseFloat(campoNota.value);
    const peso = parseFloat(campoPeso.value);

    if (isNaN(nota) || isNaN(peso) || nota < 0 || nota > 5 || peso <= 0) {
        return;
    }

    notas.push({ nota: nota, peso: peso });
    pintar();
    campoNota.value = '';
    campoPeso.value = '';
}

btnAgregar.addEventListener('click', agregar);

campoNota.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        agregar();
    }
});

campoPeso.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        agregar();
    }
});

btnCalcular.addEventListener('click', () => {
    if (notas.length === 0) {
        resultado.textContent = 'Agrega al menos una nota.';
        return;
    }

    const totalNotas = notas.reduce((acumulador, item) => acumulador + item.nota * item.peso, 0);
    const totalPesos = notas.reduce((acumulador, item) => acumulador + item.peso, 0);
    const promedio = totalNotas / totalPesos;

    resultado.textContent = '📊 Promedio ponderado: ' + promedio.toFixed(2);
});

btnReiniciar.addEventListener('click', () => {
    notas = [];
    pintar();
    resultado.textContent = '';
});

pintar();
