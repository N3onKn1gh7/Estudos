import java.util.Scanner;

public class exercicio_estrutura_condicional_1 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		int numero = sc.nextInt();

		if (numero >= 0) {''
			System.out.println("NAO NEGATIVO");
		}

		else {
			System.out.println("NEGATIVO");
		}
		sc.close();
	}

}
