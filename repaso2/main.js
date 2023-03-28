let api = 'https://jsonplaceholder.typicode.com/posts'
let targets = document.querySelector('.targets')

async function buscar() {
    let target =  null
    const response = await fetch(api)
    const data = await response.json()
    data.forEach(element => {
        if (element.id <= 20) {
            targets.innerHTML += `<div id="${element.id}" class="target">
            <h1>${element.title}</h1>
            <div>
                <p>${element.body}</p>
            </div>
        </div>`

        }
    });
    for (let index = 1; index <=20; index++) {
        target = document.getElementById(`${index}`)
        target.addEventListener('click', () => {
            localStorage.clear()
            localStorage.setItem('id', `${target.id}`)
        })
        console.log(target.id);
    }
}
window.addEventListener('load', buscar)

