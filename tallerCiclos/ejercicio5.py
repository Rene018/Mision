numeroIngresado=0
while numeroIngresado<101:
    numeroIngresado = int(input("ingrese un numero: "))
    if numeroIngresado > 100:
        for num in range(2, numeroIngresado):
            esPrimo = True
            for i in range(2, int(num ** 0.5) + 1):
                if num % i == 0:
                    esPrimo = False
                    break
            if esPrimo:
                print(num)
    else:
        print("Ingrese un numero mayor a 100")