function irPantalla(pantalla) {

    // Oculta todas las pantallas
    let screens = document.querySelectorAll(".screen");
    screens.forEach(s => s.classList.add("oculto"));

    // Muestra la pantalla seleccionada
    document.getElementById(pantalla).classList.remove("oculto");
}