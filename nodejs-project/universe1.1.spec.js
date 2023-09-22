var assert = require('assert');
var universe = require('./universe1.1.js');
    const { expect } = require('chai');

var reduceUsed = false;
var superReduce = Array.prototype.reduce;
Array.prototype.reduce = function () {
  reduceUsed = true;
  return superReduce.apply(this, arguments);
};

it('should sum stars', function () {
  try {
      
    describe('myAsyncFunction', function () {
      it('debería completarse después de 2 segundos', function (done) {
        const startTime = new Date().getTime();
        myAsyncFunction().then(function () {
          const endTime = new Date().getTime();
          const elapsedTime = endTime - startTime;
          if (elapsedTime >= 2000) {
            done();
          } else {
            done(new Error('La función asíncrona no se completó en 2 segundos.'));
          }
        }).catch(done);
      });
    });

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
