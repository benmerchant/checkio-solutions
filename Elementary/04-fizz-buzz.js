"use strict";
///// BEGIN SOLUTION //////
/**
  * @param {number} theNumber integer
  * @returns {string}
  */
function fizzBuzz(theNumber) {
  let outString = '';
  if (theNumber % 3 === 0) outString += 'Fizz'
  if (theNumber % 5 === 0) {
    if (outString.length > 0) outString += ' '
    outString += 'Buzz'
  }
  if (outString === '') outString = theNumber.toString()
  return outString;
}
////// END SOLUTION //////

///// BEGIN CHECKING /////
const assert = require('assert');

assert.equal(fizzBuzz(15), "Fizz Buzz", "15 is divisible by 3 and 5");
assert.equal(fizzBuzz(6), "Fizz", "6 is divisible by 3");
assert.equal(fizzBuzz(5), "Buzz", "5 is divisible by 5");
assert.equal(fizzBuzz(7), "7", "7 is not divisible by 3 or 5");
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
