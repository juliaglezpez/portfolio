/*FORMULARIO*/

const formulario = document.querySelector("#formulario-contacto");

formulario.addEventListener("submit", function (evento) {
  let hayErrores = false;

  const nombre = document.querySelector("#nombre");
  const errorNombre = document.querySelector("#error-nombre");

  if (nombre.value.trim() === "") {
    errorNombre.textContent = "El nombre es obligatorio.";
    nombre.classList.add("is-invalid");
    hayErrores = true;
  } else {
    errorNombre.textContent = "";
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
  }

  const email = document.querySelector("#email");
  const errorEmail = document.querySelector("#error-email");

  if (!email.value.includes("@")) {
    errorEmail.textContent = "Introduce un email válido.";
    email.classList.add("is-invalid");
    hayErrores = true;
  } else {
    errorEmail.textContent = "";
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  }

  const mensaje = document.querySelector("#mensaje");
  const errorMensaje = document.querySelector("#error-mensaje");

  if (mensaje.value.trim() === "") {
    errorMensaje.textContent = "El mensaje es obligatorio.";
    mensaje.classList.add("is-invalid");
    hayErrores = true;
  } else {
    errorMensaje.textContent = "";
    mensaje.classList.remove("is-invalid");
    mensaje.classList.add("is-valid");
  }

  if (hayErrores) {
    evento.preventDefault();
  } else {
    evento.preventDefault();

    alert("Mensaje enviado correctamente.");
  }
});

/*ANIMACIONES*/
function inicializarAnimacionScroll() {
  const observador = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll(".animar-scroll").forEach(function (elemento) {
    observador.observe(elemento);
  });
}

inicializarAnimacionScroll();
