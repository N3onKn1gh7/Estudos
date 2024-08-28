# Exercícios propostos do curso Conhecendo Collections Java 
### Desafio de código proposto e orientado pela professora Camila Cavalcante<br><br><br>

### Operações básicas com List:<br><br>

1.Carrinho de Compras:

<p>Crie uma classe chamada "CarrinhoDeCompras" que representa um carrinho de compras online. O carrinho deve ser implementado como uma lista de itens. Cada item é representado por uma classe chamada "Item" que possui atributos como nome, preço e quantidade. Implemente os seguintes métodos:

- `adicionarItem(String nome, double preco, int quantidade)`: Adiciona um item ao carrinho com o nome, preço e quantidade especificados.
- `removerItem(String nome)`: Remove um item do carrinho com base no seu nome.
- `calcularValorTotal()`: Calcula e retorna o valor total do carrinho, levando em consideração o preço e a quantidade de cada item.
- `exibirItens()`: Exibe todos os itens presentes no carrinho, mostrando seus nomes, preços e quantidades.
</p>

<br>

[link do projeto 1: Carrinho de compras](https://github.com/N3onKn1gh7/bootcamp-java-2024-dio/tree/main/src/exercicios/collections/list/operacoesBasicas)<br><br><br>

### Pesquisa com List: <br><br>

2.Soma de Números: 

<p>Crie uma classe chamada "SomaNumeros" que possui uma lista de números inteiros como atributo. Implemente os seguintes métodos:

- `adicionarNumero(int numero)`: Adiciona um número à lista de números.
- `calcularSoma()`: Calcula a soma de todos os números na lista e retorna o resultado.
- `encontrarMaiorNumero()`: Encontra o maior número na lista e retorna o valor.
- `encontrarMenorNumero()`: Encontra o menor número na lista e retorna o valor.
- `exibirNumeros()`: Retorna uma lista contendo todos os números presentes na lista.

  <br>

[link do projeto 2: Soma de números](https://github.com/N3onKn1gh7/bootcamp-java-2024-dio/tree/main/src/exercicios/collections/list/Pesquisa)<br><br><br>

### Ordenação em List: <br><br>

3.Ordenação de Números:

<p>Crie uma classe chamada "OrdenacaoNumeros" que possui uma lista de números inteiros como atributo. Implemente os seguintes métodos:

- `adicionarNumero(int numero)`: Adiciona um número à lista.
- `ordenarAscendente()`: Ordena os números da lista em ordem ascendente usando a interface Comparable e a class Collections.
- `ordenarDescendente()`: Ordena os números da lista em ordem descendente usando um Comparable e a class Collections.
</p>

<br>

[link do projeto 3: Ordenação de números](https://github.com/N3onKn1gh7/bootcamp-java-2024-dio/tree/main/src/exercicios/collections/list/Ordenacao)<br><br><br>

### Operações básicas com Set:<br><br>

<p>
Crie uma classe chamada "ConjuntoPalavrasUnicas" que possui um conjunto de palavras únicas como atributo. Implemente os seguintes métodos:

- `adicionarPalavra(String palavra)`: Adiciona uma palavra ao conjunto.
- `removerPalavra(String palavra)`: Remove uma palavra do conjunto.
- `verificarPalavra(String palavra)`: Verifica se uma palavra está presente no conjunto.
- `exibirPalavrasUnicas()`: Exibe todas as palavras únicas do conjunto.
</p>

<br>

[link do projeto 4: Conjunto de palavras unicas](https://github.com/N3onKn1gh7/bootcamp-java-2024-dio/tree/main/src/exercicios/collections/set/OperacoesBasicas)<br><br><br>

### Pesquisa com Set:<br><br>

<p>
Crie uma classe chamada "ListaTarefas" que possui um conjunto de objetos do tipo "Tarefa" como atributo. Cada tarefa possui um atributo de descrição e um atributo booleano para indicar se a tarefa foi concluída ou não. Implemente os seguintes métodos:

- `adicionarTarefa(String descricao)`: Adiciona uma nova tarefa ao Set.
- `removerTarefa(String descricao)`: Remove uma tarefa do Set de acordo com a descrição, se estiver presente. 
- `exibirTarefas()`: Exibe todas as tarefas da lista de tarefas.
- `contarTarefas()`: Conta o número total de tarefas na lista de tarefas.
- `obterTarefasConcluidas()`: Retorna um Set com as tarefas concluídas.
- `obterTarefasPendentes()`: Retorna um Set com as tarefas pendentes.
- `marcarTarefaConcluida(String descricao)`: Marca uma tarefa como concluída de acordo com a descrição.
- `marcarTarefaPendente(String descricao)`: Marca uma tarefa como pendente de acordo com a descrição.
- `limparListaTarefas()`: Remove todas as tarefas da lista de tarefas.
</p>

<br>

[link do projeto 5: Lista de tarefas](https://github.com/N3onKn1gh7/bootcamp-java-2024-dio/tree/main/src/exercicios/collections/set/Pesquisa)<br><br><br>

### Ordenação com Set:<br><br>

<p>
Crie uma classe chamada "GerenciadorAlunos" que irá lidar com uma lista de alunos. Cada aluno terá atributos como nome, matrícula e nota. Implementaremos os seguintes métodos:

- `adicionarAluno(String nome, Long matricula, double media)`: Adiciona um aluno ao conjunto.
- `removerAluno(long matricula)`: Remove um aluno ao conjunto a partir da matricula, se estiver presente.
- `exibirAlunosPorNome()`: Exibe todos os alunos do conjunto em ordem alfabética pelo nome.
- `exibirAlunosPorNota()`: Exibe todos os alunos do conjunto em ordem crescente de nota.
- `exibirAlunos()`: Exibe todos os alunos do conjunto.
</p>

<br>

[link do projeto 6: Gerenciador de alunos](https://github.com/N3onKn1gh7/bootcamp-java-2024-dio/tree/main/src/exercicios/collections/set/Ordenacao)<br><br><br>

### Operações básicas com Map :<br><br>

<p>
Crie uma classe chamada "Dicionario" que utilize um Map para armazenar palavras e suas respectivas definições. Implemente os seguintes métodos:

- `adicionarPalavra(String palavra, String definicao)`: Adiciona uma palavra e sua definição ao dicionário, associando a palavra à sua definição correspondente.
- `removerPalavra(String palavra)`: Remove uma palavra do dicionário, dado o termo a ser removido.
- `exibirPalavras()`: Exibe todas as palavras e suas definições do dicionário, mostrando cada palavra seguida de sua respectiva definição.
- `pesquisarPorPalavra(String palavra)`: Pesquisa uma palavra no dicionário e retorna sua definição correspondente.
</p>

<br>

[link do projeto 7: Dicionário](https://github.com/N3onKn1gh7/bootcamp-java-2024-dio/tree/main/src/exercicios/collections/map/operacoesBasicas)<br><br><br>

### Pesquisa com Map: <br><br>


<p>
Crie uma classe chamada "ContagemPalavras" que utilize um Map para armazenar as palavras e a quantidade de vezes que cada palavra aparece em um texto. Implemente os seguintes métodos:

- `adicionarPalavra(String palavra, Integer contagem)`: Adiciona uma palavra à contagem.
- `removerPalavra(String palavra)`: Remove uma palavra da contagem, se estiver presente.
- `exibirContagemPalavras()`: Exibe todas as palavras e suas respectivas contagens.
- `encontrarPalavraMaisFrequente()`: Encontra a palavra mais frequente no texto e retorna a palavra e sua contagem.
</p>

<br>

[link do projeto 8: Contagem de palavras](https://github.com/N3onKn1gh7/bootcamp-java-2024-dio/tree/main/src/exercicios/collections/map/pesquisa)



