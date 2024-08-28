package exercicios.streamAPI;

import java.util.Arrays;
import java.util.List;
import java.util.OptionalDouble;

public class Desafio5 {

	public static void main(String[] args) {

		// Criar a lista de números
		List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3);

		// Calcular a media dos números maiores que 5

		OptionalDouble media = numeros.stream().filter(n -> n > 5) // filtra os numeros maiores que 5
				.mapToInt(Integer::intValue) // Converte pata intStream
				.average(); // Calcula a media

		// Imprimir o resultado
		if (media.isPresent()) {// verifica se um valor está presente no Optional. No caso do OptionalDouble,
								// ele retorna true se a média foi calculada (ou seja, se houve algum número
								// maior que 5 na lista) e false se não houve nenhum número maior que 5.
			System.out.println("A média dos números maiores que 5 é: " + media.getAsDouble());
		} else {
			System.out.println("Nenhum número maior que 5 foi encontrado.");

		}

	}
}
