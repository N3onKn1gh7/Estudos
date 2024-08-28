package exercicios.streamAPI;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Desafio7 {

	public static void main(String[] args) {
		
		// Criando lista de numeros
		List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3);
		
		//Encontrar o segundo maior numero
		List<Integer> sortedDistinctNumbers = numeros.stream()
				.distinct() //Remove duplicatas
				.sorted(Comparator.reverseOrder())  // Ordena em ordem decrescente
				.collect(Collectors.toList()); //Coleta o stream em uma lista
				
				if (sortedDistinctNumbers.size() > 1) {
					int segundoMaior = sortedDistinctNumbers.get(1); //Obtem o segundo maior numero
					System.out.println("Segundo maior número é: " + segundoMaior);
				}else {
					System.out.println("A lista não contém elementos suficientes para determinar o segundo maior número.");
				}
	}

}
