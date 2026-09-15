import { calcularAreaTriangulo } from '../services/service02.js';

const base = parseFloat(prompt("Ingrese la base del triángulo:"));
const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

if (isNaN(base) || isNaN(altura)) {
    alert("Por favor, ingrese valores numéricos válidos para la base y la altura.");
} else {
    const area = calcularAreaTriangulo((base), (altura));
    alert("El área del triángulo es: " + area);
    console.log("El área del triángulo es: " + area);
}