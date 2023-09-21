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
    assert.deepEqual({ name: 'Galaxy C', stars: 800 }, universe.getGalaxyWithMostStars([
    { name: 'Galaxy A', stars: 100 },
    { name: 'Galaxy B', stars: 200 },
    { name: 'Galaxy C', stars: 800 }
  ]));

    if (reduceUsed) {
      printMessage('Ok! el uso de Reduce + función flecha para obtener un registro. 🙏');
    } else {
      printMessage('Bien hecho!');
    }
  } catch (error) {
    printMessage('🤔 💡', ' \'totalStars\'? ');
    throw error;
  }
});

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
