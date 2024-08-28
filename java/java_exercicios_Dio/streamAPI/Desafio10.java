package exercicios.streamAPI;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Desafio10 {

	public static void main(String[] args) {
		// Criar lista de numeros
		
		List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3);
		
		// Agrupar os valores ímpares múltiplos de 3 ou de 5
		List<Integer> imparesMultiplosDe3Ou5 = numeros.stream()
				.filter(n -> n % 2 != 0) //Filtra os numeros ímpares
				.filter(n -> n == 0 || n % 5 == 0) //Filtra os numeros que sao multiplos
				.collect(Collectors.toList()); //Coleta os resultados em uma lista
		
		//Impressão do resultado
		
		System.out.println("Valores impares multiplos de 3 ou de 5: " + imparesMultiplosDe3Ou5);

	}

}
