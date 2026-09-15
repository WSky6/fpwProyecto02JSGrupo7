export const calcularRendimiento = (total, correctas, resultadoDiv) => {
  const porcentaje = (correctas / total) * 100;

  let categoria = '';
  if (porcentaje >= 90) {
    categoria = 'Excelente';
  } else if (porcentaje >= 70) {
    categoria = 'Muy Bueno';
  } else if (porcentaje >= 50) {
    categoria = 'Aprobado';
  } else {
    categoria = 'Desaprobado';
  }

  resultadoDiv.textContent = `Porcentaje: ${porcentaje.toFixed(2)}% - Categoría: ${categoria}`;
};