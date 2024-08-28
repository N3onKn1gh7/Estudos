# RPG Character Generator

Este projeto é um gerador de personagens de RPG desenvolvido com Spring Boot. Ele utiliza o padrão de projeto 
Singleton, Strategy e Facade para demostrar o aprendizado do bootcamp da DIO.me. 

## Tecnologias Utilizadas
- Spring Boot: Framework para desenvolvimento de aplicações Java.
- Spring Data JPA: Para o gerenciamento de dados e interação com o banco de dados.
- H2 Database: Banco de dados em memória para armazenar os dados dos personagens.
- Swagger: Para a documentação da API e testes interativos.
- Maven: Gerenciador de dependências e build.
## Funcionalidades
- Gerador de Personagens: Gera um personagem com nome, classe, raça e atributos aleatórios.
- Atributos Aleatórios: Força, Destreza, Inteligência, Sabedoria e Carisma são gerados aleatoriamente entre 3 e 18.
- Swagger UI: Documenta e permite testar a API REST.

## Endpoints da API
- POST /characters: Cria um novo personagem.<br><br>


```Java

- Request Body:

{
  "name": "Nome do Personagem",
  "characterClass": "Classe do Personagem",
  "race": "Raça do Personagem"
}

- Response:

{
  "name": "Nome do Personagem",
  "characterClass": "Classe do Personagem",
  "race": "Raça do Personagem",
  "forca": Valor Aleatório,
  "destreza": Valor Aleatório,
  "inteligencia": Valor Aleatório,
  "sabedoria": Valor Aleatório,
  "carisma": Valor Aleatório
}
```

## Configuração
- Configuração do Banco de Dados H2: O banco de dados em memória H2 está configurado para rodar na URL jdbc:h2:mem:rpgdb com usuário sa e senha password.
- Porta do Servidor: A aplicação está configurada para rodar na porta 8085.

## Contribuições
- Se você quiser contribuir para este projeto, por favor, faça um fork do repositório e envie um pull request com suas melhorias.



