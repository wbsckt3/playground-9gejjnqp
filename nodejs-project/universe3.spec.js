﻿var assert = require('assert');
var universe = require('./universe3.js');

var reduceUsed = false;
var superReduce = Array.prototype.reduce;
Array.prototype.reduce = function () {
  reduceUsed = true;
  return superReduce.apply(this, arguments);
};

it('should sum stars', function () {
  try {
    assert.equal(6, universe.countAllStars([1, 2, 3]));
    assert.equal(34, universe.countAllStars( [10, 3, 2, 1, 6, 1, 9, 2]));
    assert.equal(42, universe.countAllStars([20, 20, 2]));

    if (reduceUsed) {
      printMessage('Ok! el uso de función flecha para refactorizar y optimizar el código. La razón por la que utilizar una función flecha puede ser más conveniente en este caso incluye: Sintaxis más concisa: Las funciones flecha tienen una sintaxis más corta y concisa en comparación con las funciones anónimas tradicionales. Esto hace que el código sea más legible y fácil de entender. Contexto léxico: Las funciones flecha capturan el valor this del contexto léxico en el que se definen. Esto evita problemas comunes con this en las funciones tradicionales, lo que puede llevar a errores de programación. Menos código redundante: En el ejemplo anterior, puedes ver que la función flecha permite reducir la cantidad de código necesario para lograr la misma funcionalidad. No necesitas especificar return ni utilizar function varias veces. En resumen, las funciones flecha son una característica de JavaScript que simplifica la escritura de funciones y mejora la claridad del código');
    } else {
      printMessage('Bien hecho! pero es importante considerar el tiempo de ejecución. Tip 💡', 'Esto puede optimizarse sin ciclos para reducir el tiempo de ejecución');
    }
  } catch (error) {
    printMessage('🤔 💡', 'Si acumulaste todas las estrellas en \'totalStars\'? ');
    throw error;
  }
});

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
