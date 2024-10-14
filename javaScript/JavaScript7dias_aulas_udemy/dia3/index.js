

//criando um objeto book com propriedades e uma função

// const book = {
//     bookTitle: 'Atomic Habits',
//     bookAuthor: 'James Clear',
//     bookPages: 306,
//     bookChapters: {
//         chap1: 'Fundamentals',
//         chap2: '1st law',
//     },
//     printBook: function () {    //Criando um metodo (função) para o objeto
//         console.log('Printing...');  //exibindo mensagem no console
//     }
// }

//book.printBook();   //Executando o método 'printBook' do objeto book



//Criando uma factory

function createBook(title, author, pages) { //Factory crate book criando um objeto const book

    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function () {
            console.log('Printing...');
        }
    }
    return book;
}

const book1 = createBook('Atomic Habits', 'James Clear', 306);
const book2 = createBook('Whisper in the Dark', 'H.P Lovecraft', 121);
const book3 = createBook('Al Azif', 'Abdul Alzarhed', 406);

book1.color = 'white'; //Adicionando propriedade "apenas" no book1

console.log(book1);
console.log(book2);
console.log(book3);



//Criando um Constructor (Mais limpo que usar Factory)

function CreateCar(model, year, color) {
        this.carModel = model;
        this.carYear = year;
        this.CarColor = color;
    }

const car1 = new CreateCar('BMW', '2023', 'black');
console.log(car1);



//Objetos build in (Bibliotecas)

//Em https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects existem varios exemplos 

//exemplo:


console.log(Math.max(1,3,45,98,1,65,19)); //Math.max retornara o valor mais alto



//O build in String

let message = 'Hey, my name is Bond';

console.log(message.startsWith('Hey')); //Verificando se existe Hey na frase
console.log(message.length); //Verificando a quantidade de caracteres na frase
