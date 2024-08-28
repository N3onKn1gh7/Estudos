package exercicios.collections.map.pesquisa;

import java.util.HashMap;
import java.util.Map;

public class ContagemPalavras {

    // Atributo
    private Map<String, Integer> palavrasMap;

    // Construtor
    public ContagemPalavras() {
        this.palavrasMap = new HashMap<>();
    }

    // Método adicionar palavra
    public void adicionarPalavra(String palavra, Integer contagem) {
        palavrasMap.put(palavra, palavrasMap.getOrDefault(palavra, 0) + contagem);
    }

    // Método remover palavra
    public void removerPalavra(String palavra) {
        if (!palavrasMap.isEmpty()) {
            palavrasMap.remove(palavra);
        }
    }

    // Método exibir contagem de palavras
    public void exibirContagemPalavras() {
        for (Map.Entry<String, Integer> entry : palavrasMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }

    // Método encontrar palavra mais frequente
    public String encontrarPalavraMaisFrequente() {
        String palavraMaisFrequente = null;
        int contagemMaxima = 0;

        // Iterar sobre o mapa
        for (Map.Entry<String, Integer> entry : palavrasMap.entrySet()) {
            String palavra = entry.getKey();
            int contagem = entry.getValue();

            // Verificar se esta palavra tem uma contagem maior que a contagemMaxima
            if (contagem > contagemMaxima) {
                palavraMaisFrequente = palavra;
                contagemMaxima = contagem;
            }
        }

        return palavraMaisFrequente + ": " + contagemMaxima;
    }

    // Método main para testar
    public static void main(String[] args) {
        ContagemPalavras contagemPalavras = new ContagemPalavras();

        contagemPalavras.adicionarPalavra("exemplo", 3);
        contagemPalavras.adicionarPalavra("teste", 5);
        contagemPalavras.adicionarPalavra("palavra", 2);
        contagemPalavras.adicionarPalavra("exemplo", 1); // Ajustado para incrementar a contagem

        contagemPalavras.exibirContagemPalavras();

        System.out.println("A palavra mais frequente é: " + contagemPalavras.encontrarPalavraMaisFrequente());

        contagemPalavras.removerPalavra("teste");
        contagemPalavras.exibirContagemPalavras();
    }
}
