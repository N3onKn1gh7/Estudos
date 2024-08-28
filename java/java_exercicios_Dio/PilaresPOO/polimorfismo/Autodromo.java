package exercicios.PilaresPOO.polimorfismo;

public class Autodromo {
	
	public static void main(String[] args) {
		Carro jeep = new Carro();
		jeep.setChassi("1321651");
	//	jeep.ligar();  
		
		Moto z400 = new Moto();
		z400.setChassi("1651163");
	//	z400.ligar();
		
		//Veiculo coringa = z400; //Polimorfismo
		Veiculo coringa = jeep; //Polimorfismo
		
		coringa.ligar();
	}
	

}
