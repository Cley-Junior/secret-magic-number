//let title = document.querySelector("h1");
//title.innerHTML = "Secret Number Game";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Choose a number between 1 and 10: ";

let guessedNumbers = [];
let maxElementList = 10;
newGame();

//Creating Functions
function verifyGuess() {
    let guess = document.querySelector("input").value;
    tries++;
    let triesString = tries > 1 ? "tries" : "try";

    if (guess == magicNumber) {
        changeWindowsText("h1", "You got it!");
        changeWindowsText("p", `You guessed the right in ${tries} ${triesString}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (guess > magicNumber) {
            changeWindowsText("p", "The magic number is below yours.");
        } else {
            changeWindowsText("p", "The magic number is above yours.");
        }
        cleanGuess();
    }
}

function newGame() {
    cleanGuess();
    magicNumber = makeRandomNumber();
    tries = 0;

    changeWindowsText("h1", "Secret Magic Game");
    changeWindowsText("p", "Choose a number between 1 and 10: ");

    document.getElementById("reiniciar").setAttribute("disabled", true)
}

function changeWindowsText(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

function cleanGuess() {
    guess = document.querySelector("input");
    guess.value = "";
}

function makeRandomNumber() {
    let choosenNumber = parseInt(Math.random() * maxElementList + 1);
    let qtdElementsList = guessedNumbers.length;

    if (qtdElementsList == maxElementList) {
        guessedNumbers = [];
    }

    if(guessedNumbers.includes(choosenNumber)){
        return makeRandomNumber();
    } else {
        guessedNumbers.push(choosenNumber);
        return choosenNumber;
    }
}



//ChallengeLv1
/*
function helloWorld() {
    console.log("Olá, mundo!");
}

function helloSomeone(name) {
    console.log(`Olá, ${name}!`);
}

function doubleNum(num) {
    return (Number(num) * 2);
}

function media(num1, num2, num3) {
    return ((Number(num1) + Number(num2) + Number(num3)) / 3);
}

function biggerNum (num1, num2) {
    let bigger = num1 > num2 ? num1 : num2;
    return bigger;
}

function square(num1) {
    return (Number(num1) * Number(num1));
}
*/