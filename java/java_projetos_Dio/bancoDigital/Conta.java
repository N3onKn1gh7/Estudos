package projetos.bancoDigital;

public abstract class Conta implements IConta {

	// Constante pa a agencia padrao
	protected static final int AGENCIA_PADRAO = 1;

	// variavel estática para gerar numeros das contas sequenciais
	private static int SEQUENCIAL = 1;

	// atributos privados para o encapsulamento
	private int agencia;
	private int numero;
	private double saldo;
	private Cliente cliente;

	// Construtor da classe conta iniciando os valores
	public Conta(Cliente cliente) {
		this.agencia = Conta.AGENCIA_PADRAO;// define a agencia padrao
		this.numero = SEQUENCIAL++;// Gera um numero da conta sequencial
		this.cliente = cliente; // Associa um cliente à conta
	}

	// Método para sacar um valor da conta

	@Override
	public void sacar(double valor) {
		// Validação para garantir que o saque não excede o saldo
		if (valor > 0 && valor <= saldo) {
			saldo -= valor;// subtrai o valor do saldo
		} else {
			throw new IllegalArgumentException("Valor inválido para saque"); // Lança uma exceção se a validação falhar
		}

	}

	// Método para depositar um valor na conta

	@Override
	public void depositar(double valor) {
	    // Validação para garantir que o depósito é positivo
	    if (valor <= 0) {
	        throw new IllegalArgumentException("Valor inválido para depósito");
	    } else if (valor > 50000) {
	        throw new IllegalArgumentException("Deposito em espécie acima de R$50.000,00 - Dados da transação sendo enviados para COAF");
	    } else {
	        saldo += valor; // Adiciona o valor ao saldo
	    }
	}

	// Método para transferir um valor para outra conta
	@Override
	public void transferir(double valor, IConta contaDestino) {
		// Validação para garantir que o valor de transferência é válido e não excede o
		// saldo
		if (valor > 0 && valor < saldo) {
			this.sacar(valor);// realiza o saca da conta
			contaDestino.depositar(valor);// Deposita no destino

		} else {
			throw new IllegalArgumentException("Saldo insuficiente para transferencia");
		}

	}

	// Getters para acessar os atribupos encapsulados

	public int getAgencia() {
		return agencia;
	}

	public int getNumero() {
		return numero;
	}

	public double getSaldo() {
		return saldo;
	}

	public Cliente getCliente() {
		return cliente;
	}

	// Método protegido para imprimir informações comuns da conta
	protected void imprimirInfosComuns() {
		System.out.println(String.format("Titular %s", this.cliente.getNome()));
		System.out.println(String.format("Agencia %d", this.agencia));
		System.out.println(String.format("Conta %d", this.numero));
		System.out.println(String.format("Saldo %.2f", this.saldo));
	}

}
