import java.util.Scanner;

public class exercicio_estrutura_condicional_3 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		int A = sc.nextInt();
		int B = sc.nextInt();

		if (A % B == 0 || B % A == 0) {
			System.out.println("Sao multiplos");
		}

		else {
			System.out.println("Nao sao Multiplos");
		}

		sc.close();
	}

}
