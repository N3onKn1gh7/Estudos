package projetos.bancoDigital;

public class ContaPoupanca extends Conta {

	public ContaPoupanca(Cliente cliente) {
		super(cliente);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void imprimirExtrato() {
		System.out.println("=== Extrato da conta Poupança ===");
		super.imprimirInfosComuns();

	}

}
