import java.util.Locale;
import java.util.Scanner;

public class exercicio_proposto_4 {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        
        int numero = sc.nextInt();
        int horas = sc.nextInt();
        double valor = sc.nextDouble();
        
        double salario = (horas * valor);
        
        System.out.println("NUMBER = " + numero);
        System.out.printf("SALARY = U$ %.2f", salario);
        
        
        sc.close();
		
	}

}
