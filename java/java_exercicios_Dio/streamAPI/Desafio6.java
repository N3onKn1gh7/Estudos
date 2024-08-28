package exercicios.streamAPI;

import java.util.Arrays;
import java.util.List;

public class Desafio6 {

	public static void main(String[] args) {
		
		//criar lista de numeros
		List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3, 12);
		
		// Verificar se a lista contém algum número maior que 10
		
		boolean contemMaiorQue10 = numeros.stream()
				.anyMatch(n -> n > 10); //Retorna um True se qualquer elemento da condição atender a condição
		
		//Imprimir resultado
		if (contemMaiorQue10) { // Armazena o resultado da verificação
			System.out.println("Alista contém pelo menos um número maior que 10");
		}else {
			System.out.println("Alista nao tem nenhum número maior que 10");
		}

	}

}
