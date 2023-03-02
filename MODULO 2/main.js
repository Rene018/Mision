let api = 'https://pokeapi.co/api/v2/pokemon/'
let $buscar = document.querySelector('#buscar1')
let $container = document.querySelector('#container')
let $poke = document.querySelector('#poke')


async function buscar() {
    const response = await fetch(api+$poke.value)
    const data= await response.json()
    let {front_default}=data.sprites.other.home
    let {name}= data.types[0].type
    $container.innerHTML= `<div><h1>${data.name}</h1></div>
    <img src="${front_default}">
    <div><h1>${name}</h1></div>`
    console.log(data.sprites);
}
$buscar.addEventListener('click', buscar)