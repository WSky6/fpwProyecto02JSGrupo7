let primeraLetra = prompt("Ingresa la primera letra:");
let segundaLetra = prompt("Ingresa la segunda letra:");

if (primeraLetra === null || primeraLetra === "" || segundaLetra === null || segundaLetra === "") {
    alert("No ingresaste las letras correctamente. Recarga la página para volver a intentar.");
} 
else {
    if (primeraLetra < segundaLetra) {
        alert("La letra '" + primeraLetra + "' está ANTES que la '" + segundaLetra + "'.");
    } 
    else if (primeraLetra > segundaLetra) {
        alert("La letra '" + primeraLetra + "' está DESPUÉS de la '" + segundaLetra + "'.");
    } 
    else {
        alert("¡Ingresaste la misma letra!");
    }
}