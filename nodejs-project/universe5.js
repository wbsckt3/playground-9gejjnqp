function getGalaxyNames(galaxies) {
  return galaxies.map((galaxy) => galaxy.name);
}

/*
const galaxies =  [
    { name: 'Galaxy A', stars: 100 },
    { name: 'Galaxy B', stars: 200 },
    { name: 'Galaxy c', stars: 800 }
  ];  getGalaxyNames(galaxies)
*/
// { autofold
module.exports = {
  getGalaxyNames: getGalaxyNames
};
// }
