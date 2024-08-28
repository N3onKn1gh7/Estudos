package exercicios.streamAPI;

import java.util.Arrays;
import java.util.List;

public class Desafio3 {

	public static void main(String[] args) {
		
		
		//criando lista de numeros 
		List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3);

		//Verfica se todos os numeros são positivos
		boolean todosPositivos = numeros.stream()
				.allMatch(n -> n > 0); //Verifica se os numeros são maiores que 0 com expressão lambda
		
		System.out.println("Todos os números são positivos: " + todosPositivos);

	}

}
