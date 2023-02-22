const cuestionario = {
    "Preguntas": [
        {
            "pregunta": "Cualquier animal o planta que se encuentre bajo amenaza de desaparecer se dice que está:",
            "respuestas": [
                "A. En peligro de extinción",
                "B. Extinto",
                "C. Protegido",
                "D. Sensible"
            ]
        },
        {
            "pregunta": "¿Cuál de los siguientes animales NO está extinto?",
            "respuestas": [
                "A. Dodo",
                "B. Mamut",
                "C. Rinocerontes Negros",
                "D. Dinosaurios"
            ]
        },
        {
            "pregunta": "El Rinoceronte Negro es una de las especies en estado crítico de extinción. Es nativo de... ",
            "respuestas": [
                "A. Norte de África",
                "B. Asia",
                "C. Suroeste y Este de África",
                "D. Australia"
            ]
        },
        {
            "pregunta": "El tigre tambien se encuentra en peligro de extinción. ¿Cuál es su nombre científico?",
            "respuestas": [
                "A. Tigrus",
                "B. Tigris",
                "C. Panthera tigris",
                "D. Panthera uncia"
            ]
        },
        {
            "pregunta": "Hormiga dinosaurio y serpiente de arrecife Sahul están en peligro. ¿Dónde viven estos animales?",
            "respuestas": [
                "A. Asia",
                "B. África",
                "C. Australia",
                "D. Sudamérica y África"
            ]
        }
    ]
}
var cont=0
let $elt1 = document.querySelector('#elt1')
let $elt2 = document.querySelector('#elt2')
let $elt3 = document.querySelector('#elt3')
let $elt4 = document.querySelector('#elt4')
let $elt5 = document.querySelector('#elt5')

// function mostrarPregunta(a1,op) {
//     $elt1.innerHTML=pregunta
//     $elt2.innerHTML= respuestas[0]
//     $elt3.innerHTML= respuestas[1]
//     $elt4.innerHTML= respuestas[2]
//     $elt5.innerHTML= respuestas[3]
//     a1=a1
//     op.addEventListener('click',function () {
        
//      a1+=1
//     })
// }
function validarRespuesta(round) {
    switch (round) {
        case 0:
            
            break;
    
        default:
            break;
    }
}



for (let ronda = 0; ronda < cuestionario.Preguntas.length; ronda++) {
    const { pregunta } = cuestionario.Preguntas[ronda]
    const { respuestas } = cuestionario.Preguntas[ronda]

    switch (ronda) {
        case 0:
                $elt2.innerHTML= respuestas[0]
               $elt3.innerHTML= respuestas[1]
                $elt4.innerHTML= respuestas[2]
                $elt5.innerHTML= respuestas[3]
                $elt2.addEventListener('click',function () {
                console.log('correct');

            })
            break;
    
        default:
            break;
    }


}
// $elt1.classList.add('bg-sky-700');$elt1.innerHTML=pregunta
