/*faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre da faculdade 
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo

Média = (nota 1 + nota 2 + nota 3) / 3

Classificação: 
-Média menor que 5, reprovação
-Média entre 5 e 7, recuperação
-Média acima de 7, passou de semestre*/

var nota1 = 9;
var nota2 = 9;
var nota3 = 8;

var media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(1));

if (media < 5 ){
    console.log('Reprovação')
} if (media >= 5 && media <= 7) {
    console.log('Recuperação')
} else if (media > 7){
    console.log('Passou de semestre')
}
