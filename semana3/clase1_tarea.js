// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

const { ask } = require('../helpers/input');

async function main() {
  const alumnos = [];

  while (true) {
    const nombre = await ask("Nombre del alumno: ");
    const edad = await ask("Edad del alumno: ");
    const calificacion = await ask("Calificación del alumno (0-100): ");

    // Convertir edad y calificación a número
    const edadNum = parseInt(edad);
    const calificacionNum = parseFloat(calificacion);

    // Validar datos
    if (!nombre || isNaN(edadNum) || isNaN(calificacionNum)) {
      console.log("Datos inválidos. Intenta de nuevo.\n");
      continue;
    }

    // Agregar alumno al arreglo
    alumnos.push({
      nombre: nombre,
      edad: edadNum,
      calificacion: calificacionNum
    });

    const continuar = await ask("¿Deseas agregar otro alumno? (sí/no): ");
    const respuesta = continuar.trim().toLowerCase();

    if (respuesta !== 'sí' && respuesta !== 'si') {
      break; // salir del ciclo si no es sí
    }
  }

  

  let aprobados = 0;
  let puedenVotar = 0;
  let suma = 0;
  let max = alumnos[0].calificacion;
  let min = alumnos[0].calificacion;

  for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];

    if (alumno.calificacion >= 70) {
      aprobados++;
    }

    if (alumno.edad >= 18) {
      puedenVotar++;
    }

    suma += alumno.calificacion;

    if (alumno.calificacion > max) {
      max = alumno.calificacion;
    }

    if (alumno.calificacion < min) {
      min = alumno.calificacion;
    }
  }

  const promedio = suma / alumnos.length;

  console.log("\n Resultado del análisis:");
  console.log(`Aprobados: ${aprobados}`);
  console.log(`Las personas que puede votar son en total: ${puedenVotar}`);
  console.log(`Promedio: ${promedio}`);
  console.log(`Calificación más alta: ${max}`);
  console.log(`Calificación más baja: ${min}`);
}

main();
