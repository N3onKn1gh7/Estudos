/*Crie uma classe para representar  pessoas,
Para cada pessoa teremos os atributos nome, peso e altura.
as pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / (altura * altura))
Intancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça para jose dizer seu
indice de IMC*/

class Pessoa {
    nome;
    peso;
    alura;


    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura)
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc > 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc > 25 && imc < 30) {
            return ('Acima do peso');
        } else if (imc > 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade grave');
        }
    }
}

const jose = new Pessoa('jose', 70, 1.75);
console.log(jose);
console.log(jose.calcularImc());