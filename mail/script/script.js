/*
Mail
Chiedi all’utente la sua email (tramite prompt o input, a voi la scelta),
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

1 - Chiedere all'utente la mail tramite l'utilizzo di input.
     ci sarà dunque la variabile "user_mail" che prenderà al, click di un pulsante, il valore inserito dall'utente.

2 - Creare un array che contenga al suo interno tutte le mail degli utenti che possono accedere 
     Ci sarà dunque la variabile "registered_users" che avrà come valore l'array

3 - Avviare tramite ciclo un controllo che confronterà "user_mail" con ogni dato contenuto nell'array e, qualora il dato non dovesse trovare un valore uguale a se stesso, verrà stampato un messaggio che nega l'accesso. OPPURE uno di avvenuto accesso al sito
*/

//--------------------------------------------------------------------

// Richiamo nel codice il bottone che avvierà lo script:

const button = document.getElementById('send');

// Faccio in modo che lo script, al click del bottone raccolga i dati inseriti dall'utente

button.addEventListener('click', function(){
    let user_mail = document.getElementById("user_mail").value;
    console.log(user_mail);


//Creo una lista di utenti che possono accedere:

    let registered_users = ['giacomino-js@gmail.com', 'fragolino-html@gmail.com', 'arraystudent@gmail.com', 'momemagnotutto@gmail.com', 'antonello@gmail.com'];
    console.log(registered_users);

// controllo che l'utente che tenta di accedere faccia parte della lista:
    let message;

    for (let i=0; i < registered_users.length; i++){
        
        if (registered_users[i] === user_mail){
            message = 'Bentornato, stai per entrare nel sito..';
            console.log(message);
            break;
        }   else {
            message = 'Forse hai sbagliato a scrivere? Non risulti registrato. Riprova!'
            console.log(message)
            break;
        }
    }

    document.getElementById("target").innerText = message;

})