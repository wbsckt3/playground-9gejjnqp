var assert = require('assert');
var universe = require('./universe1.1.js');

var reduceUsed = false;
var superReduce = Array.prototype.reduce;
Array.prototype.reduce = function () {
  reduceUsed = true;
  return superReduce.apply(this, arguments);
};

it('should sum stars', function () {
  try {
    assert.equal("", universe.hacerAlgo());

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
