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
let arrayRandom = [];
const buttonEl = document.querySelector('button')
const divEl = document.getElementById('number')
console.log(divEl);

buttonEl.addEventListener('click', function(e){
  e.preventDefault();

  //pulisco l'HTML
  divEl.innerHTML = ''

//Genero 5 numeri casuali
function generateNumbersRandom() {
  // Il computer deve generare 5 numeri casuali
  while (arrayRandom.length < 5) {
    let randomNumber = Math.floor(Math.random() * 10)
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
  document.getElementById("number").innerHTML = "";
}, 30000)
 

setTimeout(function() {

  //salvo i numeri inseriti in un array
  const userNumber = [];
  
  //inserisco i numeri memorizzati
  for (let i = 0; i < 5 ; i++) {
    const user = Number(prompt('inserisci i numeri:'))
    userNumber.push(Number(user))
    console.log(userNumber);
  }

  //salvo i numeri corretti in un array
  const correctNumbers = [];
  // stabilisco se i numeri sono corretti
  for (let i = 0; i < 5; i++) {
    if (userNumber.includes(arrayRandom[i])) {
      correctNumbers.push(arrayRandom[i]);
      console.log('Numeri Corretto!!');
    } else{
      console.log('Numeri non corretto!!');
    }
  }

  //Stampo a schermo i numeri corretti
  const resultText = document.createTextNode("Hai indovinato " + correctNumbers.length + " i numeri indovinati sono: " + correctNumbers.join(" , "))
  divEl.append(resultText);
 

  //pulisco html e ricarico la partita
  setTimeout(function () {
    document.getElementById("number").innerHTML = "";
    location.reload();
  }, 10000)
}, 30100);

})





























