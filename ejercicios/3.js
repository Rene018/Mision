let usuario= new Object();
let opcion=1

let datos=[]
do {
    opcion= parseInt(prompt(`Que operacion desea realizar:
    1. Ingresar usuario.
    2. Mostrar usuarios.
    0. Salir.`))

    switch (opcion) {
        case 1:
            usuario={
                nombre:parseInt(prompt('Ingrese el nombre')),
                usuario:parseInt(prompt('Ingrese el usuario')),
                contrasena:parseInt(prompt('Ingrese la contraseña')),
            }
            datos.push(usuario)
            usuario={}
            break;
        case 2:
            console.log(datos);
            break;
        case 0:
            
            break;
        default:
            alert('Ingrese un valor valido')
            break;
    }
} while (opcion!=0);