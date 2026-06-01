const proyectos = [
  {
    titulo: "AirStream",
    categoria: "residencial",
    imagen: "img/cards/airmax.png",
    pagina: "airmax.html",
  },

  {
    titulo: "Relectio",
    categoria: "comercial",
    imagen: "img/cards/relectio.png",
    pagina: "relectio.html",
  },
];

function renderizarProyectos(lista) {
  const contenedor = document.querySelector("#galeria");

  contenedor.innerHTML = "";

  lista.forEach(function (proyecto) {
    contenedor.insertAdjacentHTML(
      "beforeend",

      `
<div class="col-12">

  <article class="proyecto__tarjeta">

    <div class="row g-0 align-items-stretch">

      <div class="col-12 col-lg-8">

        <div class="proyecto__contenido">

          <p class="proyecto__categoria">
            ${proyecto.categoria}
          </p>

          <h3 class="proyecto__titulo">
            ${proyecto.titulo}
          </h3>

          <a
            href="${proyecto.pagina}"
            class="proyecto__enlace">

            Ver proyecto →

          </a>

        </div>

      </div>

      <div class="col-12 col-lg-4">

        <img
          src="${proyecto.imagen}"
          alt="${proyecto.titulo}"
          class="proyecto__imagen"
        >

      </div>

    </div>

  </article>

</div>
`,
    );
  });
}
renderizarProyectos(proyectos);

const botonesFiltro = document.querySelectorAll(".filtro");
botonesFiltro.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const filtro = boton.dataset.filtro;

    if (filtro === "todos") {
      renderizarProyectos(proyectos);
    } else {
      const proyectosFiltrados = proyectos.filter(function (proyecto) {
        return proyecto.categoria === filtro;
      });

      renderizarProyectos(proyectosFiltrados);
    }
  });
});
