let opcion = 1
var empleados = [];
var empleado = new Object();

// while (opcion!=0) {
//     opcion= parseInt(prompt(`Que operacion desea realizar:
//     1. Ingresar usuario.
//     2. Mostrar usuarios.
//     0. Salir.`))
//     switch (opcion) {
//         case 1:
//             empleado={
//                 nombre:prompt('Ingrese el nombre'),
//                 usuario:prompt('Ingrese el usuario'),
//                 contrasena:prompt('Ingrese la contraseña')
//             }
//             empleados.push(empleado)
//             empleado={}
//             break;
//         case 2:
//             console.log(empleados);
//             break;
//         default:
//             break;
//     }

// }

empleado = {
    nombre: prompt('Ingrese el nombre'),
    usuario: prompt('Ingrese el usuario'),
    contrasena: prompt('Ingrese la contraseña')
}
empleados.push(empleado)
empleado = {}

            console.log(empleados);