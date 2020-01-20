"use strict";
///// BEGIN SOLUTION //////
/**
  * @param {number} incoming 0 < number < 106
  * @returns {number}
  */
function digitsMultip(incoming) {
  const numberStringArray = incoming.toString().split('');
  const filteredNsArray = numberStringArray.filter(item => item > 0);
  const returnValue = filteredNsArray.reduce((x, i) => x * i );
  return parseInt(returnValue);
}
////// END SOLUTION //////

///// BEGIN CHECKING /////
const assert = require('assert');

console.log('Example:')
console.log(digitsMultip(123405))

assert.equal(digitsMultip(123405), 120, "1st");
assert.equal(digitsMultip(999), 729, "2nd");
assert.equal(digitsMultip(1000), 1, "3rd");
assert.equal(digitsMultip(1111), 1, "4th");
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
