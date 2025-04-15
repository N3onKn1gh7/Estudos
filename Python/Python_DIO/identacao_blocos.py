def sacar(valor):
    saldo = 500

    if saldo >= valor:
        print("Valor sacado!")
        print("Retire seu dinheiro na boca do caixa.")
        
    print("Obrigado poe ser nosso cliente, tenha um bom dia!")


def depositar(valor):
    saldo = 500
    saldo += valor    


sacar(100)
depositar(1000)

sacar(900)