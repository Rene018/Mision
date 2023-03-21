const nomre =document.querySelector('#nombre')
const apellido =document.querySelector('#ap')
const edad =document.querySelector('#ed')
const btn =document.querySelector('#btn')
const container=document.querySelector('#container')
btn.addEventListener('click',()=>{
    const obj={
        nombre:nomre.vaule,
        apellido:apellido.vaule,
        edad:edad.vaule
    }
    container.innerHTML=`<p>Nombre: Rene</p>
    <p>Apellidos: Villazon</p>
    <p>Edad: 17</p>`

})




