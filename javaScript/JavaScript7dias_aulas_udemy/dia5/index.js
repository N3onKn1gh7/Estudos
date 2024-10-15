//Iniciando com Funções


//Tipo Function Declaration

function movie() {
    console.log('The Matrix'); 
}

movie(); //Call




//Tipo Function Expression

const car = function(){
    console.log('Tesla');
}

car ();


//associando duas variaveis a mesma função

const truck = car;

truck();


//Utilizando os Argumentos em Funções


function price(a, b){ // a e b são argumentos 
    return a + b;
}

console.log(price(10, 20)); //se vc adicionar mais valores aos argumentos (10,20,40,2,) somente 10, 20 serao lidos


//Para adicionar mais valores fazemos assim:


function price(){ 
    let total = 0; //zeramos o total
    for (let value of arguments)
        total += value
    return total;
}

console.log(price(10, 20, 40, 2,)); 


//Configurando parametros Default (Exemplo: financiamento de um veiculo)
/*Onde 

loan = emprestimo
rate = taxa
years = anos*/


function carLoan(loan, rate = 17, years = 5) { //se rate e years sempre se repetem podemos deixa-los como default
    return (loan * rate / 100 * years) + loan;
}

console.log(carLoan(20000)); //Estando rate e years como default so precisamos informar o valor do emprestimo





