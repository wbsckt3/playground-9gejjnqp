
// Supongamos un arreglo que nos indica el  número de estrellas por galaxia = [10, 3, 2, 1, 6, 1, 9, 2]

function countAllStars(galaxies) {
  var totalStars = 0;
  galaxies.forEach(function(stars) {
    totalStars = stars; // fix me
  }, this);
  return totalStars;
}

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
