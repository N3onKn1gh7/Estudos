/*Crie ema classe para representar carros
Os carros possuem marca, uma cor e um gasto medio de combustivel por 
kilometro rodado. 
Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos dê
o valor em reais para realizar o percurso */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;


    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoPercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm  * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoPercurso(70, 5));

const palio = new Carro('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoPercurso(70, 5));



