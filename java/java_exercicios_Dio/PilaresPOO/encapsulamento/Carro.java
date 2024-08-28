package exercicios.PilaresPOO.encapsulamento;

public class Carro {
	
	public void ligar() {
		
		confereCambio();
		confereCombustivel();
		
		System.out.println("CARRO LIGADO");
	}
	
	private void confereCombustivel() {
		System.out.println("conferindo combustivel");
	}
	
	private void confereCambio() {
		System.out.println("conferindo cambio em P");
	}

}
