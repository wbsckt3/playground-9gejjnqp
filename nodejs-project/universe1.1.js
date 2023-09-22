function hacerAlgo(callback) {
  // Realiza alguna tarea aquí
  // Llama al callback cuando la tarea esté completa
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
