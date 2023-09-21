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


/*
const galaxies =  [
    { name: 'Galaxy A', stars: 100 },
    { name: 'Galaxy B', stars: 200 },
    { name: 'Galaxy c', stars: 800 }
  ];  getGalaxyWithMostStars(galaxies) 
  Retorna:  { name: 'Galaxy c', stars: 800 }
*/

// { autofold
module.exports = {
  getGalaxyWithMostStars: getGalaxyWithMostStars
};
// }
