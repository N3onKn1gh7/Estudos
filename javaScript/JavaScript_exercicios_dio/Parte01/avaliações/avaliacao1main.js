/*1) Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação*/


const { gets, print } = require('./funcoesAuxiliares1');


const mediaAluno = gets();

if (mediaAluno < 5.0){
    print('Reprovado');
}else if(mediaAluno >= 5.0 && mediaAluno < 7.0){
    print('Recuperação');
}else{
    print('Aprovado');
}


