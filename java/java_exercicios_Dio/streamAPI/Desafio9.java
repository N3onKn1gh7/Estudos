package exercicios.streamAPI;

import java.util.Arrays;
import java.util.List;

public class Desafio9 {

	public static void main(String[] args) {
		
		//Criando lista de numeros
		List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3);
		
		// Verificar se todos os números da lista são distintos (não se repetem)
		boolean todosDistintos = numeros.stream()
				.distinct() // remove elementos duplicados
				.count() == numeros.size(); // Compara o tamanho da lista distinta com o tamanho original
		
		//imprimir resultados
		if (todosDistintos) {
			System.out.println("Todos os números da lista são distintos.");
		}else {
			System.out.println("Existem números repetidos na lista.");
		}

	}

}
