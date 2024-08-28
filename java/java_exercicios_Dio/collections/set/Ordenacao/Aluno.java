package exercicios.collections.set.Ordenacao;

public class Aluno {


	// atributos
	String nome;
	long matricula;
	double nota;


	// construtor
	public Aluno(String nome, long matricula, double nota2) {
		super();
		this.nome = nome;
		this.matricula = matricula;
		this.nota = nota2;
	}
	
	//Getters e Setters


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public long getMatricula() {
		return matricula;
	}


	public void setMatricula(long matricula) {
		this.matricula = matricula;
	}


	public double getNota() {
		return nota;
	}


	public void setNota(int nota) {
		this.nota = nota;
	}


	//toString 
	
	@Override
	public String toString() {
		return "Aluno [nome=" + nome + ", matricula=" + matricula + ", nota=" + nota + "]";
	}
	
	

}
