const boton = document.querySelector('#submit')
function constructor() {
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#ap').value
    const edad = document.querySelector('#edad').value
    const nacimiento = document.querySelector('#fn').value
    const salario = document.querySelector('#salario').value

}
boton.addEventListener('click',constructor)

let user = {
    nombre,
    apellido,
    edad,
    nacimiento,
    salario,
}
console.log(user);