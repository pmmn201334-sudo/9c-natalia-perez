const SIMBOLOS = ['🌸', '🌷', '🌺', '💮', '⭐', '✨'];

const tablero = document.getElementById('tablero');
const mensaje = document.getElementById('mensaje');
const btnReiniciar = document.getElementById('btn-reiniciar');

let primeras = [];
let bloqueado = false;
let paresEncontrados = 0;

function mezclar(lista) {
    return lista.slice().sort(() => Math.random() - 0.5);
}

function iniciar() {
    tablero.innerHTML = '';
    primeras = [];
    bloqueado = false;
    paresEncontrados = 0;
    mensaje.textContent = '';

    const simbolos = mezclar([...SIMBOLOS, ...SIMBOLOS]);

    simbolos.forEach((simbolo) => {
        const boton = document.createElement('button');
        boton.className = 'carta';
        boton.dataset.simbolo = simbolo;
        boton.addEventListener('click', () => voltear(boton));
        tablero.appendChild(boton);
    });
}

function voltear(boton) {
    if (bloqueado ||
        boton.classList.contains('volteada') ||
        boton.classList.contains('encontrada')) {
        return;
    }

    boton.textContent = boton.dataset.simbolo;
    boton.classList.add('volteada');
    primeras.push(boton);

    if (primeras.length === 2) {
        bloqueado = true;

        setTimeout(() => {
            const a = primeras[0];
            const b = primeras[1];

            if (a.dataset.simbolo === b.dataset.simbolo) {
                a.classList.add('encontrada');
                b.classList.add('encontrada');
                paresEncontrados++;

                if (paresEncontrados === SIMBOLOS.length) {
                    mensaje.textContent = '🎉 ¡Jardín encendido! Todo vuelve a brillar.';
                }
            } else {
                a.textContent = '';
                b.textContent = '';
                a.classList.remove('volteada');
                b.classList.remove('volteada');
            }

            primeras = [];
            bloqueado = false;
        }, 700);
    }
}

btnReiniciar.addEventListener('click', iniciar);

iniciar();
