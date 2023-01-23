operacion=-1
while operacion!=0:
	print('Que operacion desea realizar: ')
	print('1. Sumar 2 numeros. \n2. Restar 3 numeros. \n3. Multiplicar 2 numeros. \n4. Dividir 2 numeros. \n0. Salir de la calculadora.')
	operacion =int( input("Ingrese la operacion que desea realizar: "))
	if operacion<0 or operacion>5:
		print('ingrese un valor valido\n')
	elif operacion==1:
		numero1=int( input("ingrese un numero: "))
		numero2=int( input("ingrese un numero: "))
		sumatoria=numero1+numero2
		print('La suma de ',numero1,' y ',numero2,' es: ', sumatoria)
	elif operacion==2:
		numero1=int( input("ingrese un numero: "))
		numero2=int( input("ingrese un numero: "))
		numero3=int( input("ingrese un numero: "))
		diferencia=numero1-numero2-numero3
		print('La diferencia entre ',numero1,', ',numero2,'y ',numero3,' es: ',diferencia)
	elif operacion==3:
		numero1=int( input("ingrese un numero: "))
		numero2=int( input("ingrese un numero: "))
		producto=numero1*numero2
		print('El producto entre ',numero1,' y ',numero2,' es: ',producto)
	elif operacion==4:
		numero1=int( input("ingrese un numero: "))
		if numero1==0:
			print('ingrese un valor valido')
		else:
			numero2=int( input("ingrese un numero: "))
			if numero2==0:
				print('ingrese un valor valido')
			else:
				
				sumatoria=numero1+numero2
				print('La suma de ',numero1,' y ',numero2,' es: ', sumatoria)