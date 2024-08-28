package projetos.iphone;

public class Sistema {
    public static void main(String[] args) {
        iPhoneOS meuIphone = new iPhoneOS();
        
        // Usando métodos da interface Midia
        meuIphone.tocar();
        meuIphone.pausar();
        
        // Usando métodos da interface Phone
        meuIphone.ligar();
        meuIphone.atender();
        
        // Usando métodos da interface Safari
        meuIphone.exibirPagina();
        meuIphone.adicionarNovaAba();
        meuIphone.atualizarPagina();
    }
}