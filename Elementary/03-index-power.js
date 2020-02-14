"use strict";
///// BEGIN SOLUTION //////
/**
 * 
 * @param {number[]} array - integers
 * @param {number} n  - integers
 */
function indexPower(array, n) {
  let returnValue = -1
  if (array.length - 1 >= n) returnValue = Math.pow(array[n],n)
  return returnValue
}
////// END SOLUTION //////

///// BEGIN CHECKING /////
const assert = require('assert');

console.log('Example:')
console.log(indexPower([1, 2, 3, 4], 2))

assert.equal(indexPower([1, 2, 3, 4], 2), 9, "Square");
assert.equal(indexPower([1, 3, 10, 100], 3), 1000000, "Cube");
assert.equal(indexPower([0, 1], 0), 1, "Zero power");
assert.equal(indexPower([1, 2], 3), -1, "IndexError");
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");

