var estudiante = new Object();
contPromedio=0
let cantEstudiantes = parseInt(prompt("ingrese la cantidad de studiantes"))
for (let i = 0; i < cantEstudiantes; i++) {

    estudiante= {
        nombre: prompt("nombre"),
        edad: parseInt(prompt("edad")),
        nota: parseInt(prompt("nota"))
    }
    contPromedio+=estudiante.nota
    console.log(estudiante);
    
}
promedio=contPromedio/cantEstudiantes

console.log('El promedio',promedio);