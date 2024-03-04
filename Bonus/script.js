
const userName = prompt("Ciao, qual'è il tuo nome?");
const userLastName = prompt('Il tuo cognome?');
const userColor = prompt('Il tuo colore preferito?');
const userNumber = prompt('Scegli un numero');
let userNumberAsNumeric = parseInt(userNumber);
const userMessage = `La tua nuova password è: ${userName}${userLastName}${userColor}${userNumberAsNumeric + 23}`;
document.getElementById('result').innerHTML = userMessage;
