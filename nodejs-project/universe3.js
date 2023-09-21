const countAllStars = (galaxies) => {
  const totalStars = galaxies.reduce((accumulator, stars) => accumulator + stars, 0);
  return totalStars;
};

// galaxies = [10, 3, 2, 1, 6, 1, 9, 2]
// countAllStars(galaxies)

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
