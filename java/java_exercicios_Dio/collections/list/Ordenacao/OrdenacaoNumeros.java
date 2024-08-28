package exercicios.collections.list.Ordenacao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class OrdenacaoNumeros {

	// Atributo: Lista de numeros inteiros
	private List<Integer> numeros;

	// Construtor para iniciar a lista
	public OrdenacaoNumeros() {
		this.numeros = new ArrayList<>();
	}

	// Método para adicionar um numero na lista
	public void adicionarNumero(int numero) {
		numeros.add(numero);
	}

	// Método para ordenar a lista em ordem asecendente
	public void ordenarAscendente() {
		Collections.sort(numeros); // O metodo sort da classe collections ordena a lista
	}

	// Método para ordenar a lista em ordem descendente
	public void ordenarDescendente() {
		Collections.sort(numeros, Collections.reverseOrder()); // Metodo reverseOrder de collections para fazer a lista
																// em ordem descendente
	}

	// Método para exibir números da lista
	public void exibirNumeros() {
		for (Integer numero : numeros) {
			System.out.println(numero);
		}
	}

	// Método main para testar a classe
	public static void main(String[] args) {
		OrdenacaoNumeros ordenacaoNumeros = new OrdenacaoNumeros();

		// adicionando numeros na lista
		ordenacaoNumeros.adicionarNumero(10);
		ordenacaoNumeros.adicionarNumero(8);
		ordenacaoNumeros.adicionarNumero(25);
		ordenacaoNumeros.adicionarNumero(12);

		// exibindo numeros antes da ordenacão
		System.out.println("Números antes da ordenação:");
		ordenacaoNumeros.exibirNumeros();

		// Ordenando em ordem ascendente e exibindo
		ordenacaoNumeros.ordenarAscendente();
		System.out.println("Numeros em ordem ascendente:");
		ordenacaoNumeros.exibirNumeros();
		
		// ordenando em ordem descendente e exibindo
		ordenacaoNumeros.ordenarDescendente();
		System.out.println("Números em ordem descendente");
		ordenacaoNumeros.exibirNumeros();
	}

}