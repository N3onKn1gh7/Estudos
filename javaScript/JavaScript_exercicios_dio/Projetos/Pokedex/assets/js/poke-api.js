// Cria um objeto para organizar as funções relacionadas à API
const pokeApi = {}

// Função para converter detalhes da API em um objeto Pokémon com propriedades específicas
function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon() // Cria uma nova instância do Pokémon
    pokemon.number = pokeDetail.id // Define o número do Pokémon
    pokemon.name = pokeDetail.name // Define o nome do Pokémon

    // Extrai os tipos de Pokémon e define o tipo principal
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types // Usa desestruturação para pegar o primeiro tipo

    pokemon.types = types // Armazena todos os tipos
    pokemon.type = type // Armazena o tipo principal

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default // Define a imagem do Pokémon

    return pokemon // Retorna o objeto Pokémon completo
}

// Função para buscar detalhes de um Pokémon específico pela URL
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url) // Faz uma requisição para a URL do Pokémon
        .then((response) => response.json()) // Converte a resposta para JSON
        .then(convertPokeApiDetailToPokemon) // Converte os dados em um objeto Pokémon personalizado
}

// Função para buscar uma lista de Pokémons com base no offset e limit fornecidos
pokeApi.getPokemons = (offset = 0, limit = 5) => {
    // URL da API com os parâmetros de offset e limit
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    // Faz a requisição e organiza as respostas
    return fetch(url)
        .then((response) => response.json()) // Converte a resposta para JSON
        .then((jsonBody) => jsonBody.results) // Extrai os resultados (lista de Pokémons)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // Mapeia para obter detalhes de cada Pokémon
        .then((detailRequests) => Promise.all(detailRequests)) // Aguarda todas as requisições serem completadas
        .then((pokemonsDetails) => pokemonsDetails) // Retorna os detalhes dos Pokémons
}





