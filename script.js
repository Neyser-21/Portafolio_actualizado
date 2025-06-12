
document.getElementById('form').addEventListener('submit', function(event) {
    const nombre = this.nombre.value.trim();
    const correo = this.correo.value.trim();
    const mensaje = this.mensaje.value.trim();

    if (!nombre || !correo || !mensaje) {
        event.preventDefault();
        alert('Por favor, rellena todos los campos.');
    }
});
