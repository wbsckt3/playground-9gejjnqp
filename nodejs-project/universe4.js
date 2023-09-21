function countAllStars(galaxies) {
  var reduceUsed = false; // Inicializa la variable reduceUsed en false
  var totalStars = galaxies.reduce(function (accumulator, galaxy) {
    reduceUsed = true; // Establece reduceUsed en true
    return accumulator + galaxy.stars;
  }, 0); // 0 es el valor inicial del acumulador

  return { totalStars, reduceUsed }; // Retorna tanto el total de estrellas como el estado de reduceUsed
}

// Ejemplo de uso
var galaxies = [
  { name: 'Galaxy A', stars: 100 },
  { name: 'Galaxy B', stars: 200 },
  { name: 'Galaxy C', stars: 300 }
];

var result = countAllStars(galaxies);
console.log(result.totalStars); // Esto imprimirá 600
console.log(result.reduceUsed); // Esto imprimirá true

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
