"use strict";
///// BEGIN SOLUTION //////
/**
  * @param {string} incomingString
  * @returns {string} possibly empty
  */
function findMessage(incomingString) {
  let outString = '';
  incomingString.split('').forEach(letter => {
    if (letter === letter.toUpperCase() && letter.match(/[a-zA-Z]/)) outString += letter
  })
  return outString;
}
////// END SOLUTION //////

///// BEGIN CHECKING /////
const assert = require('assert');

console.log('Example:')
console.log(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."))

assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
assert.equal(findMessage("hello world!"), "", "Nothing");
assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
