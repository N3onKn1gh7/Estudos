package exercicios.collections.map.operacoesBasicas;

import java.util.HashMap;
import java.util.Map;

public class Dicionario {

    // Atributo
    private Map<String, String> dicionarioMap;

    // Construtor
    public Dicionario() {
        this.dicionarioMap = new HashMap<>();
    }

    // Método adicionar palavra
    public void adicionarPalavra(String palavra, String definicao) {
        dicionarioMap.put(palavra, definicao);
    }

    // Método remover palavra
    public void removerPalavra(String palavra) {
        if (!dicionarioMap.isEmpty()) {
            dicionarioMap.remove(palavra);
        }
    }

    // Método exibir palavras
    public void exibirPalavras() {
        System.out.println(dicionarioMap);
    }

    // Método pesquisar por palavra
    public String pesquisarPorPalavra(String palavra) {
        if (dicionarioMap.containsKey(palavra)) {
            return dicionarioMap.get(palavra);
        }
        return "Palavra não encontrada.";
    }

    // Método main para testar a classe
    public static void main(String[] args) {
        // Criação do objeto Dicionario
        Dicionario dicionario = new Dicionario();

        // Adicionando palavras
        dicionario.adicionarPalavra("cachorro", "um mamífero doméstico de quatro patas");
        dicionario.adicionarPalavra("gato", "um pequeno felino doméstico");
        dicionario.adicionarPalavra("java", "uma linguagem de programação orientada a objetos");

        // Exibindo todas as palavras
        System.out.println("Todas as palavras no dicionário:");
        dicionario.exibirPalavras();

        // Pesquisando uma palavra
        System.out.println("\nDefinição de 'java': " + dicionario.pesquisarPorPalavra("java"));

        // Removendo uma palavra
        dicionario.removerPalavra("gato");
        System.out.println("\nApós remover 'gato':");
        dicionario.exibirPalavras();
    }
}

