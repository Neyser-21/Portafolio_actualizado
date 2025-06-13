
const form = document.getElementById('form');
const responseMessage = document.getElementById('form-response');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = form.nombre.value.trim();
  const correo = form.correo.value.trim();
  const mensaje = form.mensaje.value.trim();

  if (!nombre || !correo || !mensaje) {
    alert('Por favor, rellena todos los campos.');
    return;
  }

  const formData = new FormData(form);

  try {
    const res = await fetch('https://formsubmit.co/ajax/neyserrivas82@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    });

    if (res.ok) {
      responseMessage.textContent = "✅ Mensaje enviado con éxito.";
      responseMessage.classList.remove('hidden');
      form.reset();
    } else {
      responseMessage.textContent = "❌ Hubo un error al enviar el mensaje.";
      responseMessage.classList.remove('hidden');
    }
  } catch (error) {
    responseMessage.textContent = "❌ Error de conexión.";
    responseMessage.classList.remove('hidden');
  }
});
