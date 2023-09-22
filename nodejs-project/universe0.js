
 function countAllStars(galaxies) {
    var totalStars = 0;
    for (let i = 0; i < galaxies.length; i++) {
      totalStars += galaxies[i];
    }
    return totalStars;
} 

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
