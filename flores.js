const FLORES = ['🌸', '🌷', '💮', '🌺'];
const POSICIONES = ['flor-1', 'flor-2', 'flor-3', 'flor-4'];

POSICIONES.forEach((posicion, indice) => {
    const flor = document.createElement('span');
    flor.className = 'flor ' + posicion;
    flor.textContent = FLORES[indice];
    document.body.appendChild(flor);
});
