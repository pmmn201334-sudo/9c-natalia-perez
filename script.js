const horario = document.getElementById('horario');
const btnHorario = document.getElementById('btn-horario');
const botonColor = document.getElementById('btn-color');

btnHorario.addEventListener('click', () => {
    horario.style.display = horario.style.display === 'none' ? 'block' : 'none';
});

botonColor.addEventListener('click', () => {
    document.body.classList.toggle('modo-hacker');
});
