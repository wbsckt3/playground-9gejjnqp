function countAllStars(galaxies) {
  var totalStars = galaxies.reduce(function (accumulator, galaxy) {
    return accumulator + galaxy.stars;
  });
  return totalStars;
}

// Ejemplo de uso
// var galaxies = [
//   { name: 'Galaxy A', stars: 100 },
//   { name: 'Galaxy B', stars: 200 },
//   { name: 'Galaxy C', stars: 300 }
// ];

//console.log(result.totalStars); // Esto imprimirá 600

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
