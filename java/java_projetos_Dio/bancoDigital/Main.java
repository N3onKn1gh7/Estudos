package projetos.bancoDigital;

public class Main {

    public static void main(String[] args) {

        // Cria uma instância do banco
        Banco banco = new Banco("Banco Digital");

        // =========================================================

        // Cria um novo cliente chamado Marcos
        Cliente marcos = new Cliente();
        marcos.setNome("Marcos");

        // Cria contas para o cliente Marcos
        Conta ccMarcos = new ContaCorrente(marcos);
        Conta poupancaMarcos = new ContaPoupanca(marcos);

        // adiciona contas do Marcos ao banco
        banco.adicionarConta(ccMarcos);
        banco.adicionarConta(poupancaMarcos);

        // =========================================================

        // Cria um novo cliente chamado Maria
        Cliente maria = new Cliente();
        maria.setNome("Maria");

        // Cria contas para o cliente Maria
        Conta ccMaria = new ContaCorrente(maria);
        Conta poupancaMaria = new ContaPoupanca(maria);

        // adiciona contas da Maria ao banco
        banco.adicionarConta(ccMaria);
        banco.adicionarConta(poupancaMaria);

        // =========================================================

        // Cria um novo cliente chamado Luiz
        Cliente luiz = new Cliente();
        luiz.setNome("Luiz Inácio");

        // Cria contas para o cliente Luiz
        Conta ccLuiz = new ContaCorrente(luiz);
        Conta poupancaLuiz = new ContaPoupanca(luiz);

        // adiciona contas do Luiz ao banco
        banco.adicionarConta(ccLuiz);
        banco.adicionarConta(poupancaLuiz);

        // =========================================================

        // Lista de Clientes
        banco.listarClientes();

        // =========================================================

        // Realiza operaçoes de deposito e transferencia do cliente Marcos
        ccMarcos.depositar(100);
        ccMarcos.transferir(50, poupancaMarcos);

        // Imprime os extratos das contas de Marcos
        ccMarcos.imprimirExtrato();
        poupancaMarcos.imprimirExtrato();

        // =========================================================

        // Realiza operaçoes de deposito e transferencia do cliente Maria
        ccMaria.depositar(200);
        ccMaria.transferir(70, poupancaMaria);

        // Imprime os extratos das contas de Maria
        ccMaria.imprimirExtrato();
        poupancaMaria.imprimirExtrato();

        // ============================================================

        // Realiza operaçoes de deposito e transferencia do cliente Luiz
        try {
            ccLuiz.depositar(500000000);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        try {
            ccLuiz.transferir(500000000, poupancaLuiz);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        // Imprime os extratos das contas de Luiz
        ccLuiz.imprimirExtrato();
        poupancaLuiz.imprimirExtrato();

        // ===============================================================

        // Testando as validaçoes da classe Conta

        try {
            ccMarcos.sacar(200); // Tentativa de saque de 200, deve lançar exceção
        } catch (Exception e) {
            System.out.println(e.getMessage()); // Exibe a mensagem da exceção
        }

        try {
            ccMarcos.depositar(-50); // Tentativa de depósito de valor negativo, deve lançar exceção
        } catch (Exception e) {
            System.out.println(e.getMessage()); // Exibe a mensagem da exceção
        }

        try {
            ccMarcos.transferir(0, poupancaMarcos); // Tentativa de transferência de 0, deve lançar exceção
        } catch (Exception e) {
            System.out.println(e.getMessage()); // Exibe a mensagem da exceção
        }

        try {
            ccMarcos.transferir(1000, poupancaMarcos); // Tentativa de transferência de 1000, deve lançar exceção
        } catch (Exception e) {
            System.out.println(e.getMessage()); // Exibe a mensagem da exceção
        }
    }
}
