// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');


  
  async function main() {
    let limite = Number(await ask("Hasta que numero quieres que te muestre numeros pares:"));
    let i = 0;
  
    while (i <= limite) {
      
      if (i % 2 === 0) 
        {
            console.log(i);
        }
        i++; 
    }
    
  

    }
    main();