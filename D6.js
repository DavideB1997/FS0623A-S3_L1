/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

// let stringa1 = "questa è una stringa"
// let stringa2 = "ma anche questa è una stringa"

// stringaFusa= fusioneStringhe(stringa1,stringa2)
// console.log(stringaFusa)

// function fusioneStringhe (stringa1,stringa2) {
//   parte1 = stringa1.slice(0,2)
//   parte2 = stringa2.slice(stringa2.length-3 , stringa2.length)

//   stringaFusa = parte1.concat(parte2)
//   return stringaFusa
// }

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

randomArray = randomizerArray()
console.log(randomArray)

function randomizerArray(){
  const arrayRandom = []
  
  for(let i=0; i <= 9;i++){
    randomNumber = Math.floor(Math.random()*101)
    arrayRandom.push(randomNumber)
  }
  return arrayRandom
}



/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
/*sto utilizzando l'array randomizzato creato nell'esercizio n2*/

// const arrayFiltratoEven = randomArray.filter(numero => numero%2 == 0)
// console.log(arrayFiltratoEven)


/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

// arraySomma = funzioneSomma(randomArray)
// console.log(arraySomma)

// function funzioneSomma(array){
//   let totale = 0
//   array.forEach(numero => {
//     totale+=numero;
//   });
//   return totale
// }



/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

// arraySommaReduce = randomArray.reduce((totale,numero)=> totale+numero)
// console.log(arraySommaReduce)



/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

// arrayIncrementato = incremento(randomArray)
// console.log(arrayIncrementato)


// function incremento(array){
//   let randomNumber = Math.floor(Math.random()*101)
//   console.log(randomNumber)
  
//   arrayIncrementato = array.map((numero) => numero+randomNumber);
//   return arrayIncrementato
// }


/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

// const arrayStringhe =["bombetta","razzo","scarso","torretta","odio"]
// const arrayNumeroStringhe = arrayStringhe.map((elemento) => elemento.length)
// console.log(arrayNumeroStringhe)


/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

// const arrayFiltratoOdd = arrayFiltroOdd(randomArray)
// console.log(arrayFiltratoOdd)

// function arrayFiltroOdd(array){
//   const arrayFiltratoOdd=[];
//   array.forEach(numero => { 
//   if(numero%2!==0){
//       arrayFiltratoOdd.push(numero)
//     } 
//   });
//   return arrayFiltratoOdd
// }



/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

// filmvecchio = mostOld(movies)
// console.log(filmvecchio)

// function mostOld(array){
//   const anni = []
//   array.forEach(element => {
//     anni.push(element.Year) 
//   })
//   annoMinimo = Math.min(...anni)
//   film = array.find(film => film.Year == annoMinimo)
//   return film;
// }


/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

// let numeroFilm = contaFilm(movies)
// console.log(numeroFilm)

// function contaFilm(array){
//   let numero = 0
//   array.forEach(elemento => {
//     numero++
//   });
//   return numero;
// }

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

// const titoliFilm = []

// cercaSoloTitoli = soloTitoli(movies)
// console.log(cercaSoloTitoli)

// function soloTitoli(array){
//   const titoliFilm=[]
//   array.forEach(movie => {
//     titoliFilm.push(movie.Title) 
//   });
//   return titoliFilm;
// }

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

// const filmMillennio = movies.filter(movie => movie.Year>=2000 )
// console.log(filmMillennio)


/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

// totaleAnni = totaleAnni(movies)
// console.log(totaleAnni)

// function totaleAnni(array){
//   arrayAnni = []

//   array.forEach(movie => {
//     arrayAnni.push(Number(movie.Year))
//   });

//   totaleAnni = arrayAnni.reduce((totale, anno) => totale += anno)
//   return totaleAnni
// }



/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

// let id = "tt4154796"
// film = movies.find(movie => movie.imdbID == id)
// console.log(film)



/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
// let parametro = 2012
// film = movies[movies.findIndex(movie => movie.Year == parametro)]


// console.log(film)

