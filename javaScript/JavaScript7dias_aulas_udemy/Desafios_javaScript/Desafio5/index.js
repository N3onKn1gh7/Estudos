





const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']; // Declaração de um array contendo as cores disponíveis para escolha aleatória.
const btn = document.getElementById('btn'); // Seleciona o elemento HTML com o id "btn" e o atribui à constante "btn".
const color = document.querySelector('.color'); // Seleciona o elemento com a classe "color" e o atribui à constante "color".

// Adiciona um evento de clique ao botão
btn.addEventListener('click', function(){ // Quando o botão "btn" for clicado, a função será executada.
    const randonColor = getRandomColor(); // Chama a função "getRandomColor" para obter um índice aleatório do array "colors".
    document.body.style.background = colors[randonColor]; // Altera o background da página para a cor correspondente ao índice aleatório.
    color.textContent = colors[randonColor]; // Atualiza o texto do elemento com a classe "color" para mostrar a cor selecionada.
})

// Função para gerar números aleatórios
function getRandomColor () { 
    return Math.floor(Math.random() * colors.length); // Gera um número inteiro aleatório entre 0 e o tamanho do array "colors".
}




