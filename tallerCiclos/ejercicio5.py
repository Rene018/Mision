numeroIngresado = int(input("ingrese un numero: "))
if numeroIngresado > 100:
    for num in range(2, numeroIngresado):
        es_primo = True
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                es_primo = False
                break
        if es_primo:
            print(num)
else:
    print("Ingrese un numero mayor a 100")