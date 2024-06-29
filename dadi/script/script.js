/*

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

1 - creo un button con la quale far partire lo script
2 - al click, verranno generati due numeri casuali da 1 a 6 "giocatore" e "avversario"
3 - I due numeri verranno confrontati e il vincitore visualizzerà un messaggio di vittoria nel caso di "giocatore" > "avversario", di sconfitta nel caso "giocatore" < "avversario" e, infine di pareggio se "giocatore" = "avversario"

----------------------------------------------------------------------------------------------------------
*/
//recupero il bottone dal DOM
const play = document.getElementById('play');

play.addEventListener('click', function(){

let giocatore = Math.round(Math.random()*5)+1;
    console.log(giocatore)

let avversario = Math.round(Math.random()*5)+1;
    console.log(avversario)


})