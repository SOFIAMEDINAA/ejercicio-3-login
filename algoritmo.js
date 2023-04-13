const BINGO_PRIMER_PREMIO = 939;
const BINGO_SEGUNDO_PREMIO = 39;

let numerosDelBingo= prompt ("danos tus numeros");

if (BINGO_PRIMER_PREMIO == numerosDelBingo) {
      document.write ("GANASTE EL PRIMER PREMIO FELICIDADES ")  
} else if ( BINGO_SEGUNDO_PREMIO == numerosDelBingo) {
    document.write ("GANASTE EL SEGUNDO PREMIO FELICIDADES")
} else {
    alert ("Felicidades ganas un helado !")
}