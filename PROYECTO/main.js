let palabras = ['abdomen', 'oreja', 'cabello', 'bigote', 'barba', 'cuello', 'hueso', 'familia', 'abuelo', 'especie', 'naturaleza', 'gallina']
let intentosMaximos = 6;
let intentos = intentosMaximos;
let letrasCorrectas = [];
let palabra = seleccionarPalabra();
let finDelJuego = false;

function seleccionarPalabra() {
    return palabras[Math.floor(Math.random() * palabras.length)];
  }
function dibujarAhorcado() {
    document.querySelector(`#line-${intentos}`).classList.add('visible');
}


document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        var $entrada = document.getElementById("entrada").value;
        document.getElementById("formulario").reset();
    }
});
