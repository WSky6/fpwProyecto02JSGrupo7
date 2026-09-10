let primeraLetra = prompt("Ingresa la primera letra:");
let segundaLetra = prompt("Ingresa la segunda letra:");

// 2. Verificamos que el usuario no haya cancelado la ventana o dejado el espacio en blanco
if (primeraLetra === null || primeraLetra === "" || segundaLetra === null || segundaLetra === "") {
    alert("No ingresaste las letras correctamente. Recarga la página para volver a intentar.");
} 
else {
    // 3. Comparamos las letras (JS automáticamente sabe que las mayúsculas van antes por su valor ASCII)
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