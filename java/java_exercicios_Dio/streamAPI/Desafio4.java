package exercicios.streamAPI;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Desafio4 {

	public static void main(String[] args) {
		
		//Criar lista de numerps
		
		List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3);
		
		//Remover todos impares e depois imprimir a lista 
		
		List<Integer> numerosPares = numeros.stream()
				.filter(n -> n % 2 == 0) //Filtra os numeros pares com expressão lambda
				.collect(Collectors.toList()); //Coleta o resultado em uma nova lista
		
		System.out.println("Lista sem valores ìmpares: " + numerosPares);
				
		
	}

}
