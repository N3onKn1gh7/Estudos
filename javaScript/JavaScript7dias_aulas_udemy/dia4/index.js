

//Adicionando valores em uma Array

const num = [7, 8, 9,];


num.push(10, 11, 12);//Adicionando valores no final da array

num.unshift(1, 2, 3,); //Adicionando elementos no inicio da Array


//Adicionando no meio da Array
num.splice(3, 0, 4, 5, 6); /* (x, x1, 4, 5, 6) x indica apartir de qual
                               valor começara adicionar, x2 indica se quer 
                               ou nao subistituir o valor, 4,5,6, valores
                               que foram adicionados */
console.log(num);


//Localizando itens em uma Array primitiva



const num2 = [6,7,8,9,];


console.log(num2.indexOf(8)); //indica posição 2 que é onde esta o valor 8

console.log(num2.includes(4));



//Localizando itens em uma Array de referencia (necessario usar a função find)


const movies = [

    {id: 1, movieName: 'Lord of the Rings'},
    {id: 2, movieName: 'Blade Runner'},
    {id: 1, movieName: 'The Matrix'}
];

console.log({id: 2, movieName: 'Blade Runner'}); //retornara false



console.log(movies.find(function(movie) {        //Necessario criar uma função para encontrar
    return movie.movieName == 'Blade Runner';
}));




//Utilzando Arrow Function


console.log(movies.find(movie => movie.movieName == 'Blade Runner'));


//Removendo uma Array

const num3 = [5, 6, 7, 8];

//const final = num3.pop(); //remove o ultimo item da lista

//const final = num3.shift(); //remove o primeiro item da lista

const final = num3.splice(2, 1); /* 2 - remove a partir do index 2 que é o (7), 
                                    1 - indica quantos itens a partir do index 2 */


console.log(num3); //mostra quais itens ficaram na lista
console.log(final); //mostra o que foi removido



//Esvaziando uma Array

let num4 = [5, 6, 7, 8, 10, 2];

//num4 = [];

//num4.length = 0;

console.log(num4);


//Concatenando uma Array


let numbers = [5,6,7,8];
let letters = ['a','b','c'];

all = numbers.concat(letters);

console.log(all);


//Pegando uma  porção da array e formando uma nova array

half = all.slice(3, 5);
console.log(half);



//Utilizando o Join Array

let clients = ['Andre', 'Marcela', 'Jose'];

console.log(clients);

let clientsJoin = clients.join(','); //Adicionando uma virgula entre os nomes

console.log(clientsJoin);


//Revertendo uma Array


clients.sort(); // Ordem Alfabetica
clients.reverse(); // Ordem Alfabetica inversa


console.log(clients); 


//Verificando elementos na Array

const tempLondonJuly = [18, 13, 8, 2 ];

const tempPositiveJuly = tempLondonJuly.every(function(value) {
    return value >= 0 ;
});

console.log(tempPositiveJuly); // Retorna True, Indicando que a temperatura nesses dias sera positiva


//filtrando com Filter


let tempLondonSeptember = [5, 8, 1, 7, 0, 1, -5, -2, -13 ];

let tempPositiveSeptember = tempLondonSeptember.filter(function(value) {
    return value >= 0 ;
});

console.log(tempPositiveSeptember); // Retorna um array com as temperaturas positivas


//Filtrando com o uso de Array Function

tempPositiveSeptember = tempLondonSeptember.filter(value => value >= 0);

console.log(tempLondonSeptember);