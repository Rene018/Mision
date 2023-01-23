suma=0

primerNumero =int(input('Ingrese un numero:'))
segundoNumero =int(input('Ingrese un numero:'))
for primerNumero in range(segundoNumero+1):
    if primerNumero%2==0:
        suma+=primerNumero
print(suma)