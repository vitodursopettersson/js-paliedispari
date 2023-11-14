'use strict'

// L’utente sceglie pari o dispari
let sceltaUtente
do {
    sceltaUtente = prompt('Scegli tra pari o dispari');
    sceltaUtente = sceltaUtente.toLowerCase();

    if (sceltaUtente === 'pari') {
        console.log(`Hai scelto ${sceltaUtente}`);
    } else if (sceltaUtente === 'dispari') {
        console.log(`Hai scelto ${sceltaUtente}`);
    } else {
        alert('Scrivi "pari" o "dispari"');
    }
} while (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') { }

// L'utente inserisce un numero da 1 a 5
let numeroUtente
do {
    numeroUtente = Number(prompt('Inserisci un numero da 1 a 5'));
    if (numeroUtente > 5) {
        alert('Il numero che hai inserito è maggiore di 5');
    } else if (numeroUtente === 0)
        alert('Il numero non è compreso tra 1 a 5')
    else if (isNaN(numeroUtente)) {
        alert('Il numero che hai inserito non è valido')
    } else {
        console.log(`Il tuo numero è: ${numeroUtente}`)
    }
} while (numeroUtente === 0 || numeroUtente > 5 || isNaN(numeroUtente))

// Genera un numero random da 1 a 5
function generazioneNumeroRandom() {
    const numeroRandom = Math.floor(Math.random() * 5) + 1;
    console.log(`Il computer ha scelto: ${numeroRandom}`);
    return numeroRandom;
}

// Somma i due numeri
const sommaNumeri = numeroUtente + generazioneNumeroRandom();
console.log(`La somma dei due numeri è: ${sommaNumeri}`)


// Stabilire se la somma dei due numeri è pari o dispari
function stabilireValoreNumero() {
    let valoreNumero
    if (sommaNumeri % 2 === 0) {
        console.log('Il numero ottenuto è pari');
        valoreNumero = 'pari'
    } else {
        console.log('Il numero è dispari');
        valoreNumero = 'dispari'
    }
    return valoreNumero
}



// Dichiarazione di chi ha vinto
if (sceltaUtente === stabilireValoreNumero()) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso...');
}