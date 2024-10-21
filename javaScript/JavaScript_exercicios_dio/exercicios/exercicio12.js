/*Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado*/


const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = 0; i <= numeros.length; i++) {
    const numero = numeros[i];

    if (numero % 2 === 0) {
        console.log(numero);
    }
}