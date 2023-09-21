const countAllStars = (galaxies) => {
  const totalStars = galaxies.reduce((accumulator, galaxy) => accumulator + galaxy.stars, 0);
  return totalStars;
};

// Ejemplo de uso sobre objetos:  reduce + función flecha
// Recorrer el objeto y sumar las variables es imposible o por lo menos extremadamente dificil con ciclos o index tradicionales
// var galaxies = [
//   { name: 'Galaxy A', stars: 100 },
//   { name: 'Galaxy B', stars: 200 },
//   { name: 'Galaxy C', stars: 300 }
// ];

//console.log(result.totalStars); // Esto imprimirá 600

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
