package exercicios.collections.set.OperacoesBasicas;

import java.util.HashSet;
import java.util.Set;

public class ConjuntoPalavrasUnicas {

	// Atributo para armazenar o conjunto de palavras
	private Set<String> palavrasUnicas;

	// Contrutor inicializando conjunto vazio
	public ConjuntoPalavrasUnicas() {
		this.palavrasUnicas = new HashSet<>();
	}

	// Métodos para adicionar palavras no conjunto
	public void adicionarPalavra(String palavra) {
		palavrasUnicas.add(palavra);
	}

	// Método para remover uma palavra do cojunto
	public void removerPalavra(String palavra) {
		palavrasUnicas.remove(palavra);
	}

	// Método para verificar se uma palavra está no conjunto
	public boolean verificarPalavra(String palavra) {
		return palavrasUnicas.contains(palavra);
	}

	// Método para exibir todas as palavras
	public void exibirPalavrasUnicas() {
		for (String palavra : palavrasUnicas) {
			System.out.println(palavra);
		}
	}

	public static void main(String[] args) {
		// Criar um objeto da classe
		ConjuntoPalavrasUnicas conjunto = new ConjuntoPalavrasUnicas();

		// Adicionar palavras
		conjunto.adicionarPalavra("Java");
		conjunto.adicionarPalavra("Dio.me");
		conjunto.adicionarPalavra("C#");
		conjunto.adicionarPalavra("Java"); // Palavra duplicada não será adicionada

		// Exibir palavras únicas
		System.out.println("Palavras únicas no conjunto:");
		conjunto.exibirPalavrasUnicas();

		// Verificar se uma palavra está no conjunto
		System.out.println("A palavra 'Dio.me' está no conjunto? " + conjunto.verificarPalavra("Dio.me"));
		System.out.println("A palavra 'html' está no conjunto? " + conjunto.verificarPalavra("html"));

		// Remover uma palavra
		conjunto.removerPalavra("C#");

		// Exibir palavras únicas após a remoção
		System.out.println("Palavras únicas no conjunto após remover 'C#':");
		conjunto.exibirPalavrasUnicas();

	}
}
