// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
  Nome : "Gennaro",
  Cognome : "Esposito",
  Età : 22
}

for (var key in studente) {
  document.getElementById("listaStudenti").innerHTML += key + ": " +  studente[key] + "<br>";
  // console.log(studente[key]);
}

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var classe = {
  "studenteUno": {
    Nome : "Gennaro",
    Cognome : "Esposito",
    Età : 22
  },
  "studenteDue": {
    Nome : "Pino",
    Cognome : "Mauro",
    Età : 44
  },
  "studenteTre": {
    Nome : "Clemente",
    Cognome : "Nolente",
    Età : 32
  }
}

for (var key in classe) {
  // console.log(classe[key].nome);
  // console.log(classe[key].cognome);
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// var newName = prompt("Inserisci un nuovo nome");
// var newLastname = prompt("Inserisci un altro cognome");
// var newAge = Number(prompt("Inserisci l'età"));

var classe = {
  "studenteUno": {
    Nome : "Gennaro",
    Cognome : "Esposito",
    Età : 22
  },
  "studenteDue": {
    Nome : "Pino",
    Cognome : "Mauro",
    Età : 44
  },
  "studenteTre": {
    Nome : "Clemente",
    Cognome : "Nolente",
    Età : 32
  },
  // "studenteQuattro": {
  //   Nome : newName,
  //   Cognome : newLastname,
  //   Età : newAge
  // }
}

for (var key in classe) {
  // console.log(classe[key].nome);
  // console.log(classe[key].cognome);
  // console.log(classe[key].età);
}
