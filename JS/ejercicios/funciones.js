invitados=0
x=0
function regalo1(sobre) {
    return sobre++,invitados++
    
}

do {
    regalo = prompt('Ingrese el tipo de regalo\n 1. Sobre con dinero.\n 2. Regalo para los novios.\n 3. Bono de regalo del almacén Casa binita.\n 0. no trajo regalo.')
    switch (regalo) {
        case regalo='1':
            x=regalo1(regalo)
            console.log(x);
            break;
        case regalo='2':

            break;
        case regalo='3':

            break;
        case regalo='0':
            alert('no puede ingresar a la fiesta')
            break;

        default:
            
            break;
    }
} while (invitados < 100);