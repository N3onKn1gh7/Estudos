import java.util.Locale;
import java.util.Scanner;

public class exercicio_proposto_5 {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		int codigo1, codigo2, quant1, quant2;
		double valor1, valor2;
		double total;

		codigo1 = sc.nextInt();
		quant1 = sc.nextInt();
		valor1 = sc.nextDouble();

		codigo2 = sc.nextInt();
		quant2 = sc.nextInt();
		valor2 = sc.nextDouble();

		total = (quant1 * valor1) + (quant2 * valor2);

		System.out.printf("VALOR A PAGAR: R$ %.2f%n", total);

		sc.close();

	}

}
