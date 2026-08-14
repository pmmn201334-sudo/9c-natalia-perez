const saludo = document.getElementById('saludo');
const nombre = localStorage.getItem('academia_nombre') || 'Cadete';

saludo.textContent = '¡Bienvenido, ' + nombre + '!';

document.getElementById('btn-salir').addEventListener('click', () => {
    localStorage.removeItem('academia_nombre');
    window.location.href = 'index.html';
});
