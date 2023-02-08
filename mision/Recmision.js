let estudiante = {}
let valdidar = false
let registro = []
let opcion = 1
let cantEstudiantes = 0
let nota = 0
function validarCodigo(array, cod) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].codigo == cod) {
            alert("Codigo en uso");
            index = 0;
            prompt('ingrese el codigo del')
        }
    }
    return cod;
}
while (opcion) {
    opcion = parseInt(prompt(`Que operacion desea realizar:
    1. Ingresar numero de estudiantes
    2. registrar datos de estudiantes
    . registrar notas.`))
    switch (opcion) {
        case 1:
            if (valdidar == false) {
                cantEstudiantes = parseInt(prompt(`Cantidad de estudiantes:`))
                if (cantEstudiantes <= 0) {
                    alert('ingrese una cantidad valida')
                } else {
                    valdidar = true
                }

            } else {
                alert('no puede ingresar estudiantes por el momento')
            }
            break;
        case 2:
            if (valdidar == true) {
                for (let index = 0; index < cantEstudiantes; index++) {
                    estudiante.nombre = prompt(`nombre del estudiante`)
                    if (estudiante.nombre == "") {
                        alert('ingrese un nombre')
                    } else {

                        registro.push(estudiante.nombre)
                    }

                }
            } else {
                alert('ingrese una cantidade de estudiantes para continuar')
            }
            break;
        case 3:
            if (valdidar == true) {
                for (let i = 0; i < registro.length; i++) {

                    estudiante.nota1 = parseFloat(prompt('ingrese la primer nota'))
                    if (estudiante.nota1 < 0 || estudiante.nota1 > 100) {
                        alert('ingrese una nota valida')
                    } else {
                        registro[i].push(estudiante.nota1)
                        estudiante.nota2 = parseFloat(prompt('ingrese la segunda nota'))
                        if (estudiante.nota2 < 0 || estudiante.nota2 > 100) {
                            alert('ingrese una nota valida')
                        } else {
                            registro[i].push(estudiante.nota2)
                            estudiante.nota3 = parseFloat(prompt('ingrese la tercer nota'))
                            if (estudiante.nota3 < 0 || estudiante.nota3 > 100) {
                                alert('ingrese una nota valida')
                            } else {
                                registro[i].push(estudiante.nota3)
                                console.log(registro);
                            }
                        }
                    }
                }

            } else {
                alert('ingrese una cantidade de estudiantes para continuar')
            }
            break;
        default:
            break;
    }
}