﻿var assert = require('assert');
var universe = require('./universe5.js');

var reduceUsed = false;
var superReduce = Array.prototype.reduce;
Array.prototype.reduce = function () {
  reduceUsed = true;
  return superReduce.apply(this, arguments);
};

it('should sum stars', function () {
  try {
   assert.deepEqual( ['Galaxy A', 'Galaxy B'], universe.getGalaxyNames([
    { name: 'Galaxy A', stars: 100 },
    { name: 'Galaxy B', stars: 200 }
  ]));

    if (reduceUsed) {
      printMessage('Ok! el uso de map + función flecha para obtener los nombres de las galaxias. 🙏');
    } else {
      printMessage('Bien hecho! 💡');
    }
  } catch (error) {
    printMessage('🤔 💡', 'Si acumulaste todas las estrellas en la variable \'totalStars\'? ');
    throw error;
  }
});

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
