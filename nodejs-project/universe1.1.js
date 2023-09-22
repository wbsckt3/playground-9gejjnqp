function hacerAlgo(callback) {
  // Realiza alguna tarea aquí
  // Llama al callback cuando la tarea esté completa
  // En este ejemplo, solo llamamos al callback sin devolver un valor
  callback();
}

function miCallback() {
  console.log("La tarea se ha completado.");
}

hacerAlgo(miCallback);

// { autofold
module.exports = {
  hacerAlgo: hacerAlgo
};
// }
