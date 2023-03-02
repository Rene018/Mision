let api = 'https://pokeapi.co/api/v2/pokemon/'
let $buscar = document.querySelector('#buscar1')
let $container = document.querySelector('#container')
let $poke = document.querySelector('#poke')


async function buscar() {
    const response = await fetch(api+$poke.value)
    const data= await response.json()
    // let {front_default}= data.sprites
    let {front_default}=data.sprites.other.home
    $container.innerHTML= `<img src="${front_default}">`
    console.log(data.sprites);
}
$buscar.addEventListener('click', buscar)