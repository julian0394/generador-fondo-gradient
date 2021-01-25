var fondo = document.querySelector("body");         // Selecciono el body para manipular el fondo.
var h3 = document.querySelector("h3");              // Selecciono el h3 para manipular el texto con los colores.
var color1 = document.querySelector(".color1");     // Selecciono el control de color 1.
var color2 = document.querySelector(".color2");     // Selecciono el control de color 2.

color1.addEventListener("input", cambiarFondo);
color2.addEventListener("input", cambiarFondo);

//Cambia el color del fondo por el del color elegido
function cambiarFondo() {
    fondo.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    crearCss();
}

//Cambia el texto con el del color elegido
function crearCss() {
    h3.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value});`;
}
