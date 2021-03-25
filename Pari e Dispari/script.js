// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer 
// (usando una funzione). 
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari 
// (usando una funzione) 
// Dichiariamo chi ha vinto.

// L'utente sceglie pari o dispari 

var pariODispariUtente = prompt("Scegli: pari o dispari?");

// L'utente sceglie un numero da 1 a 5 

var numeroUtente = parseInt( prompt("Scegli un numero da 1 a 5") ); 
console.log(numeroUtente);

// Generiamo un numero da 1 a 5 per il computer usando una funzione

function getRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1 ) ) + min;
    return randomNumber;
}

var numeroRandomComputer = getRandomNumber(1, 5);
console.log(numeroRandomComputer);
 

