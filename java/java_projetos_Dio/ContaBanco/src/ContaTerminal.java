import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) {

        int numero;
        String agencia;
        String nomeCliente;
        float saldo;

        Scanner sc = new Scanner(System.in);

        System.out.println("Por favor digite seu nome completo");
        nomeCliente = sc.nextLine();

        System.out.println("Por favor informe o valor do depósito");
        saldo = sc.nextFloat();

        agencia = "067-8";
        numero = 1021;


        System.out.printf("Olá %s, obrigado por criar uma conta em nosso banco. Sua agência é %s, sua conta %d e seu saldo de $ %.2f já esta disponível para saque.%n", nomeCliente, agencia, numero, saldo );

        sc.close();

    }

}


