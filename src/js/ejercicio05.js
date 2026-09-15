import { calcularRendimiento } from '../services/service05.js';

const totalInput = document.querySelector('#totalPreguntas');
const correctasInput = document.querySelector('#respuestasCorrectas');
const form = document.querySelector('#form');
const botonCalcular = document.querySelector('#botonCalcular');

const resultadoDiv = document.createElement("p");
form.appendChild(resultadoDiv);

botonCalcular.addEventListener('click', (evento) => {
  evento.preventDefault();

  const total = parseFloat(totalInput.value);
  const correctas = parseFloat(correctasInput.value);

  if (isNaN(total) || isNaN(correctas) || total <= 0) {
    resultadoDiv.textContent = "Por favor, ingrese valores válidos.";
    return;
  }

  calcularRendimiento(total, correctas, resultadoDiv);
  console.log(resultadoDiv.textContent);
});