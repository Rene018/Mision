numProductos = 1
while numProductos != 0:
    numProductos = int(input('Ingrese el numero de productos: '))
    if numProductos < 0:
        print('Ingrese un numero valido')
    else:
        for i in range(1, numProductos + 1):

            valorProducto = int(input('Ingrese el valor del producto: '))
            if valorProducto <= 0:
                print('Ingrese un valor valido')
            elif valorProducto <= 100:
                descuento = 0.1 * valorProducto
                precioConDesc = valorProducto-descuento
                print('Producto', i,
                '\nPrecio sin DCTO--------', valorProducto,
                '\nDescuento: 10%---------', descuento,
                '\nPrecio con DCTO--------', precioConDesc,)
            elif valorProducto > 100 and valorProducto <= 200:
                descuento = 0.2 * valorProducto
                precioConDesc = valorProducto-descuento
                print('Producto', i,
                '\nPrecio sin DCTO--------', valorProducto,
                '\nDescuento: 20%---------', descuento,
                '\nPrecio con DCTO--------', precioConDesc,)
            else:
                valorProducto = 0.25 * valorProducto
                precioConDesc=valorProducto-descuento
                print('Producto', i,
                '\nPrecio sin DCTO--------',valorProducto,
                '\nDescuento: 25%---------',descuento,
                '\nPrecio con DCTO--------',precioConDesc,)
