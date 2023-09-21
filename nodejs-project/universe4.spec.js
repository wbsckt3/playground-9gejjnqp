﻿var assert = require('assert');
var universe = require('./universe4.js');

var reduceUsed = false;
var superReduce = Array.prototype.reduce;
Array.prototype.reduce = function () {
  reduceUsed = true;
  return superReduce.apply(this, arguments);
};

it('should sum stars', function () {
  try {
    assert.equal(600, universe.countAllStars( [{ 'name': 'Galaxy A', 'stars': 100 },{ 'name': 'Galaxy B', 'stars': 200 },{ 'name': 'Galaxy C', 'stars': 300 }] ));

    if (reduceUsed) {
      printMessage('Ok! el uso de Reduce + función flecha sobre objetos. 🙏');
    } else {
      printMessage('Bien hecho! pero es importante considerar el tiempo de ejecución. Tip 💡', 'Esto puede optimizarse con Reduce y sin ciclos');
    }
  } catch (error) {
    printMessage('🤔 💡', 'Si acumulaste todas las estrellas en la variable \'totalStars\'? ');
    throw error;
  }
});

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
