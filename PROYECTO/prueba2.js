let intentosFa=0

function dibujarAhorcado() {
        intentosFa+=1
        document.querySelector(`#line-${intentosFa}`).classList.add('visible');
        
        console.log('hola');
}
function removv() {
    for (let index = 0; index < intentosFa; index++) {
        document.querySelector('.dibujando').remove(".visible");
        
    }
    
    
}
        dibujarAhorcado()
        dibujarAhorcado()
        dibujarAhorcado()
        dibujarAhorcado()
        dibujarAhorcado()
        dibujarAhorcado()
        dibujarAhorcado()
        removv()

