// Definir una función que retorne una promesa con un retraso
function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

function myAsyncFunction() {
  console.log('Comenzando tarea asíncrona...');
  return delay(2000).then(function () {
    console.log('Tarea asíncrona completada después de 2 segundos.');
  });
}

// Llamar a la función asíncrona
// myAsyncFunction();


// { autofold
module.exports = {
  myAsyncFunction: myAsyncFunction
};
// }
