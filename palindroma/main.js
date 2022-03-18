//input utente
let inputUtente = prompt('Inserisci una parola o una frase, ti dirò se palindroma o meno!');


//funzione per determinare se palindroma
function palindromo (inputUtente){
    //input utente no spazi
    inputUtente = inputUtente.replace(/\s/g,'');
    console.log(inputUtente);
    //separazione in singole lettere
    let inputUtenteSplit = inputUtente.split('');
    console.log(inputUtenteSplit);
    //inversione lettere
    inputUtenteSplit = inputUtenteSplit.reverse();
    console.log(inputUtenteSplit)
    //unione lettere invertite
    let inputUtenteInvertito = inputUtenteSplit.join('')
    console.log(inputUtenteInvertito)
    //risultati funzione
    if (inputUtente == inputUtenteInvertito) {
        return 'palindroma'
    }else{
        return 'non palindroma'
    }
}
//determino cosa far stampare a video
if ( palindromo(inputUtente) == 'palindroma'){
    document.getElementById("target").innerHTML = 'Sisi, è palindroma!'
}else{
    document.getElementById("target").innerHTML = 'Ops.. non è palindroma!'
}