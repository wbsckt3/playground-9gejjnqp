
function countAllStars(galaxies) {
  var totalStars = 0;
  galaxies.forEach(function(stars) {
    totalStars = stars; // arregla esta línea para acumular en totalStars 
  }, this);
  return totalStars;
}

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
