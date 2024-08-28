package exercicios.collections.set.Ordenacao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class GerenciadorAlunos {

	// atributo

	private Set<Aluno> alunoSet;

	// construtor

	public GerenciadorAlunos() {
		this.alunoSet = new HashSet<>();
	}

	// Metodo adicionar aluno

	public void adicionarAluno(String nome, long matricula, double nota) {
		Aluno novoAluno = new Aluno(nome, matricula, nota);
		alunoSet.add(novoAluno);
	}

	// Metodo remover aluno
	public void removerAluno(long matricula) {
		Aluno alunoRemover = null;
		for (Aluno aluno : alunoSet) {
			if (aluno.getMatricula() == matricula) {
				alunoRemover = aluno;
				break;
			}
		}

		if (alunoRemover != null) {
			alunoSet.remove(alunoRemover);
		}
	}

	// Método exibir alunos por nome

	public void exibirAlunosPorNome() {
		List<Aluno> listaAlunos = new ArrayList<>(alunoSet);
		Collections.sort(listaAlunos, Comparator.comparing(Aluno::getNome));
		for (Aluno aluno : listaAlunos) {
			System.out.println(aluno);
		}
	}

	// Metodo exibir alunos por nota

	public void exibirAlunosPorNota() {
		List<Aluno> listaAlunos = new ArrayList<>(alunoSet);
		Collections.sort(listaAlunos, Comparator.comparingDouble(Aluno::getNota));
		for (Aluno aluno : listaAlunos) {
			System.out.println(aluno);
		}
	}

	// metodo exibir alunos
	public void exibirAlunos() {
		for (Aluno aluno : alunoSet) {
			System.out.println(aluno);
		}
	}

	// Método main para testar
	public static void main(String[] args) {
		GerenciadorAlunos gerenciador = new GerenciadorAlunos();

		// Adicionando alunos
		gerenciador.adicionarAluno("Joao", 12345, 8.5);
		gerenciador.adicionarAluno("Maria", 23456, 7.3);
		gerenciador.adicionarAluno("Junior", 34567, 9.1);
		gerenciador.adicionarAluno("Roberto", 45678, 8.0);

		// Exibindo todos os alunos
		System.out.println("Todos os alunos:");
		gerenciador.exibirAlunos();

		// Exibindo alunos por nome
		System.out.println("\nAlunos ordenados por nome:");
		gerenciador.exibirAlunosPorNome();

		// Exibindo alunos por nota
		System.out.println("\nAlunos ordenados por nota:");
		gerenciador.exibirAlunosPorNota();

		// Removendo um aluno
		gerenciador.removerAluno(23456);

		// Exibindo todos os alunos após remoção
		System.out.println("\nTodos os alunos após remoção:");
		gerenciador.exibirAlunos();

	}
}
