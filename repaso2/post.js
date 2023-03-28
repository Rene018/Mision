let id= localStorage.getItem('id')
let api = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
let coment = document.querySelector('.coment')
async function buscar() {

    const response = await fetch(api)
    const data = await response.json()
    data.forEach(element => {
        console.log(element);
    });

}

buscar()