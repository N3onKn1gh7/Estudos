# Desafio de Extensão da Pokedex - Página de Detalhes do Pokémon

O desafio consistiu em criar uma nova funcionalidade para a Pokedex que permitisse exibir, em uma página separada, os detalhes de cada Pokémon ao clicar nele. A ideia era que a lista inicial de Pokémons direcionasse o usuário para uma página dedicada a cada Pokémon, onde seriam mostradas informações mais detalhadas, como atributos (HP, ataque, defesa, etc.) e uma imagem ampliada do Pokémon escolhido.

## Estrutura do Projeto

Para implementar essa extensão, foram necessárias várias etapas:

1. **Criação de uma nova página HTML (`pokemon-details.html`)** para exibir as informações detalhadas de cada Pokémon.
2. **Modificação do arquivo `main.js`** para adicionar um evento de clique em cada Pokémon listado, redirecionando para a página de detalhes com o ID do Pokémon passado como parâmetro na URL.
3. **Implementação de um novo arquivo JavaScript (`pokemon-details.js`)** para buscar o ID do Pokémon na URL, utilizar esse ID para consultar a API do Pokémon e renderizar as informações específicas na nova página.

---

## Passos do Desenvolvimento

### 1. Criação de `pokemon-details.html`

A nova página `pokemon-details.html` foi configurada para exibir os dados detalhados de cada Pokémon. A estrutura básica desta página inclui:

- Um título que exibe o nome do Pokémon.
- Uma imagem ampliada do Pokémon.
- Uma lista para os atributos principais do Pokémon, como HP, ataque e defesa.

### 2. Modificação no `main.js` para Redirecionamento de Clique

No arquivo `main.js`, foi adicionado um evento `onclick` a cada item da lista de Pokémons, que redireciona o usuário para `pokemon-details.html?id=<id-do-pokemon>`. Dessa forma:

- Cada Pokémon passa seu ID na URL, permitindo que a página de detalhes saiba qual Pokémon deve ser carregado.

### 3. Implementação de `pokemon-details.js`

No arquivo `pokemon-details.js`, foi implementado um script que:

- Captura o ID do Pokémon da URL utilizando `URLSearchParams`.
- Usa esse ID para fazer uma consulta à PokeAPI e obter os detalhes do Pokémon.
- Atualiza os elementos HTML da página de detalhes para exibir o nome, imagem e atributos específicos (HP, ataque, defesa, etc.) do Pokémon.

### 4. Estilização da Página de Detalhes

A estilização foi aplicada no arquivo `details.css`, garantindo uma apresentação clara e visualmente agradável das informações detalhadas do Pokémon.

---


