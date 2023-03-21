const boton = document.querySelector('#btn')
const espacio = document.querySelector('.elt')
const btn = document.querySelector('#btn-buscar')
const ipnB = document.querySelector('#inpt-buscar')
let personas = []
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
        return `${this.nombre} ${this.apellido}`
    }

    edad() {
        let comp = this.fn.split('-',)
        let year1 = comp[0]
        let mes1 = comp[1].replace('0', "")
        let dia1 = comp[2]
        let com = parseInt(`${year1}${mes1}${dia1}`)
        let hoy = new Date()
        let year2 = hoy.getFullYear()
        let mes2 = hoy.getMonth() + 1
        let dia2 = hoy.getDate()
        let fa = parseInt(`${year2}${mes2}${dia2}`)
        return Math.floor((fa - com) / 1000)
    }

    cumpleanos() {
        let comp = this.fn.split('-',)
        let mes1 = comp[1].replace('0', "")
        let dia1 = comp[2]
        let com = parseInt(`${mes1}${dia1}`)
        let hoy = new Date()
        let mes2 = hoy.getMonth() + 1
        let dia2 = hoy.getDate()
        let fa = parseInt(`${mes2}${dia2}`)
        if (fa == com) {
            return 'si'
        } else {
            return 'no'
        }
    }
}
boton.addEventListener('click', function (e) {
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#ap').value
    const nacimiento = document.querySelector('#fn').value
    const cc = document.querySelector('#cc').value

    if (nombre == "" || apellido == "" || nacimiento == "" || cc == "") {
        console.log('hola');
    } else {
        const persona = new Persona(nombre, apellido, nacimiento, cc)
        personas.push(persona)
        document.getElementById("formulario").reset();
    }
    relenar()

})
btn.addEventListener('click', function (e) {
    e.preventDefault()
    localStorage.clear()
    for (let index = 0; index < personas.length; index++) {
        const element = personas[index];
        if(element.cedula==ipnB.value){
            localStorage.setItem('personag', JSON.stringify(element))
        }
    }
    window.open('http://127.0.0.1:5500/POO/2/cumple/index.html');
    document.getElementById("form-header").reset();
})

function relenar() {
    espacio.innerHTML = ""
    personas.forEach(element => {
        espacio.innerHTML += `<tr>
<td>${element.info()}</td>
<td>${element.cumpleanos()}</td>
</tr>`});
}

