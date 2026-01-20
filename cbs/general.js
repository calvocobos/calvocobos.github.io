/* JS puro */

// Evitar animaciones durante carga inicial
document.documentElement.classList.add("js");

// Registrar carga diferida
window.addEventListener("load", () => {
  console.log("Página completamente cargada");
});

// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnoscuro");
  const html = document.documentElement;

  // Leer modo actual guardado (si existe)
  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado === "dark") {
    html.classList.add("dark");
  } else if (temaGuardado === "light") {
    html.classList.remove("dark");
  }

  // Al hacer clic, alternar modo y guardar preferencia
  btn.addEventListener("click", () => {
    html.classList.toggle("dark");

    // Guardar la preferencia del usuario
    const modoActual = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("tema", modoActual);
  });
});

/* JQUERY */

/**
 * informacion de ancho y alto de mi ventana
 */

$(document).ready(function () {
  function actualizarTamano() {
    // obtener ancho y alto de la ventana
    let ancho = $(window).width();
    let alto = $(window).height();

    // mostrarlo dentro del div
    $(".ancho").text(`w ${ancho}`);
    $(".alto").text(`h ${alto}`);
  }

  // mostrar tamaño al cargar la página
  $(document).ready(actualizarTamano);

  // actualizar cuando se redimensiona la ventana
  $(window).on("resize", actualizarTamano);
});

/**
 * para cargar el service-worker.js
 */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) =>
        console.log("✅ Service Worker registrado con éxito:", reg.scope)
      )
      .catch((err) => console.warn("❌ Error al registrar SW:", err));
  });
}


/**
 * accion de mi menu lateral
 */

$(document).ready(function () {
  // botón para mostrar/ocultar menú lateral
  $("#btnmenu").on("click", function () {
    $("#menu-lateral").stop(true, true).slideToggle(300);
  });

  // Delegación de eventos para enlaces generados dinámicamente
  $("#menu-lateral").on("click", "a", function (e) {
    // Ocultar el menú lateral después de hacer clic
    $("#menu-lateral").fadeOut();
  });
});

