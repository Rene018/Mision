let listadoEstudiantes = []
let infoEstudiante = {
    nombre: ' ',
    codigo: 1,
    nivel: ' ',
    nota1: 1,
    nota2: 1,
    nota3: 1
}
aprOrepro= " "
let opNivel = " "
var opCodigo = " "
let nota = 0
var cantEstudiantes = 0
var cont = 0
let opcionMenu1 = 1
let opcionMenu2 = 1
let menu = 1
let promedio=0
while (opcionMenu1 != 0) {
    opcionMenu1 = parseInt(prompt(`Que operacion desea realizar:
    1. definir cantidad de estudiantes.
    2. registrar datos de estudiantes.
    3. mostrar listado de estudiantes.
    4. registrar notas de estudiantes.
    5. imprimir notas de estudiantes.
    0. Salir.`))

    switch (opcionMenu1) {
        case 1:
            cantEstudiantes = parseInt(prompt('Ingrese la cantidad de estudiantes'))
            break;
        case 2:
            while (opcionMenu2 != 0) {
                opcionMenu2 = parseInt(prompt(`desea agregar datos:
                1. Si.
                0. No.`))
                switch (opcionMenu2) {
                    case 1:
                        if (cont == cantEstudiantes) {
                            alert('ha llegado al maximo de estudiantes permitidos.')
                        } else {

                            infoEstudiante.nombre = prompt('ingrese el nombre del estudiante')
                            while (infoEstudiante.nivel == ' ') {
                                opNivel = parseFloat(prompt(`Ingrese el nivel del estudiante:
                                1. Beginner.
                                2. Junior.
                                3. Senior.`))
                                switch (opNivel) {
                                    case 1:
                                        infoEstudiante.nivel = "Beginner"

                                        break;
                                    case 2:
                                        infoEstudiante.nivel = "Junior"
                                        break;
                                    case 3:
                                        infoEstudiante.nivel = "Senior"
                                        break;
                                    case 0:
                                        break;
                                    default:
                                        alert('Ingrese una opcion valida')
                                        break;
                                }
                            }
                            console.log(infoEstudiante.nivel);
                            while (infoEstudiante.codigo == 1) {
                                opCodigo = prompt(' ingrese el codigo del estudiante')
                                if (listadoEstudiantes.length < 1) {
                                    infoEstudiante.codigo = opCodigo
                                } else {
                                    listadoEstudiantes.forEach(element => {
                                        if (element.codigo.includes(opCodigo)) {
                                            alert('Este codigo ya esta en uso')
                                        } else {
                                            infoEstudiante.codigo = opCodigo
                                        }

                                    });
                                }



                            }


                            listadoEstudiantes.push(infoEstudiante)
                            infoEstudiante = {}
                            cont += 1
                        }
                        break;
                    case 0:
                        break
                    default:
                        alert('Ingrese una opcion valida')
                        break;
                }
            }
            break;
        case 3:
            listadoEstudiantes.forEach(element => {
                console.log(`
            Nombre: ${element.nombre}
            Codigo: ${element.codigo}
            Nivel: ${element.nivel}`);
            });

            break;
        case 4:
            opCodigo = prompt(' ingrese el codigo del estudiante')
            listadoEstudiantes.forEach(element => {
                if (element.codigo.includes(opCodigo)) {
                    while (nota != infoEstudiante.nota1) {
                        nota = parseFloat(prompt('ingrese la primer nota'))
                        if (nota < 0 || nota > 5) {
                            alert('ingrese una nota valida')
                        } else {
                            listadoEstudiantes.forEach(element => {
                                element.nota1.replace(1,nota)
                            });
                            
                        }
                    }
                    while (nota != infoEstudiante.nota2) {
                        nota = parseFloat(prompt('ingrese la segunda nota'))
                        if (nota < 0 || nota > 5) {
                            alert('ingrese una nota valida')
                        } else {
                            listadoEstudiantes.forEach(element => {
                                element.nota2.replace(1,nota)
                            });                            
                        }
                    }
                    while (nota != infoEstudiante.nota2) {
                        nota = parseFloat(prompt('ingrese la tercer nota'))
                        if (nota < 0 || nota > 5) {
                            alert('ingrese una nota valida')
                        } else {
                            listadoEstudiantes.forEach(element => {
                                element.nota3.replace(1,nota)
                            });
                        }
                    }
                } else {
                    alert('el codigo no esta registrado')
                }
            });

            break;
        case 5:
            
            listadoEstudiantes.forEach(element => {
               promedio= (element.nota1+element.nota2+element.nota3)/3
               if (promedio>=3.5) {
                aprOrepro="aprobo"
               } else {
                aprOrepro="reprobo"
               }
               console.log(
              `Nombre: ${element.nombre}
               Codigo: ${element.codigo}
               Nivel: ${element.nivel}
               promedio: ${promedio}
               ${aprOrepro}
               `); 
            });
            break;
        default:
            alert('ingrese una opcion valida')
            break;
    }
}