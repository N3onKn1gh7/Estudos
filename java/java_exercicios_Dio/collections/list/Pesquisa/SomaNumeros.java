package exercicios.collections.list.Pesquisa;

import java.util.ArrayList;
import java.util.List;

public class SomaNumeros {

    // Atributo
    private List<Numeros> numerosInteirosList;

    // Construtor que ao chamar this.numerosInteirosList, inicializa um Array vazio
    public SomaNumeros() {
        this.numerosInteirosList = new ArrayList<>();
    }

    // Metodo de adicionar numeros
    public void adicionarNumero(int numero) {
        numerosInteirosList.add(new Numeros(numero));
    }

    // Calculando a soma de todos os numeros e retornando o resultado
    public int somarNumeros() {
        int soma = 0;
        for (Numeros n : numerosInteirosList) {
            soma += n.getNumeros();
        }
        return soma;
    }

    // Método para encontrar o maior número na lista
    public int encontrarNumeroMaior() {
        if (numerosInteirosList.isEmpty()) {
            return 0; // ou um valor apropriado para o caso de lista vazia
        }

        int maiorNumero = numerosInteirosList.get(0).getNumeros(); // Inicializa com o primeiro valor da lista
        for (Numeros n : numerosInteirosList) {
            if (n.getNumeros() > maiorNumero) {
                maiorNumero = n.getNumeros();
            }
        }
        return maiorNumero;
    }

    // Método para encontrar o menor numero da lista
    public int encontrarNumeroMenor() {
        if (numerosInteirosList.isEmpty()) {
            return 0; // ou um valor apropriado para o caso de lista vazia
        }

        int menorNumero = numerosInteirosList.get(0).getNumeros(); // Inicializa com o primeiro valor da lista
        for (Numeros n : numerosInteirosList) {
            if (n.getNumeros() < menorNumero) {
                menorNumero = n.getNumeros();
            }
        }
        return menorNumero;
    }

    // Método para exibir todos os numeros presentes na lista
    public void exibirNumeros() {
        if (!numerosInteirosList.isEmpty()) {
            for (Numeros n : numerosInteirosList) {
                System.out.println(n.getNumeros());
            }
        } else {
            System.out.println("A lista está vazia.");
        }
    }

    // Metodo main para testar a classe
    public static void main(String[] args) {
        SomaNumeros somaNumeros = new SomaNumeros();
        somaNumeros.adicionarNumero(10);
        somaNumeros.adicionarNumero(30);
        somaNumeros.adicionarNumero(50);
        
        
        
        System.out.println("A soma de todos os números é: " + somaNumeros.somarNumeros());

        System.out.println("O maior número é: " + somaNumeros.encontrarNumeroMaior());
        System.out.println("O menor número é: " + somaNumeros.encontrarNumeroMenor());
      
        
        // Exibindo todos os números
        somaNumeros.exibirNumeros();

    }
}

