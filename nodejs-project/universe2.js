
function countAllStars(galaxies) {
  var totalStars = galaxies.reduce(
     function (accumulator, stars) {
       return accumulator + stars;
     }
  );
  return totalStars;
}

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
