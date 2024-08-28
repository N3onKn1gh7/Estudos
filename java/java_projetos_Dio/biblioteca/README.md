# Biblioteca de Livros
<p>Este projeto é uma aplicação Spring Boot desenvolvida como parte dos bootcamps "GFT - Desenvolvimento Java com IA" e </p>
<p>"Claro - Java com Spring Boot" na plataforma Dio.me, realizados em agosto de 2024.</p>

## Tecnologias Utilizadas
- Java: Linguagem de programação principal do projeto.
- Spring Boot: Framework para simplificar o desenvolvimento de aplicações Java.
- Gradle: Ferramenta de automação de builds.
- Spring Data JPA: Abstração para acesso a dados persistentes com JPA.
- H2 Database: Banco de dados em memória utilizado para testes.
- PostgreSQL Driver: Preparado para integração com bancos de dados PostgreSQL.
- Tomcat: Servidor de aplicações embutido.

## Funcionalidades
- Adicionar Livros: Permite adicionar novos livros à biblioteca.
- Listar Livros: Exibe uma lista de todos os livros cadastrados.
- Atualizar Livros: Permite modificar as informações de um livro existente.
- Deletar Livros: Remove um livro da biblioteca.

## Aplicação
- A aplicação estará disponível em http://localhost:8085.

## API Endpoints
- GET /livros: Lista todos os livros.
- POST /livros: Adiciona um novo livro.
- GET /livros/{id}: Exibe as informações de um livro específico.
- PUT /livros/{id}: Atualiza as informações de um livro.
- DELETE /livros/{id}: Remove um livro da biblioteca.
