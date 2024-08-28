package exercicios.streamAPI;

import java.util.Arrays;
import java.util.List;

public class Desafio2 {

	public static void main(String[] args) {
		
		//criando a lista de numeros
		
		List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3);
		
		//Calcular a soma dos numeros pares e exibir no console
		
		int somaPares = numeros.stream()

				.filter(n -> n % 2 == 0) //filtra os numeros pares
				.mapToInt(Integer::intValue) //converte para intStream
				.sum(); //soma todos os numeros
		
		System.out.println("A soma dos numeros pares é: " + somaPares);
	}

}
