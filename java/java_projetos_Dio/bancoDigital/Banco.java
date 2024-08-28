package projetos.bancoDigital;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Banco {

	//atributos
	private String nome;
	private List<Conta> contas;
	private Set<Cliente> clientes; //Lista para armazenar os clientes 
	
	//construtor

	public Banco(String nome) {
		this.nome = nome;
		this.contas = new ArrayList<>();
		this.clientes = new HashSet<>(); //Lista para armazenar os clientes
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Conta> getContas() {
		return contas;
	}

	public void setContas(List<Conta> contas) {
		this.contas = contas;
	}
	
	//adiciona uma conta ao banco e ao conjunto de clientes
	
	public void adicionarConta(Conta conta) {
		this.contas.add(conta);
		this.clientes.add(conta.getCliente());
	}
	
	//Lista todos os clientes
	
	public void listarClientes() {
		System.out.println("===Lista de Clientes===");
		for (Cliente cliente : clientes) {
			System.out.println(cliente.getNome());
		}
	}


}
