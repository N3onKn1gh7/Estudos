package exercicios.collections.set.Pesquisa;

import java.util.HashSet;
import java.util.Set;
import java.util.Iterator;

public class ListaTarefas {

    // Atributo
    private Set<Tarefa> tarefaSet;

    // Construtor
    public ListaTarefas() {
        this.tarefaSet = new HashSet<>();
    }

    // Método adicionar tarefa
    public void adicionarTarefa(String descricao) {
        Tarefa novaTarefa = new Tarefa(descricao, false);
        tarefaSet.add(novaTarefa);
    }

    // Método remover tarefa
    public void removerTarefa(String descricao) {
        Iterator<Tarefa> iterator = tarefaSet.iterator();
        while (iterator.hasNext()) {
            Tarefa t = iterator.next();
            if (t.getDescricao().equals(descricao)) {
                iterator.remove();
                break; // Sai do loop após remover a tarefa
            }
        }
    }

    // Método para exibir todas as tarefas
    public void exibirTarefas() {
        for (Tarefa t : tarefaSet) {
            System.out.println(t);
        }
    }

    // Método para contar o número total de tarefas
    public int contarTarefas() {
        return tarefaSet.size();
    }

    // Método para obter tarefas concluídas
    public Set<Tarefa> obterTarefasConcluidas() {
        Set<Tarefa> concluidas = new HashSet<>();
        for (Tarefa t : tarefaSet) {
            if (t.isConcluida()) {
                concluidas.add(t);
            }
        }
        return concluidas;
    }

    // Método para obter tarefas pendentes
    public Set<Tarefa> obterTarefasPendentes() {
        Set<Tarefa> pendentes = new HashSet<>();
        for (Tarefa t : tarefaSet) {
            if (!t.isConcluida()) {
                pendentes.add(t);
            }
        }
        return pendentes;
    }

    // Método para marcar tarefa como concluída
    public void marcarTarefaConcluida(String descricao) {
        for (Tarefa t : tarefaSet) {
            if (t.getDescricao().equals(descricao)) {
                t.setConcluida(true);
                break;
            }
        }
    }

    // Método para marcar tarefa como pendente
    public void marcarTarefaPendente(String descricao) {
        for (Tarefa t : tarefaSet) {
            if (t.getDescricao().equals(descricao)) {
                t.setConcluida(false);
                break;
            }
        }
    }

    // Método para limpar todas as tarefas
    public void limparListaTarefas() {
        tarefaSet.clear();
    }

    // Método main para testar a classe
    public static void main(String[] args) {
        ListaTarefas lista = new ListaTarefas();

        // Adicionar tarefas
        lista.adicionarTarefa("Estudar Java");
        lista.adicionarTarefa("Fazer exercícios");
        lista.adicionarTarefa("Ler um livro");

        // Exibir todas as tarefas
        System.out.println("Todas as tarefas:");
        lista.exibirTarefas();

        // Marcar tarefa como concluída
        lista.marcarTarefaConcluida("Estudar Java");

        // Exibir tarefas concluídas
        System.out.println("\nTarefas concluídas:");
        Set<Tarefa> concluidas = lista.obterTarefasConcluidas();
        for (Tarefa t : concluidas) {
            System.out.println(t);
        }

        // Exibir tarefas pendentes
        System.out.println("\nTarefas pendentes:");
        Set<Tarefa> pendentes = lista.obterTarefasPendentes();
        for (Tarefa t : pendentes) {
            System.out.println(t);
        }

        // Contar o número total de tarefas
        System.out.println("\nNúmero total de tarefas: " + lista.contarTarefas());

        // Remover uma tarefa
        lista.removerTarefa("Ler um livro");

        // Exibir todas as tarefas após remoção
        System.out.println("\nTodas as tarefas após remoção:");
        lista.exibirTarefas();

        // Limpar todas as tarefas
        lista.limparListaTarefas();

        // Exibir todas as tarefas após limpar
        System.out.println("\nTodas as tarefas após limpar:");
        lista.exibirTarefas();
    }
}