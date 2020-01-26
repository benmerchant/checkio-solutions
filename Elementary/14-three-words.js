"use strict";
///// BEGIN SOLUTION //////
/**
 * return boolean indicating existence of three consecutive words
 *    words: string with only alpha letters
 * @param {string} inputString
 * @returns {boolean}
 */
function threeWords(inputString) {
  let returnBool = false
  let stringCounter = 0
  const stringArray = inputString.split(' ')
  stringArray.filter((currentString) => {
    if (currentString.match(/[^a-zA-Z]/) && stringCounter < 3) stringCounter = 0
    else if (!currentString.match(/[^a-zA-Z]/)) stringCounter += 1
  })
  if (stringCounter >= 3) returnBool = true
  return returnBool
}
////// END SOLUTION //////

///// BEGIN CHECKING /////
const assert = require('assert');

assert.equal(threeWords("Hello World hello"), true, "1st example");
assert.equal(threeWords("He is 123 man"), false, "2nd example");
assert.equal(threeWords("1 2 3 4"), false, "3rd example");
assert.equal(threeWords("bla bla bla bla"), true, "4th example");
assert.equal(threeWords("Hi"), false, "Letters");
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
