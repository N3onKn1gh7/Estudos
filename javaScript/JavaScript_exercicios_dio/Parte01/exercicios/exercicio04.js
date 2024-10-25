/* O IMC - Indice de massa corporal -e um critério da organização Mundial
 de Saúde para dar uma indicação sobre a condição de uma pessoa adulta

 Formula do IMC:
 IMC = peso / (altura * altura)

 Elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acordo
 com a tabela abaixo:

 IMC em adultos condição:
- Abaixo de 18.5 Abaixo do peso
- Entre 18.5 e 25 peso normal
- Entre 25 e 30 acima do peso
- Entre 30 e 40 obeso
- Acima de 40 obesidade grave*/


const peso = 85;
const altura = 1.72;

const imc = peso / (altura * altura);
console.log(imc);

if (imc < 18.5){
    console.log('Abaixo do peso');
}else if(imc > 18.5 && imc < 25){
    console.log('Peso normal');
}else if(imc > 25 && imc < 30){
    console.log('Acima do peso');
}else if(imc > 30 && imc < 40){
    console.log('Obeso');
}else{
    console.log('Obesidade grave')
}


