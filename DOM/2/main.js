const boton = document.querySelector('#submit')
const cuerpo =document.querySelector('#cuerpo')
boton.addEventListener('click',function () {
    
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#ap').value
    const edad = document.querySelector('#edad').value
    const nacimiento = document.querySelector('#fn').value
    const salario = document.querySelector('#salario').value

    const user = {
    nombre,
    apellido,
    edad,
    nacimiento,
    salario
}
cuerpo.innerHTML+=`<div class="target">
<img src="/IMG/image-user.png" alt="">
<h3>${user.nombre}</h3>
<h3>${user.apellido}</h3>
<h3>${user.salario}</h3>
</div>`
// const t1 = document.querySelector('#t1')
// const t2 = document.querySelector('#t2')
// const t3 = document.querySelector('#t3')
// t1.innerHTML= user.nombre

document.getElementById("formulario").reset();    
})

