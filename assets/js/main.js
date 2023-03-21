/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato.
*/

//5 numeri casuali
//parte un timer di 30 secondi
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const buttonEl = document.querySelector('button')
const divEl = document.getElementById('number')
console.log(divEl);


buttonEl.addEventListener('click', function(){
  divEl.innerHTML = ''
//5 numeri casuali
function generateNumbersRandom() {
  // Il computer deve generare 5 numeri casuali
  let arrayRandom = [];
  while (arrayRandom.length < 5) {
    let randomNumber = Math.floor(Math.random() * 1000)
    arrayRandom.push(randomNumber);
    
    randomNumber++;
  }
  return arrayRandom
}
// Creo una costante per richiamare la funzione 
let numberRandom = generateNumbersRandom()
console.log(numberRandom);

//Stampo i numeri in pagina
divEl.append(numberRandom)

//rimuovo i numeri casuali dopo 30 secondi
setTimeout(function () {
 
  divEl.remove(numberRandom)
  location.reload();
 }, 30000)
 
})





























