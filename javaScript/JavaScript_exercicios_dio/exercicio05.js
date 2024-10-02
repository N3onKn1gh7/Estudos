/*Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal de etiqueta e a escolha da condição de pagamento.
utilize os codigos da tabela a seguir para ler qual a condição de pagamento e 
efetuar o calculo adequado.

Codigo condição de pagamento:
-A vista debito, recebe 10% de desconto
-A vista no dinheiro ou pix, recebe 15% de desconto
-Em duas vezes, preço normal de etiqueta sem juros
-Acima de duas vezes, preço normal de etiqueta mais juros de 10%*/

var preco = 100;
const formaPagamento = 4;

if (formaPagamento === 1){
    console.log (preco - (preco * 0.1));
}else if (formaPagamento === 2){
    console.log (preco - (preco * 0.15));
}else if (formaPagamento === 3){
    console.log (preco)
}else if (formaPagamento === 4){
    console.log(preco + (preco * 0.1));
}



