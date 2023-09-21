﻿var assert = require('assert');
var funcion_search = require('./linear_search.js');

/* 
var reduceUsed = false;
var superReduce = Array.prototype.reduce;
Array.prototype.reduce = function () {
  reduceUsed = true;
  return superReduce.apply(this, arguments);
}; */

it('Buscar un elemento en una posición específica', function () {
  try {
    assert.equal(6, funcion_search.search([2, 3, 5, 7, 11, 13, 17], 6));
    assert.equal(17, funcion_search.search([2, 3, 5, 7, 11, 13, 17], 13));
    assert.equal(42, funcion_search.search([2, 3, 5, 7, 11, 13, 17], 2 ));

    /*if (reduceUsed) {
      printMessage('My personal Yoda, you are. 🙏', '* ● ¸ .　¸. :° ☾ ° 　¸. ● ¸ .　　¸.　:. • ');
      printMessage('My personal Yoda, you are. 🙏', '           　★ °  ☆ ¸. ¸ 　★　 :.　 .   ');
      printMessage('My personal Yoda, you are. 🙏', '__.-._     ° . .　　　　.　☾ ° 　. *   ¸ .');
      printMessage('My personal Yoda, you are. 🙏', '\'-._\\7\'      .　　° ☾  ° 　¸.☆  ● .　　　');
      printMessage('My personal Yoda, you are. 🙏', ' /\'.-c    　   * ●  ¸.　　°     ° 　¸.    ');
      printMessage('My personal Yoda, you are. 🙏', ' |  /T      　　°     ° 　¸.     ¸ .　　  ');
      printMessage('My personal Yoda, you are. 🙏', '_)_/LI');
    } else {
      printMessage('Hint 💡', 'Do you know the reduce function in JavaScript? 🤔');
    }*/
    
  } catch (error) {
    printMessage('Tip 💡', 'Cual es la variable que debe retornar la función? \'totalStars\'? 🤔');
    throw error;
  }
});

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
