//generatore password
//variabile nome utente
var nomeUtente;
//variabile cognome utente
var cognomeUtente;
//variabile colore preferito utente
var coloreUtente
//variabile anno corrente
var annoCorrente = 2020
//variabile anno di nascita dell' utente
var anniUtente
//chiedere nome all'utente
nomeUtente = prompt("Inserisci il tuo nome")
//chiedere cognome all'utente
cognomeUtente = prompt("Inserisci il tuo cognome")
//chiedere colore preferito all'utente
coloreUtente = prompt("Inserisci il tuo colore preferito")
//chiedere gli anni dell'utente all'utente
var anniUtente = prompt("Inserisci la tua età")
//output finale con password
document.getElementById('mio_id').innerHTML = "La tua password è " + nomeUtente + cognomeUtente + coloreUtente + (annoCorrente - anniUtente);
