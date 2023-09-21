
function countAllStars(galaxies) {
  var totalStars = galaxies.reduce(function (accumulator, currentGalaxy) {
    return accumulator + currentGalaxy.stars;
  }, 0); // 0 es el valor inicial del acumulador

  return totalStars;
}

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
