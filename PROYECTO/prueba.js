let palabras = ['perro', 'luna']
let intentosMaximos = 8;
let intentosFa = 0;
let letrasCorrectas = [];
let letrasIncorrectas = []
let numero = 0
let palabra = seleccionarPalabra()
let finDelJuego = false;



function seleccionarPalabra() {
    numero = Math.floor(Math.random() * palabras.length)
    return palabras[numero];
}
function dibujarAhorcado() {
    if (intentosFa <intentosMaximos) {
        document.querySelector(`#line-${intentosFa}`).classList.add('visible');
        console.log('hola');
    }
}
function recorrerPalabra(letra) {
    if ((letrasCorrectas.includes(letra)) || (letrasIncorrectas.includes(letra))) {

    } else {
        for (let index = 0; index < palabra.length; index++) {
            const element = palabra[index];
            if (element == letra) {
                letrasCorrectas.push(element)
            } else {
                if (!letrasIncorrectas.includes(letra) && !palabra.includes(letra)) {
                    letrasIncorrectas.push(letra)
                    intentosFa += 1
                }

            }

        }
        console.log(letrasCorrectas);
        console.log(letrasIncorrectas);
    }

}
function removv() {
    document.querySelector('.dibujando').classList.remove(".visible");
    
}
function validarIntento() {
    if (letrasCorrectas.length == palabra.length || (intentosFa>=intentosMaximos)) {
        removv()
        finDelJuego = true
        palabras.splice(numero, 1)
        console.log(palabras);
        palabra = seleccionarPalabra()
        intentosMaximos = 7;
        intentosFa = 0;
        letrasCorrectas = [];
        letrasIncorrectas = []
        

    }
}


document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        var $entrada = document.getElementById("entrada").value;
        recorrerPalabra($entrada)
        validarIntento()
        dibujarAhorcado()
        console.log(intentosFa);


        document.getElementById("formulario").reset();
    }
});