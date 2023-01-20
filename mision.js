// En la escuela Pequeños Brocolitos, se desea registrar y calcular la nota
// de cada estudiante. Para calcular la nota definitiva de un estudiante y
// saber si aprueba, se toma en cuenta las notas de la siguiente manera:
// • El promedio de las notas de 3 Exámenes que corresponde al 55%
// • El promedio de las notas de 2 Trabajos que corresponde al 15%
// • La nota del examen final que será el 20%
// • El promedio de la nota de autoevaluación y co-evaluación realiz
// por el estudiante y el profesor respectivamente que será del 10%.
// Realice un programa que permita registrar las notas que deben estar en
// un rango de 0-5. En caso de que una de las notas, se encuentre por
// fuera de este rango, se debe mostrar un mensaje que indique error.
// Luego, debe evaluar, según la nota definitiva obtenida por el estudiante,
// e informar el nivel en el que se encuentra y si aprueba el curso.
// Para aprobar el curso la nota definitiva debe ser igual o superior a 3.
// Los niveles que los estudiantes pueden alcanzar son los siguientes:
// Evalúe los requerimientos de la situación planteada y determine las
// veriables y operaciones y condicionales requeridas para dar solución al
// mismo y escriba él código.
// Nivel Rango
// Superior 4.7 a 5.0
// Alto 4.0 a 4.6
// Básico 3.0 a 3.9
// Bajo 2.0 a 2.9
// Muy bajo 0 a 1.9


let examen1 = parseFloat(prompt('Ingrese la nota del primer examen'));
if (examen1 < 0 || examen1 > 5) {
    alert("Ingrese un valor valido")
} else {
    let examen2 = parseFloat(prompt('Ingrese la nota del segundo examen'));
    if (examen2 < 0 || examen2 > 5) {
        alert("Ingrese un valor valido")
    } else {
        let examen3 = parseFloat(prompt('Ingrese la nota del tercer examen'));
        if (examen3 < 0 || examen3 > 5) {
            alert("Ingrese un valor valido")
        } else {
            let trabajo1 = parseFloat(prompt('Ingrese la nota del primer trabajo'));
            if (trabajo1 < 0 || trabajo1 > 5) {
                alert("Ingrese un valor valido")
            } else {

                let trabajo2 = parseFloat(prompt('Ingrese la nota del segundo trabajo'));
                if (trabajo2 < 0 || trabajo2 > 5) {
                    alert("Ingrese un valor valido")
                } else {
                    let examenFinal = parseFloat(prompt('Ingrese la nota del examen final'));
                    if (examenFinal < 0 || examenFinal > 5) {
                        alert("Ingrese un valor valido")
                    } else {
                        let autoevaluación = parseFloat(prompt('Ingrese la nota de autoevaluación (estudiante)'));
                        if (autoevaluación < 0 || autoevaluación > 5) {
                            alert("Ingrese un valor valido")
                        } else {
                            let coAutoevaluacion = parseFloat(prompt('Ingrese la nota de autoevaluacion (docente)'));
                            if (coAutoevaluacion < 0 || coAutoevaluacion > 5) {
                                alert("Ingrese un valor valido")
                            } else {

                                let notaExamenes = (examen1 + examen2 + examen3) * (0.55 / 3)
                                let notaTrabajos = (trabajo1 + trabajo2) * (0.15 / 2)
                                let notaExamenFinal = examenFinal * 0.2
                                let notaAutoevaluacion = (autoevaluación + coAutoevaluacion) * (0.10 / 2)

                                definitiva = notaExamenes + notaTrabajos + notaExamenFinal + notaAutoevaluacion
                                switch (definitiva > -1) {
                                    case definitiva >= 0.0 && definitiva < 2.0:
                                        console.log('Su nota definitiva fue: ' + definitiva);
                                        console.log('Nivel: Muy bajo');
                                        console.log('Reprobado');
                                        break;
                                    case definitiva > 1.9 && definitiva < 3.0:
                                        console.log('Su nota definitiva fue: ' + definitiva);
                                        console.log('Nivel: Bajo');
                                        console.log('Reprobado');
                                        break;

                                    case definitiva > 2.9 && definitiva < 4.0:
                                        console.log('Su nota definitiva fue: ' + definitiva);
                                        console.log('Nivel: Básico');
                                        console.log('Aprobado');
                                        break;
                                    case definitiva > 3.9 && definitiva < 4.7:
                                        console.log('Su nota definitiva fue: ' + definitiva);
                                        console.log('Nivel: Alto');
                                        console.log('Aprobado');
                                        break;
                                    case definitiva > 4.6 && definitiva < 5.1:
                                        console.log('Su nota definitiva fue: ' + definitiva);
                                        console.log('Nivel: Superior');
                                        console.log('Aprobado');
                                        break;

                                    default:
                                        console.log('ERROR');
                                        break;
                                    // Superior 4.7 a 5.0
                                    // Alto 4.0 a 4.6
                                    // Básico 3.0 a 3.9
                                    // Bajo 2.0 a 2.9
                                    // Muy bajo 
                                }

                            }

                        }

                    }

                }
            }
        }
    }
}

