import java.util.Scanner;

public class exercicio_estrutura_condicional_4 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		int horaInicial = sc.nextInt();
		int horaFinal = sc.nextInt();

		int duracao;

		if (horaInicial < horaFinal) {
			duracao = horaFinal - horaInicial;
			
		}

		else {
			duracao = 24 - horaInicial + horaFinal;
		}

		System.out.println("O JOGO DUROU " + duracao + " HORAS(S)");

		sc.close();

	}

}
