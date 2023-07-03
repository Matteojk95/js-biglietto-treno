function submitForm(event) {
    event.preventDefault ();
    let inputchilometri=document.getElementById("inputchilometri").value;
}

function submitForm(event) {
    event.preventDefault ();
    let inputchilometri=document.getElementById("inputetapassenger").value;
}


// chiedo all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (con i prompt() in questo caso)

let numerochilometri= prompt (" inserisci il numero di chilometri che devi fare");
let etapasseggero= prompt ("inserisci la tua età");

numerochilometri=parseInt (numerochilometri);

/*Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
*/


let inputchilometri= document.getElementById("inputchilometri").value;
let etapassenger= document.getElementById("inputetapassenger").value;

let pricevoyage= (inputchilometri *0,21);

if (etapassenger < 18) {
    pricevoyage * 20 / 100
} else if (etapassenger > 65) {
    pricevoyage * 40 / 100
} else {
    pricevoyage
}

console.log ("pricevoyage");