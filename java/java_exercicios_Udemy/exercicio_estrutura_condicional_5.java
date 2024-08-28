import java.util.Locale;
import java.util.Scanner;

public class exercicio_estrutura_condicional_5 {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		int codigo = sc.nextInt();
		int quantidade = sc.nextInt();
		double total;

		if (codigo == 1) {
			total = quantidade * 4.00;

		}

		else if (codigo == 2) {
			total = quantidade * 4.50;

		}

		else if (codigo == 3) {
			total = quantidade * 5.00;

		}

		else if (codigo == 4) {
			total = quantidade * 2.00;

		}

		else {
			total = quantidade * 1.5;

		}

		System.out.printf("Total: R$ %.2f%n", total);
		sc.close();
	}

}
