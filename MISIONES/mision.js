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
                        let autoevaluacion = parseFloat(prompt('Ingrese la nota de autoevaluación (estudiante)'));
                        if (autoevaluacion < 0 || autoevaluacion > 5) {
                            alert("Ingrese un valor valido")
                        } else {
                            let coAutoevaluacion = parseFloat(prompt('Ingrese la nota de autoevaluacion (docente)'));
                            if (coAutoevaluacion < 0 || coAutoevaluacion > 5) {
                                alert("Ingrese un valor valido")
                            } else {

                                let notaExamenes = (examen1 + examen2 + examen3) * (0.55 / 3)
                                let notaTrabajos = (trabajo1 + trabajo2) * (0.15 / 2)
                                let notaExamenFinal = examenFinal * 0.2
                                let notaAutoevaluacion = (autoevaluacion + coAutoevaluacion) * (0.10 / 2)

                                definitiva = notaExamenes + notaTrabajos + notaExamenFinal + notaAutoevaluacion
                                switch (definitiva > -1) {
                                    case definitiva >= 0.0 && definitiva < 2.0:
                                        console.log('Su nota definitiva fue: ' + definitiva.toFixed(2));
                                        console.log('Nivel: Muy bajo');
                                        console.log('Reprobado');
                                        break;
                                    case definitiva > 1.9 && definitiva < 3.0:
                                        console.log('Su nota definitiva fue: ' + definitiva.toFixed(2));
                                        console.log('Nivel: Bajo');
                                        console.log('Reprobado');
                                        break;

                                    case definitiva > 2.9 && definitiva < 4.0:
                                        console.log('Su nota definitiva fue: ' + definitiva.toFixed(2));
                                        console.log('Nivel: Básico');
                                        console.log('Aprobado');
                                        break;
                                    case definitiva > 3.9 && definitiva < 4.7:
                                        console.log('Su nota definitiva fue: ' + definitiva.toFixed(2));
                                        console.log('Nivel: Alto');
                                        console.log('Aprobado');
                                        break;
                                    case definitiva > 4.6 && definitiva < 5.1:
                                        console.log('Su nota definitiva fue: ' + definitiva.toFixed(2));
                                        console.log('Nivel: Superior');
                                        console.log('Aprobado');
                                        break;

                                    default:
                                        console.log('ERROR');
                                        break;

                                }

                            }

                        }

                    }

                }
            }
        }
    }
}

