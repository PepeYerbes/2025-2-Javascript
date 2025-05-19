const { ask } = require('../helpers/input');

async function main() {
  const nombres = ["Almita", "Luz", "Michell", "Jessica", "Erick", "Esly", "Oscar", "Pepe","Ilse","Alexa","Leonardo","Noemi","Fernanda","Pablo","Uriel"];
  const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  const result = [];

  for (let index1 = 0; index1 < nombres.length; index1++) {
    const primerLetra = nombres[index1][0].toLowerCase();
    if (vocales.includes(primerLetra)) {
      result.push(nombres[index1]);
    }
  }

  console.log(`Los nombres que comienzan con vocal son: ${result.join(", ")}`);
}

main();

