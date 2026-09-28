import { reemplazarSignos } from '../services/service04.js';

let cadena = prompt("Ingrese una cadena de N caracteres impares (dígitos 0-5 intercalados con '?'):");

for(let char of cadena){
    if (char !== '?' && (char < '0' || char > '5')) {
        alert("La cadena ingresada no cumple con el formato requerido. Por favor, ingrese una cadena válida.");
        cadena = prompt("Ingrese una cadena de N caracteres impares (dígitos 0-5 intercalados con '?'):");
        break;
    }
}
let nuevaCadena = reemplazarSignos(cadena);


console.log("Cadena original: " + cadena);
console.log("Cadena resultante: " + nuevaCadena);
alert("Cadena resultante: " + nuevaCadena);