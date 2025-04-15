texto = input("Informe um texto: ")
VOGAIS = "AEIOU"

#Exemplo utilizando um iteravel
for letra in texto:
    if letra.upper() in VOGAIS:
        print(letra, end="")

else:        

    print() # adiciona  uma quebra de linha



#Exemplo com função build-it range
for numero in range(0, 51, 5): #inicia em 0, conta ate 50, de 5 em 5 (start, stop, step)
    print(numero, end=" ")    