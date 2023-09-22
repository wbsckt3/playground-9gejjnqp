﻿var assert = require('assert');
var universe = require('./universe7.js');

var reduceUsed = false;
var superReduce = Array.prototype.reduce;
Array.prototype.reduce = function () {
  reduceUsed = true;
  return superReduce.apply(this, arguments);
};

it('should sum stars', function () {
  try {
    describe('getNestedInfo', () => {
      it('debería devolver información anidada para un registro existente', () => {
        const recordId = 2;
        const expectedNestedInfo = {
          value: 'Value for Record 2',
        };
        const nestedInfo = getNestedInfo(recordId);
        assert.deepEqual(nestedInfo, expectedNestedInfo);
      });
    
      it('debería devolver null para un registro inexistente', () => {
        const recordId = 999; // Un ID que no existe en tus datos de ejemplo
        const expectedNestedInfo = null;
        const nestedInfo = getNestedInfo(recordId);
        assert.equal(nestedInfo, expectedNestedInfo);
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
