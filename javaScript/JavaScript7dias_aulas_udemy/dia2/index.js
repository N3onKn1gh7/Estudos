
//Operaçoes básicas

let num1 = 3;
let num2 = 2;

console.log(num1 + num2); //Soma
console.log(num1 - num2); //Subtração
console.log(num1 * num2); //Multiblicação 
console.log(num1 / num2); //Divisão

console.log(num1 % num2); //Resto da divisão
console.log(num1 ** num2);//Potenciação


//Incremento e Decremento

let num3 = 3;
let num4 = 2;

let total = num3 + num4;

console.log(++total); //O total será 6 porque pediu para incrementar antes do total
console.log(--total); //O total será 4 porque pediu para decrementar antes do total

console.log(total++); //Mostrará 5 mas o valor será 6 pois o incremento veio depois de total
console.log(total);   //Agora mostrara 6 pq ja passamos pelo incremento

console.log(total--); //Mostrará 5 mas o valor será 4 pois o incremento veio depois de total
console.log(total);   //Agora mostrara 4 pq ja passamos pelo incremento

//Operadores de atribuição, (funcionam com qualquer operador)

let num5 = 3;

num5 = num5 + 20;   //Adiciona + 20
num3 += 20;         //Forma simplificada de adicionar + 20

console.log(num5);


//Operadores de Comparação, eles retornam true ou false no console

let num6 = 3;

console.log(num6 > 0);  //Verifica se num6 é maior que 0
console.log(num6 < 0);  //Verifica se num6 é menor que 0
console.log(num6 >= 3); //Verifica se num6 é maior ou igual a 0
console.log(num6 <= 0); //Verifica se num6 é menor ou igual a 0

console.log(num6 === 3) //Verifica se num6 é identico a 3
console.log(num6 !== 3) //Verifica se num6 é diferente de 3


//Operadores de igualdade

let num7 = '1';
let num8 = 1;

console.log(num7 === num8) // Strict equalit - verifica o tipo da variavel e o valor (Retornara fase)
console.log(num7 == num8) //  lose equalit  - verifica apenas o valor (Retornara true)


//Operadores ternarios

let driver = 90; //a variavel indica 90
let speed = driver > 100 ? 'Acima' : 'Abaixo'; /*a variavel speed recebe a 
                                                variavel drive que é comparada 
                                                se o valor dela esta acima de 100, 
                                                se estiver retorna "acima", 
                                                senão retorna "abaixo"*/

console.log(speed);


//Operadores lógicos

let temIdadeMinima = true; //Suponhamos que a pessoa tenha idade minima "true"
let temTituloEleitor = true; //suponhamos que a pessoa tenha titulo de eleitor "true"

let podeVotar = temIdadeMinima && temTituloEleitor;
console.log('Pode votar? ' + podeVotar);


let podeViajar = !podeVotar; // Se a pessoa pode votar, ela não deve viajar na eleição
console.log('Pode viajar? ' + podeViajar); // verficando se pode viajar ou nao


//Operadores logicos com String 

let corCliente = 'white';
let corEstoque = 'black';
let corVendida = corCliente || corEstoque; /*Se corCliente foi definido ele 
                                             retorna white, por causa da ordem,
                                             se nao foi(undefined), ele retornara
                                             black*/
console.log(corVendida);


//if e else


let driverSpeed = 80;

if (driverSpeed > 110) {
    console.log('Driving too fast');
}

else if (driverSpeed > 40 && driverSpeed <= 110) {
    console.log('OK');
}

else {
    console.log('driving too slow');
}

// Switch e Case

let airport = 'SEA';

switch (airport) {
    case 'MCO':
        console.log('Orlando');
        break;
    case 'JFK':
        console.log('John F. Kennedy');
        break;
    case 'SEA':
        console.log('Seattle');
        break;
    default:
        console.log('Unknown')
}

//For Loop

for (i = 1; i <= 10; i++) {
    console.log('Numero ', i);
}


//While Loop

i = 1;

while (i <= 10) {
    console.log('Numero ', i);
    i++;
}

i = 1;

//adicionando break no loop

while (i <= 10) {
    if (i === 8) break;         //Algumas vezes é necessario para antes di final da contagem
    console.log('Numero ', i); 
    i++;
}



//Do While Loop

i = 1;

do {                           //Do , primeiro fará executara para depois acerscentar a quantidade de vezes 
    console.log('Numero ', i)
    i++;
} while (i <= 10);




//For in Loop

const myCar = {
    model: 'BMW',
    year: 2023,
    km: 68000
}

for (let i in myCar)           //Esse For Loop é capaz de analisar informações dentro de um objeto
    console.log (i, myCar[i]);



//For of Loop    

const friends = ['Marcos', 'Ana', 'José']; //Mostra o "conteudo" de friends

for (let i of friends)
    console.log(i);