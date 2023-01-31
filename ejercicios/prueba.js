// 3.	Se desea llenar una lista con 20 animales, y le han pedido a usted que sabe
//  programar que les ayude para solicitar esos 20 animaless,
//  mostrarlos ordenados alfabéticamente, Luego solicitar al usuario un número entre el 1 y el 20 y que le
//  permita ver cuales animales se encuentra entre el número dicho 
// y el final de la lista. También cree una opción que permita al usuario escribir el 
// animales de un animal y verificar si ese animal se encuentra en la lista
let opcion=1
let animales=" "
let arr=[]
let removed
let aRemover
while (opcion!=0) {
    opcion=parseInt(prompt(`Ingrese la operacion que desea realizar:
    1. Ingresar animales.
    2. Listar animales.
    3. Verificar animales.
    0. Salir.`))
    switch (opcion) {
        case 1:
            for (let i = 0; i <=5; i++) {
                animales=prompt('Ingrese el animales del animal')
                arr.push(animales)
            }
            console.log(arr.sort());
            break;
        case 2:
            aRemover=prompt('Ingrese el animales del animal')
            removed= arr.splice(0,aRemover)
            console.log(removed);
            break;        
        case 3:
            
            break;
        default:
            break;
    }
}


// const{stats}=poke
// const[,,,...rest]=stats
// rest.forEach((element) => {
    
// console.log(`animales: ${element.stat.name}
// Valor base: ${element.base_stat}`);
// })
// // const arr=[1,2,3,4,5,6]

// // const []=arr
// // console.log();