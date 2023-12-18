// Descrizione:
//chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// Descrizione:

/*
    1- Dichiarare una variabile kilometri
    2- Chiedere i kilometri fatti all'utente
    3- Salvarlo in una variabile

    4- Dichiarare una variabile età
    5- Chiedere l'età all'utente
    6- Salvarlo in una variabile 

    7- Dichiarare una variabile prezzo totale, (0.21 € al km)

    8- applicare sconto 20%, se <18
    9- applicare sconto 40%, se >65
    10- non applicare sconto se non si rientra tra 0-18 e 65-99

    11- vedere solo due decimali

    12-Recuperare l'elemento HTML
    13-Modificare il contenuto
*/

console.log('JS OK');

// PUNTO 1-2-3
const ride = prompt ('Quanti kilometri hai fatto?','10');
console.log(ride);

// PUNTO 4-5-6
const age = prompt ('Quanti anni hai?','25');
console.log(age);

// PUNTO 7
const mul = parseInt(ride) * (0.21);
console.log(mul);

// PUNTO 8-9-10-11
let discount20 = (mul/100) * 80;

let discount40 = (mul/100) * 60;

if (age<18){ 
     console.log("l'utente è minorenne, il prezzo è:" + discount20.toFixed(2));
} else if(age>65){
    console.log("l'utente è senior il prezzo è:" + discount40.toFixed(2));
} else if(age>=18 && age<=65){
    console.log("l'utente non ha sconto");
}

// PUNTO 12-13



