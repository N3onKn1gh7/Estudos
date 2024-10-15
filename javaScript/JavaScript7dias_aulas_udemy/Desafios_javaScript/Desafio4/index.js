
//Melhorando o projeto com a formatação em 2 casas decimais criando a função formatMoney

function formatMoney(value) {
    value = Math.ceil(value * 100)/100 // Melhorando o codigo para dividir o valor corretamente
    value = value.toFixed(2);
    return '$ ' +  value;
}

function formatSplit(value) {
    if (value  == 1) return value + ' person'
    return value + ' people'
}


//Calculadora de gorjetas

function update() {
    let bill = Number(document.getElementById('yourBill').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value;
    console.log({bill, tipPercent, split});

    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %' ;
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue); //adicionando a função formatMoney
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal); //adicionando a função formatMoney
    document.getElementById('splitValue').innerHTML = formatSplit(split);
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split); //adicionando a função formatMoney
}