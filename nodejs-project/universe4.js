const countAllStars = (galaxies) => {
  const totalStars = galaxies.reduce((accumulator, galaxy) => accumulator + galaxy.stars, 0);
  return totalStars;
};

// Ejemplo de uso sobre objetos:  reduce + función flecha
// Recorrer el objeto y sumar las variables es imposible o por lo menos extremadamente dificil con ciclos o index tradicionales
// const countAllStars = (galaxies) => {
//   const totalStars = galaxies.reduce((accumulator, galaxy) => accumulator + galaxy.stars, 0);
//   return totalStars;
// };    var galaxies = [
//         { name: 'Galaxy A', stars: 100 },
//         { name: 'Galaxy B', stars: 200 },
//         { name: 'Galaxy C', stars: 300 }
//  ];  countAllStars( galaxies )

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
