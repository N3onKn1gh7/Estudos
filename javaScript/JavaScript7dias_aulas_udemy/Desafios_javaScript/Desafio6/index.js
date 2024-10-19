

let computerNumber;
let userNumbers = [];
let attemps = 0;
let maxGuesses = 10;

function newGame() {
    window.location.reload();
} 


function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1);
    console.log(computerNumber);
}


function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value);
    userNumbers.push(' ' + userNumber);
    document.getElementById('guesses').innerHTML = userNumbers;

    if (attemps < maxGuesses) {

        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu numero é muito alto';
            document.getElementById('inputBox').value = '';
            attemps++
            document.getElementById('attempts').innerHTML = attemps;
        }

        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu numero é muito baixo';
            document.getElementById('inputBox').value = '';
            attemps++
            document.getElementById('attempts').innerHTML = attemps;
        }

        else {
            document.getElementById('textOutput').innerHTML = 'Parabéns você acertou !!!';
            attemps++
            document.getElementById('attempts').innerHTML = attemps;
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly');
        }
    } else {
        document.getElementById('textOutput').innerHTML = 'Você perdeu! O número do computador era: ' + computerNumber;
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly');
    }

}
