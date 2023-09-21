const countAllStars = (galaxies) => {
  const totalStars = galaxies.reduce((accumulator, stars) => accumulator + stars, 0);
  return totalStars;
};

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
