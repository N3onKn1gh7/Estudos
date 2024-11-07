// Função para extrair o valor do parâmetro 'id' da URL
function getPokemonIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('id') // Retorna o valor de 'id'
}

// Função para buscar e exibir os detalhes do Pokémon
function loadPokemonDetails(pokemonId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(pokemon => {
            // Atualiza os elementos da página com os dados do Pokémon
            document.getElementById('pokemonName').textContent = pokemon.name
            document.getElementById('pokemonImage').src = pokemon.sprites.other.dream_world.front_default

            const stats = pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')
            document.getElementById('pokemonStats').innerHTML = stats
        })
        .catch(error => console.error("Erro ao carregar detalhes do Pokémon:", error))
}

// Executa a função de carregamento ao abrir a página
const pokemonId = getPokemonIdFromURL()
loadPokemonDetails(pokemonId)
