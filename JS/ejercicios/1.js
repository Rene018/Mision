function operacion(a, b, termino) {
    switch (termino) {
        case 1:
            return a + b

        case 2:
            return a - b

        case 3:
            return a / b

        case 4:
            return a * b

        case 5:
            return Math.pow(a, b)

        case 6:
            return Math.sqrt(a)


        default:

            break;
    }
}

function datos() {
    if (opcion != 6) {
        let numero1 = parseInt(prompt("Ingrese el primer numero"))
        if (!isNaN(numero1)) {

            let numero2 = parseInt(prompt("Ingrese el segundo numero"))
            if (!isNaN(numero2)) {

                console.log('el resultado es: ', operacion(numero1, numero2, opcion));

            }
            else {
                alert("ingrese un numero")
            }
        } else {
            alert('ingrese un numero')
        }
    } else {
        let numero1 = parseInt(prompt("Ingrese el radicando"))
        if (!isNaN(numero1)) {

            console.log('el resultado es: ', operacion(numero1, 0, opcion));

        }
        else {
            alert("ingrese un numero")
        }


    }
}
var opcion = 0


do {
    opcion = parseInt(prompt(`Ingrese la operacion que desea realizar: 
    1. Sumar 2 numeros. 
    2. Restar 3 numeros.
    3. Dividir 2 numeros.
    4. Multiplicar 2 numeros.
    5. Potencia de 2 numeros. 
    6. Raíz cuadrada de un numero. 
    0. Salir de la calculadora.`))

    if ((opcion < 0 || opcion > 6) || isNaN(opcion)) {
        alert('NO VALIDO')
    } else {
        switch (opcion) {
            case 1:
                datos()
                break;
            case 2:
                datos()
                break;
            case 3:
                datos()
                break;
            case 4:
                datos()
                break;
            case 5:
                datos()
                break;
            case 6:
                datos()
                break;

            default:
                break;
        }
    }
} while (opcion != 0);