package exercicios.PilaresPOO.heranca;

public class Autodromo {
	
	public static void main(String[] args) {
		Carro jeep = new Carro();
		jeep.setChassi("1321651");
		jeep.ligar();
		
		Moto z400 = new Moto();
		z400.setChassi("1651163");
	}
	

}