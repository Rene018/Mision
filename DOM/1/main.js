const entradas = document.querySelector('#entrdas')
const fuertes = document.querySelector('#fuertes')
const ensaladas = document.querySelector('#ensaladas')
const postres = document.querySelector('#postres')
const bebidas = document.querySelector('#bebidas')


const info = document.querySelector('#info')
function ho() {
    info.innerHTML = '<h2>Receta del dia</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</p > <img src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">'
}
entradas.addEventListener('click', ho)
