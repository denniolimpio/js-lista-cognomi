// TESTO ESERCIZIO
// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova


// SVOLGIMENTO ESERCIZIO

//Lista cognomi
var list  = ['Adamo', 'Zaccaro', 'Baldi', 'Biondi', 'Verdi', 'Mazza'];
console.log ("Lista di partenza: " + list);

for ( var i = 0; i < list.length; i++) {

}

// variabili
var posizione;


// aggiungo validazione

do {

  // chiedo all'utente di inserire il cognome
  var cognomeUtente = prompt (' Inserisci il tuo cognome');

} while ( cognomeUtente <= 0) {

}

// aggiungo cognome alla lista

list.push (cognomeUtente);

// ordino alfabeticamente elementi lista

list.sort()
console.log("Lista aggiornata e ordinata: " + list);

// posizione cognome utente

var posizione = list.indexOf(cognomeUtente);
console.log( "Posizione elemento utente:  " + (posizione + 1));
