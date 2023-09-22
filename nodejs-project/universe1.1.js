// Definir una función que retorne una promesa con un retraso
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Definir una función asíncrona que usa el retraso
async function myAsyncFunction() {
  console.log('Comenzando tarea asíncrona...');
  await delay(4000); // Espera 2 segundos (2000 milisegundos)
  console.log('Tarea asíncrona completada después de 2 segundos.');
}

// Llamar a la función asíncrona
// myAsyncFunction();


// { autofold
module.exports = {
  myAsyncFunction: myAsyncFunction
};
// }
