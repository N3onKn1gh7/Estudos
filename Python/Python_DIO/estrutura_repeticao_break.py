
#estrutura de repetição

while True: 
    numero = int(input("Informe um número: "))

    if numero == 10:
        break

    print(numero)


for numero in range(100):

    if numero == 10:
        continue

    print(numero)