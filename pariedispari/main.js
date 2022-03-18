//utente sceglie pari o dispari
let sceltaUtente = prompt('Comincia il gioco! Scegli e scrivi "pari" oppure "dispari" !');
console.log(`scelta utente è ${sceltaUtente}`);
//utente sceglie un numero da 1 a 5
let numeroUtente = parseInt(prompt('Scegli e digita un numero da 1 a 5'));
console.log(`numero utente è ${numeroUtente}`);
//genero numero random dato un intervallo per il pc
let perNumero = 5
function numeroRandom ( perNumero ){
    let x = Math.floor(Math.random()* perNumero) 
    console.log(`numero random pc è ${x}`)   
    return x
}
//somma numero utente + numero pc e determino se pari o dispari
let somma =numeroUtente + numeroRandom(perNumero)
console.log(`la somma è ${somma}`)
function numeoroPariDispari( somma ){
    if ( somma % 2 == 0 ) { 
        console.log('vince pari')          
        return "pari"
    } else {   
        console.log('vince dispari')         
        return "dispari"
    }
}
//stampo a video risultato
if ( (numeoroPariDispari(somma) == "pari") && (sceltaUtente == "pari") ){
    document.getElementById("target").innerHTML = 'Vince il pari. Hai vinto!'
}else if ( (numeoroPariDispari(somma) == "dispari") && (sceltaUtente == "dispari") ){
    document.getElementById("target").innerHTML = 'Vince il dispari. Hai vinto'
}else if ( (numeoroPariDispari(somma) == "pari") && (sceltaUtente == "dispari") ){
    document.getElementById("target").innerHTML = 'Vince il pari. Hai perso'
}else if ( (numeoroPariDispari(somma) == "dispari") && (sceltaUtente == "pari") ){
    document.getElementById("target").innerHTML = 'Vince il dispari. Hai perso'
}