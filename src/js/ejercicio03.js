let ciudad = prompt("Ingrese una ciudad:");
let pais = prompt("Ingrese un país:");
alert(ciudad + ", " + pais);
alert("La ciudad tiene " + ciudad.length + " caracteres");
alert("El país tiene " + pais.length + " caracteres");
if (ciudad.length > pais.length) {
    alert("La ciudad tiene más caracteres que el país");
} else if (ciudad.length < pais.length) {
    alert("El país tiene más caracteres que la ciudad");
} else {
    alert("La ciudad y el país tienen la misma cantidad de caracteres");
}