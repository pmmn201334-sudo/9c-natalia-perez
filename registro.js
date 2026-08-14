const formulario = document.getElementById('form-registro');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const clave = document.getElementById('password').value;

    if (!nombre) {
        return;
    }

    localStorage.setItem('academia_nombre', nombre);
    localStorage.setItem('academia_clave', clave);

    window.location.href = 'menu.html';
});
