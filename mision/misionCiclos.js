let opcion = 1
var marcaIngresada = 1; var cantidadIngresada = 0
var marcaVendida = 1; var cantidadVendida = 0
let samsung = 0; let precioSamsung = 1000000; var totalSamsVendidos = 0
let iphone = 0; let precioIphone = 9000000; var totalIphoneVendidos = 0
let xiaomi = 0; let precioXiaomi = 700000; var totalXiaomiVendidos = 0
let motorola = 0; let precioMotorola = 900000; var totalMotoVendidos = 0
let huawei = 0; let precioHuawei = 550000; var totalHuaweiVendidos = 0
let oppo = 0; let precioOppo = 460000; var totalOppoVendidos = 0
while (opcion != 0) {
    opcion = parseInt(prompt(`Que operacion desea realizar:
    1. Ingresar inventario.
    2. Mostar inventario
    3. Realizar venta.
    4. Mostar dinero recaudado.
    0. Salir.`))
    switch (opcion) {
        case 1:
            while (marcaIngresada != 0) {
                marcaIngresada = parseInt(prompt(`Que marca desea ingresar:
            1. Samsung.
            2. iPhone.
            3. Xiaomi.
            4. Motorola.
            5. Huawei.
            6. OPPO.
            0. Salir.`))
                switch (marcaIngresada) {
                    case 1:
                        cantidadIngresada = parseInt(prompt('Cuantos desea ingresar:'))
                        if (cantidadIngresada < 0 || isNaN(cantidadIngresada)) {
                            alert('ingrese un valor valido')
                        } else {
                            samsung += cantidadIngresada
                        }
                        break;
                    case 2:
                        cantidadIngresada = parseInt(prompt('Cuantos desea ingresar:'))
                        if (cantidadIngresada < 0 || isNaN(cantidadIngresada)) {
                            alert('ingrese un valor valido')
                        } else {
                            iphone += cantidadIngresada
                        }
                        break;
                    case 3:
                        cantidadIngresada = parseInt(prompt('Cuantos desea ingresar:'))
                        if (cantidadIngresada < 0 || isNaN(cantidadIngresada)) {
                            alert('ingrese un valor valido')
                        } else {
                            xiaomi += cantidadIngresada
                        }
                        break;
                    case 4:
                        cantidadIngresada = parseInt(prompt('Cuantos desea ingresar:'))
                        if (cantidadIngresada < 0 || isNaN(cantidadIngresada)) {
                            alert('ingrese un valor valido')
                        } else {
                            motorola += cantidadIngresada
                        }
                        break;
                    case 5:
                        cantidadIngresada = parseInt(prompt('Cuantos desea ingresar:'))
                        if (cantidadIngresada < 0 || isNaN(cantidadIngresada)) {
                            alert('ingrese un valor valido')
                        } else {
                            huawei += cantidadIngresada
                        }
                        break;
                    case 6:
                        cantidadIngresada = parseInt(prompt('Cuantos desea ingresar:'))
                        if (cantidadIngresada < 0 || isNaN(cantidadIngresada)) {
                            alert('ingrese un valor valido')
                        } else {
                            oppo += cantidadIngresada
                        }
                        break;
                    case 0:

                        break;
                    default:
                        alert('ingrese un valor valido')
                        break;
                }
            }
            break;
        case 2:
            console.log(`
                    INVENTARIO
                 MARCA     CANTIDAD      PRECIO
                Samsung       ${samsung}          $${precioSamsung}
                iPhone        ${iphone}          $${precioIphone}
                Xiaomi        ${xiaomi}          $${precioXiaomi}
                Motorola      ${motorola}          $${precioMotorola}
                Huawei        ${huawei}          $${precioHuawei}
                OPPO          ${oppo}          $${precioOppo}
            `);
            break;
        case 3:
            while (marcaVendida != 0) {
                marcaVendida = parseInt(prompt(`Que marca desea vender:
            1. Samsung.
            2. iPhone.
            3. Xiaomi.
            4. Motorola.
            5. Huawei.
            6. OPPO.
            0. Salir.`))
                switch (marcaVendida) {
                    case 1:
                        cantidadVendida = parseInt(prompt('Cuantos desea vender:'))
                        if (cantidadVendida < 0 || isNaN(cantidadVendida) || cantidadVendida > samsung) {
                            alert('ingrese un valor valido')
                        } else {
                            samsung -= cantidadVendida
                            totalSamsVendidos += cantidadVendida
                            console.log(totalSamsVendidos);
                        }
                        break;
                    case 2:
                        cantidadIngresada = parseInt(prompt('Cuantos desea vender:'))
                        if (cantidadIngresada < 0 || isNaN(cantidadIngresada) || cantidadVendida > iphone) {
                            alert('ingrese un valor valido')
                        } else {
                            iphone -= cantidadVendida
                            totalIphoneVendidos += cantidadVendida
                        }
                        break;
                    case 3:
                        cantidadIngresada = parseInt(prompt('Cuantos desea vender:'))
                        if (cantidadIngresada < 0 || isNaN(cantidadIngresada) || cantidadVendida > xiaomi) {
                            alert('ingrese un valor valido')
                        } else {
                            xiaomi -= cantidadVendida
                            totalXiaomiVendidos += cantidadVendida
                        }
                        break;
                    case 4:
                        cantidadIngresada = parseInt(prompt('Cuantos desea vender:'))
                        if (cantidadIngresada < 0 || isNaN(cantidadIngresada) || cantidadVendida > motorola) {
                            alert('ingrese un valor valido')
                        } else {
                            motorola -= cantidadVendida
                            totalMotoVendidos += cantidadVendida
                        }
                        break;
                    case 5:
                        cantidadIngresada = parseInt(prompt('Cuantos desea vender:'))
                        if (cantidadIngresada < 0 || isNaN(cantidadIngresada) || cantidadVendida > huawei) {
                            alert('ingrese un valor valido')
                        } else {
                            huawei -= cantidadVendida
                            totalHuaweiVendidos += cantidadVendida
                        }
                        break;
                    case 6:
                        cantidadIngresada = parseInt(prompt('Cuantos desea vender:'))
                        if (cantidadIngresada < 0 || isNaN(cantidadIngresada) || cantidadVendida > oppo) {
                            alert('ingrese un valor valido')
                        } else {
                            oppo -= cantidadVendida
                            totalOppoVendidos += cantidadVendida
                        }
                        break;
                    case 0:

                        break;
                    default:
                        alert('ingrese un valor valido')
                        break;
                }
            }
            break;
        case 4:
            console.log(`
                 RESGISTRO DE VENTA
MARCA     CANTIDAD      PRECIO UNITARIO      PRECIO TOTAL
Samsung      ${totalSamsVendidos}           $${precioSamsung}            $${precioSamsung * totalSamsVendidos}
iPhone       ${totalIphoneVendidos}           $${precioIphone}            $${precioIphone * totalIphoneVendidos}
Xiaomi       ${totalXiaomiVendidos}           $${precioXiaomi}             $${precioXiaomi * totalXiaomiVendidos}
Motorola     ${totalMotoVendidos}           $${precioMotorola}             $${precioMotorola * totalMotoVendidos}
Huawei       ${totalHuaweiVendidos}           $${precioHuawei}             $${precioHuawei * totalHuaweiVendidos}
OPPO         ${totalOppoVendidos}           $${precioOppo}             $${precioOppo * totalOppoVendidos}
TOTAL RECAUDADO:$${(precioSamsung * totalSamsVendidos) + (precioIphone * totalIphoneVendidos) + (precioXiaomi * totalXiaomiVendidos) + (precioMotorola * totalMotoVendidos) + (precioHuawei * totalHuaweiVendidos) + (precioOppo * totalOppoVendidos)} `)

        case 0:

            break;
        default:
            alert('ingrese un valor valido')
            break;
    }
}


