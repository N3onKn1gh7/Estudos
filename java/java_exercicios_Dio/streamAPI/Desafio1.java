package exercicios.streamAPI;

import java.util.Arrays;
import java.util.List;

public class Desafio1 {

	public static void main(String[] args) {

		//criar a lista de números
		List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3);
		
		//Ordenar a lista em ordem crescente e xibir no console
		
		numeros.stream() //Converte a lista de numeros em um Stream
		.sorted()  //Ordena os números
		.forEach(System.out::println); //Imprime cada numero

	}

}
