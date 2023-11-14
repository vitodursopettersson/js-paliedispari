'use strict'

// Chiedere all’utente di inserire una parola
let inputCheckPalindroma = prompt('Inserisci una parola');
console.log(inputCheckPalindroma);

checkParolaPalindroma();

// Creare una funzione per capire se la parola inserita è palindroma
function checkParolaPalindroma() {

    inputCheckPalindroma = inputCheckPalindroma.toLowerCase();

    // Trasformare la stringa in un Array
    const splitString = inputCheckPalindroma.split(''); //Perché non funziona senza virgolette?
    console.log(splitString);

    // Invertire valori
    const reverseArray = splitString.reverse();
    console.log(reverseArray);

    // Trasformare un Array in una stringa
    const joinArray = reverseArray.join('');
    console.log(joinArray);

    // Confronto parola invertita con parola d'origine
    let outputCheckPalindroma
    if (inputCheckPalindroma === joinArray) {
        outputCheckPalindroma = true;
        console.log('La parola è palindroma')
    } else {
        outputCheckPalindroma = false;
        console.log('La parola non è palindroma')

    }

}
