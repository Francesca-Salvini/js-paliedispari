// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

// step 1 : chiedere all'utente di inserire una parola

var parolaUtente = prompt("Dimmi una parola");

    
for( var i = 0; i < parolaUtente.length; i++ ) {
    // console.log(parolaUtente[i]);
    
    var parolaDritta = parolaUtente[i];
    console.log(parolaDritta);
}


for( var i = parolaUtente.length -1; i >= 0; i-- ) {
    // console.log(parolaUtente[i]);

    var parolaAlContrario = parolaUtente[i];
    console.log(parolaAlContrario); 
}

function valutaSePalindroma() {
    var risultato;

    if(parolaDritta == parolaAlContrario) {
        risultato = "palindroma";
    } else {
        risultato = "non palindroma";
    }

    return risultato;
    
}

var parolaValutata = valutaSePalindroma(parolaUtente);
console.log( "La parola è " + parolaValutata);