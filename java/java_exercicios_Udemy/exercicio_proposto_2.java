import java.util.Locale;
import java.util.Scanner;

public class exercicio_proposto_2 {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		double raio = sc.nextDouble();

		double area = 3.14159 * Math.pow(raio, 2);

		System.out.printf("%f%n",area);
		
		
		sc.close();

	}

}
