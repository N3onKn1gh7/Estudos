/*Faça um programa para calcular o valor de uma viagem

Você tera 3 variaveis, sendo elas:

1- Preço do combustivel
2- Gasto medio do combustivel do carro por KM
3- Distancia em KM da viagem

Imprima no console o valor que sera gasto para realizar essa viagem*/

const valorCombustivel = 6.11;
console.log("Valor do combustivel: ", valorCombustivel)

const kmPorLitros = 12;
console.log("Km por litros =", kmPorLitros)

const distancia = 1580;
console.log("Distância em Kilometros: ", distancia, "Km");

//toFixed nesse caso arredonda o resultado para 2 casas decimais (2)
const gasto = (distancia / kmPorLitros) * valorCombustivel;
console.log("O valor gasto de combustivel para essa viagem é: R$", gasto.toFixed(2));


//Para executar o programa abra o console (Ctrl + ") e digite node aula1.js