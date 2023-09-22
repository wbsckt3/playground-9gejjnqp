
 function countAllStars(galaxies) {
    var totalStars = 0;
    for (let i = 0; i < galaxies.length; i++) {
      totalStars += galaxies[i];
    }
    return totalStars;
} 

/*
var resultado = countAllStars(galaxies)
document.write(resultado);
// test de velocidad:
var i = 0;
galaxies = Array.apply(null, Array(10000)).map(function () { return ++i });
var count = 10000;
var start = new Date();
for (i = 0; i < count; i++) countAllStars(galaxies, 9999);
var milliseconds = (new Date()) - start;
document.write("  tiempo en ms: " + milliseconds);
*/

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
