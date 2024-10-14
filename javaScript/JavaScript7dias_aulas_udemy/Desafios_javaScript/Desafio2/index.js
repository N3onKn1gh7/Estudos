

document.addEventListener('DOMContentLoaded', function () {
    let productValue = Number(prompt('Enter the product value: '));

    if (productValue >= 20) {
        document.getElementById('result').innerHTML = 'Approved';
    }
    else {
        document.getElementById('result').innerHTML = 'Denied';
    }

});


/*Nesse exercicio, foi necessario criar o evento 'DOMContentLoaded' para garantir que
o DOM fosse carregado completamente antes de tentar manipular os elementos, sem isso
a resposta de 'result' denien ou approved nao aparece*/