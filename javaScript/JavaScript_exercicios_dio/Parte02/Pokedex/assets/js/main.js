

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
   .then((response) => response.json())
   .then((jsonBody) => jsonBody.results)
   .then((pokemonList) => {
          debugger
          console.log(pokemonList)
   }) 

   .catch((error) => console.error(error))