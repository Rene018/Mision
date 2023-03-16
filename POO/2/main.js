const boton = document.querySelector('#btn')
let arr = []
class Persona {
    nombre
    apellido
    fn
    cedula
    constructor(nombre, apellido, fn, cedula) {
        this.nombre = nombre
        this.apellido = apellido
        this.fn = fn
        this.cedula = cedula
    }

    IMC() {
        const imc = (this.apellido / (this.estatura ** 2)).toFixed(2)
        return imc
    }

    info() {
        return `Nombre: ${this.nombre}
Cedula: ${this.cedula}`
    }

    edad() {
        let comp = this.fn.replaceAll('-', "")
        return Math.floor((20230316 - comp) / 10000)
    }
}

function validar(arg) {
    
}
    

boton.addEventListener('click', function () {

    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#ap').value
    const nacimiento = document.querySelector('#fn').value
    const cc = document.querySelector('#cc').value
    const persona = new Persona(nombre, apellido, nacimiento, cc)
    
    arr.push(persona)
    arr.forEach(element => {
        console.log(`
NOMBRE: ${element.nombre}
APELLIDOS: ${element.apellido}
F.N: ${element.fn}
EDAD: ${element.edad()}
CEDULA: ${element.cedula}`);
    });

    document.getElementById("formulario").reset();
})
