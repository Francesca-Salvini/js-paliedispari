// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer 
// (usando una funzione). 
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari 
// (usando una funzione) 
// Dichiariamo chi ha vinto.

// L'utente sceglie pari o dispari 

var pariODispariUtente = prompt("Scegli: pari o dispari?");
console.log(pariODispariUtente);

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
 

// Sommiamo i due numeri (numeroUtente) e (numeroRandomComputer)

function sommaNumeri(numeroUtente, numeroRandomComputer) {
    return(numeroUtente + numeroRandomComputer);
}

var sommaNumeriUtenteEComputer = sommaNumeri(numeroUtente, numeroRandomComputer);
console.log(sommaNumeriUtenteEComputer);

// Stabiamo se la somma dei due numeri è pari o dispari

function valutaPariODispari(sommaNumeriUtenteEComputer){
    var risultato; 

    if(sommaNumeriUtenteEComputer % 2 == 0 ) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

    return risultato;
}

var valutatoPariODispari = valutaPariODispari(sommaNumeriUtenteEComputer);
console.log("La somma dei numeri è " + valutatoPariODispari);

// Dichiariamo chi ha vinto

function valutaChiHaVinto(pariODispariUtente, valutatoPariODispari) {
    
    var valutato;

    if(pariODispariUtente == valutatoPariODispari) {
        valutato = "l'utente ha vinto";
    } else {
        valutato = "il computer ha vinto";
    }

    return valutato;
}

var dichiarazioneVincitore = valutaChiHaVinto(pariODispariUtente, valutatoPariODispari);
console.log(dichiarazioneVincitore);