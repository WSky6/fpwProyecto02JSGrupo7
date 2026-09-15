export const reemplazarSignos = (cadena) => {
  let resultado = '';

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === '?') {
      let izquierdo = i > 0 ? parseInt(cadena[i - 1]) : 0;
      let derecho = i < cadena.length - 1 ? parseInt(cadena[i + 1]) : 0;
      let suma = izquierdo + derecho;
      resultado += suma;
    } else {
      resultado += cadena[i];
    }
  }

  return resultado;
};