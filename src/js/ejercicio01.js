function compararLetras() {
    let primeraLetra = document.getElementById("letra1").value;
    let segundaLetra = document.getElementById("letra2").value;
    let textoResultado = document.getElementById("resultado");

    if (primeraLetra === "" || segundaLetra === "") {
        textoResultado.innerText = "Por favor, ingresa ambas letras.";
        return; 
    }

    if (primeraLetra < segundaLetra) {
        textoResultado.innerText = "La letra '" + primeraLetra + "' está ANTES que la '" + segundaLetra + "'.";
    } 
    else if (primeraLetra > segundaLetra) {
        textoResultado.innerText = "La letra '" + primeraLetra + "' está DESPUÉS de la '" + segundaLetra + "'.";
    } 
    else {
        textoResultado.innerText = "¡Ingresaste la misma letra!";
    }
}