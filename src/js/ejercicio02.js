const base = prompt("Ingrese la base del triángulo:");
const altura = prompt("Ingrese la altura del triángulo:");

//Calcular area de un triángulo a partir de su base y altura.
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

if (isNaN(base) || isNaN(altura)) {
    alert("Por favor, ingrese valores numéricos válidos para la base y la altura.");
} else {
    const area = calcularAreaTriangulo((base), (altura));
    alert("El área del triángulo es: " + area);
    console.log("El área del triángulo es: " + area);
}