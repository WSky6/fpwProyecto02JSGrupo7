import { reemplazarSignos } from '../services/service04.js';

let cadena = prompt("Ingrese una cadena de N caracteres impares (dígitos 0-5 intercalados con '?'):");

let nuevaCadena = reemplazarSignos(cadena);

console.log("Cadena original: " + cadena);
console.log("Cadena resultante: " + nuevaCadena);
alert("Cadena resultante: " + nuevaCadena);