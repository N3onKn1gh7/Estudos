package projetos.iphone;

public class iPhoneOS implements Midia, Phone, Safari {
    
    public void tocar() {
        selecionarMusica(); // Não é necessário que alguém veja a música sendo selecionada além do usuário
        System.out.println("Tocando música");
    }
    
    public void pausar() {
        System.out.println("Pausando música");
    }
    
    private void selecionarMusica() {
        System.out.println("Selecionando música");
    }
    
    public void ligar() {
        System.out.println("Fazendo ligação");
    }
    
    public void atender() {
        iniciarCorreioVoz(); // Não é necessário que terceiros ouçam a conversa
        System.out.println("Atendendo ligação");
    }
    
    private void iniciarCorreioVoz() {
        System.out.println("Conversando");
    }
    
    public void exibirPagina() {
        System.out.println("Exibindo página Web");
    }
    
    public void adicionarNovaAba() {
        System.out.println("Exibindo nova aba");
    }
    
    public void atualizarPagina() {
        System.out.println("Atualizando página");
    }
}