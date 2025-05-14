// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

async function main() {
  const dia = Number(await ask("Cual es el dia de tu nacimiento:"));
  const mes = Number(await ask("Cual es el mes de tu nacimiento (1-12):")) - 1; // Meses en JavaScript van de 0 a 11
  const anio = Number(await ask("Cual es el año de tu nacimiento:"));

  const fechaNacimiento = new Date(anio, mes, dia);
  const fechaActual = new Date();

  
  const diferenciaTiempo = fechaActual - fechaNacimiento;

  // Convertir la diferencia a días, meses y años
  const diasVividos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
  const aniosVividos = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  const mesesVividos = aniosVividos * 12 + (fechaActual.getMonth() - fechaNacimiento.getMonth());

  console.log(`Tu fecha de nacimiento es: ${dia}/${mes + 1}/${anio}`);
  console.log(`Has vivido aproximadamente:`);
  console.log(`- ${diasVividos} días`);
  console.log(`- ${mesesVividos} meses`);
  console.log(`- ${aniosVividos} años`);
}

main();