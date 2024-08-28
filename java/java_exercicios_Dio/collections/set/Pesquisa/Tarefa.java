package exercicios.collections.set.Pesquisa;

public class Tarefa {

	// Atributos

	private String descricao;
	private boolean concluida;

	// Construtor

	public Tarefa(String descricao, boolean concluida) {
		this.descricao = descricao;
		this.concluida = concluida;

		
		
	//Getters e Setters	
		
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public boolean isConcluida() {
		return concluida;
	}

	public void setConcluida(boolean concluida) {
		this.concluida = concluida;
	}

	@Override
	public String toString() {
		return "Tarefa [descricao=" + descricao + ", concluida=" + concluida + "]";
	}
}


