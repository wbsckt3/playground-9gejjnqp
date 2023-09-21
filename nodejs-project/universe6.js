function getGalaxyWithMostStars(galaxies) {
  if (galaxies.length === 0) {
    return null; // En caso de que la matriz esté vacía
  }

  return galaxies.reduce((maxGalaxy, currentGalaxy) => {
    if (currentGalaxy.stars > maxGalaxy.stars) {
      return currentGalaxy;
    } else {
      return maxGalaxy;
    }
  });
}

// { autofold
module.exports = {
  getGalaxyWithMostStars: getGalaxyWithMostStars
};
// }
