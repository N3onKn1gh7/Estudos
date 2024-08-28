package exercicios.streamAPI;

import java.util.Arrays;
import java.util.List;

public class Desafio8 {

	public static void main(String[] args) {
		// Criando lista de numeros
		List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3);

		// Somar os dígitos de todos os números da lista
		int somaDosDigitos = numeros.stream()

				.map(n -> String.valueOf(n)) // Converte cada numero para string
				.flatMap(s -> Arrays.stream(s.split(""))) /// divide cada string em digitos individuais
				.mapToInt(Integer::parseInt) // Converte cada digito de volta para inteiro
				.sum(); // soma todos os digitos

		// imprimir resultado
		System.out.println("A soma dos dígitos de todos os números é: " + somaDosDigitos);

	}

}
