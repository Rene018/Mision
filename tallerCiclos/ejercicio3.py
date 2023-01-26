numero= int(input("ingrese un numero: "))
if numero<11 or numero >14:
    print("Ingrese un numero entre 10 y 15")
else:
    resultado = 1
    for i in range(1, numero+1):
        resultado *= i
    print('El factorial de ',numero,' es: ',resultado)