// RACCOLGO LE INFORMAZIONI 
// Chiedo il nome
const userName = prompt("Ciao, qual'è il tuo nome?");
// Chiedo il cognome 
const userLastName = prompt('Il tuo cognome?');
// Chiedo il colore preferito
const userColor = prompt('Il tuo colore preferito?');
// PRENDO LE INFORMAZIONI E GENERO LA PASSWORD
const password = `${userName}${userLastName}${userColor}23`;

const userMessage ='La tua nuova password è: ' + password;
// STAMPO IL RISULTATO SU HTML
document.getElementById('password-text').innerHTML = userMessage;
