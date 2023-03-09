let palabras = ['perro', "hola"]
let intentosMaximos = 6;
let intentosFa = 0;
let letrasCorrectas = [];
let palabra = 0
let finDelJuego = false;

function seleccionarPalabra() {
    return palabras[Math.floor(Math.random() * palabras.length)];
}
function dibujarAhorcado() {
    document.querySelector(`#line-${intentosFa}`).classList.add('visible');
}
