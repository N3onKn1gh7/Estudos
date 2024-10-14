console.log('Javascript Funcionando');


/*Declarando variaveis*/
let firstName = 'Marcos';
let lastName = 'Silva';

/*Declarando constantes*/
const numero = 30;
console.log(numero);

/*Imprimindo variaveis*/
console.log(firstName);
console.log(lastName);

/*Tipos Primitivos*/
let itemName = 'pen';     /*Tipo String*/
let itemPrice = 3;        /*Tipo number*/
let itemAvaliable = true; /*Tipo boolean pode ser true ou false*/
let itemColor             /*Tipo undefined*/
itemName = null;          /*Apaga o valor de uma variável*/


/*Objetos*/
let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvaliable: true,
    itemColor: 'Red'
}

pen.itemColor = 'blue' //alterando uma propridade de dentro do objeto

console.log(pen);// Mostrando o objeto pen

console.log(pen.itemName);// Mostrando apenas o nome
console.log(pen.itemColor);// Mostrando apenas a cor


/*Arrays*/

let friends = ['Marcos', 'Silvia', 'Elisa'];

console.log(friends); //mostra todos os elementos do array enumarados de 0 a 2

console.log(friends[1]); // mostra apenas um dos elementos. Nesse caso Silvia

friends[2] = 'Junior'; //Substituindo Elisa por Junior

console.log(friends); // Mostra a lista com a substituição


/*-----------------Funções com tarefas-----------------*/


/*Criando uma função*/
function saleStatus1() {
    console.log('Approved') 
}

/*Executando uma função*/
saleStatus1(); //Mostrara a mensagem Approved





/*Criando uma função com parametros*/
function saleStatus(status) { // Entre parenteses esta o parametro da função nesse caso (status)
    console.log('Transaction ' + status) //Concatenando a mensagem 'Transaction' com o parametro
}

/*Executando uma função*/
saleStatus('Approved'); //Mostrara o argumento nesse caso Approved



/*-----------------Funções com Calculos-----------------*/


function percentage10(price) { // Função que recebe o parâmetro 'price' (preço)
    return price - (price * 10 / 100); // Retorna o valor de 'price' subtraído de 10% (desconto de 10%)
}

let total = percentage10(20); // Cria a variável 'total' que recebe o resultado da função 'percentage10' com o valor 20
console.log(total); // Imprime o valor da variável 'total' no console
