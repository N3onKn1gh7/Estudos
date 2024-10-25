
/*2) Faça um programa que receba N quantidade de números e seus respectivos valores.
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1*/

const { gets, print } = require('./funcoesAuxiliares2');

const n = gets();
let maiorPar = null;  
let menorImpar = null;  

for (let i = 0; i < n; i++) {
    const numero = gets();
    
    if (numero % 2 === 0) {
        if (maiorPar === null || numero > maiorPar) {
            maiorPar = numero;
        }
    } else {
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero;
        }
    }
}


if (maiorPar !== null) {
    print('Maior número par: ' + maiorPar);
} else {
    print('Nenhum número par foi informado.');
}

if (menorImpar !== null) {
    print('Menor número ímpar: ' + menorImpar);
} else {
    print('Nenhum número ímpar foi informado.');
}
