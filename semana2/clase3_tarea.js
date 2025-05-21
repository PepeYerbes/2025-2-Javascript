// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main() {

    const input = await ask("Ingresa una lista de edades separadas por comas (por ejemplo: 15,22,17,30): ");

  // Convertir el string en un arreglo de números
  const edades = input.split(',');

  
  let puedenVotar = 0;
  for (const edad of edades) {
    if (edad >= 18) {
      puedenVotar++;
    }
  }

  // Mostrar el resultado
  console.log(`Las personas que puede votar son en total: ${puedenVotar}`);
}

main();
