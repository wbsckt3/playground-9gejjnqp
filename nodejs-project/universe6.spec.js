﻿var assert = require('assert');
var universe = require('./universe6.js');

var reduceUsed = false;
var superReduce = Array.prototype.reduce;
Array.prototype.reduce = function () {
  reduceUsed = true;
  return superReduce.apply(this, arguments);
};

it('should sum stars', function () {
  try {
    assert.equal({ name: 'Galaxy c', stars: 800 }, universe.getGalaxyWithMostStars([
    { name: 'Galaxy A', stars: 100 },
    { name: 'Galaxy B', stars: 200 },
    { name: 'Galaxy c', stars: 800 }
  ]));

    if (reduceUsed) {
      printMessage('Ok! el uso de Reduce para reducir el tiempo de ejecución. 🙏');
    } else {
      printMessage('Bien hecho! pero es importante considerar el tiempo de ejecución. Tip 💡', 'Esto puede optimizarse sin ciclos para reducir el tiempo de ejecución');
    }
  } catch (error) {
    printMessage('🤔 💡', 'Si acumulaste todas las estrellas en la variable \'totalStars\'? ');
    throw error;
  }
});

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
