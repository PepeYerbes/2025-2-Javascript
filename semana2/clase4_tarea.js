//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

async function main() {
  const input = await ask("Ingresa las calificaciones separadas por comas en base a 100: ");
  
  
const calificaciones = input
   .split(',')
   .map(e => parseInt(e.trim(), 10))
   .filter(n => !isNaN(n) && n >= 0 && n <= 100); 


  function analizarCalificaciones(calificaciones) {
    if (calificaciones.length === 0) {
      return null;
    }

    let aprobados = 0;
    let reprobados = 0;
    let suma = 0;
    let max = calificaciones[0];
    let min = calificaciones[0];

    for (const calificacion of calificaciones) {
      if (calificacion >= 70) {
        aprobados++;
      } else {
        reprobados++;
      }

      suma += calificacion;

      if (calificacion > max) max = calificacion;
      if (calificacion < min) min = calificacion;
    }

    const promedio = suma / calificaciones.length;

    return {
      aprobados,
      reprobados,
      promedio,
      max,
      min
    };
  }

  const resultado = analizarCalificaciones(calificaciones);

  
  console.log("\n Resultado del análisis:");
  console.log(`Aprobados: ${resultado.aprobados}`);
  console.log(`Reprobados: ${resultado.reprobados}`);
  console.log(`Promedio: ${resultado.promedio}`);
  console.log(`Calificación más alta: ${resultado.max}`);
  console.log(`Calificación más baja: ${resultado.min}`);
}

main();
