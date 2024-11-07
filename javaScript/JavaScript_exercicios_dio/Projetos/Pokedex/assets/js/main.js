// Seleciona a lista de Pokémon no HTML
const pokemonList = document.getElementById('pokemonList');
// Seleciona o botão de "Load More"
const loadMoreButton = document.getElementById('loadMoreButton');

// Define o número máximo de registros de Pokémon
const maxRecords = 151;
// Define quantos Pokémon carregar por vez
const limit = 10;
// Inicializa o offset (quantidade inicial de Pokémon)
let offset = 0;

// Função para carregar itens de Pokémon da API com base em offset e limit
function loadPokemonItens(offset, limit) {
    // Usa a API para buscar Pokémon
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        // Constrói o HTML dos Pokémon obtidos
        const newHTML = pokemons.map((pokemon) => `
             <li class="pokemon ${pokemon.type}" onclick="window.location.href='pokemon-details.html?id=${pokemon.number}'">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('');
        // Adiciona o novo HTML à lista de Pokémon na página
        pokemonList.innerHTML += newHTML;
    });
}

// Carrega os primeiros Pokémon ao iniciar a página
loadPokemonItens(offset, limit);

// Configura o evento para carregar mais Pokémon quando o botão for clicado
loadMoreButton.addEventListener('click', () => {
    // Incrementa o offset
    offset += limit;
    // Calcula o total de registros após o próximo carregamento
    const qtdRecordNextPage = offset + limit;

    // Verifica se o próximo carregamento excede o número máximo de registros
    if (qtdRecordNextPage >= maxRecords) {
        // Define um novo limite para não passar do número máximo
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        // Remove o botão quando não há mais Pokémon para carregar
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        // Continua carregando com o limite padrão
        loadPokemonItens(offset, limit);
    }
});

