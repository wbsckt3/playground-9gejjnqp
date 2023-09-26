﻿var assert = require('assert');
var universe = require('./universe0.js');

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
      printMessage('Ok! el uso de Reduce 🙏');
      localStorage.setItem("ejercicio0", "ok");
    } else {
      printMessage('Bien hecho! Tip 💡', 'Esto puede optimizarse sin ciclos para el manejo de objetos en react o vue');
    }
  } catch (error) {
    printMessage('🤔 💡', 'Si acumulaste todas las estrellas en la variable \'totalStars\'? ');
    throw error;
  }
});

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
