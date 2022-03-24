// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km), va applicato uno sconto del 20% per i minorenni, va applicato uno sconto del 40% per gli over 65.

// chiedere all'utente quanti chilometri è lunga la sua tratta
const lunghezza_tratta = parseInt(prompt('Inserisci quani Km devi percorrere'));

// chiedere all'utente l'età
const età_utente = parseInt(prompt('Inserisci la tua età'));

// calcolo prezzo biglietto
const tariffa = 0.21;

let prezzo = (lunghezza_tratta * tariffa).toFixed(2);
console.log(`Prezzo normale :${prezzo}€`);

// calcolo sconto
if (età_utente <= 18) {
    prezzo = (((lunghezza_tratta * tariffa) / 5 ) * 4).toFixed(2);
    console.log(`Prezzo minorenni: ${prezzo}€`);
}