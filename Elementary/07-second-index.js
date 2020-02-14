"use strict";
///// BEGIN SOLUTION //////
/**
 * returns the second index of a symbol in a given text
 * @param {string} text 
 * @param {string} symbol 
 * @returns {number | undefined}
 */
function secondIndex(text, symbol) {
  let indexToReturn
  const firstIndex = text.indexOf(symbol)
  if (text.indexOf(symbol) >= 0)     
    indexToReturn = text.indexOf(symbol, text.indexOf(symbol) + 1) === -1 ? undefined : text.indexOf(symbol, text.indexOf(symbol) + 1)  
  return indexToReturn
}
////// END SOLUTION //////

///// BEGIN CHECKING /////
const assert = require('assert')

console.log('Example')
console.log(secondIndex("sims", "s"))

assert.equal(secondIndex("sims", "s"), 3)
assert.equal(secondIndex("find the river", "e"), 12)
assert.equal(secondIndex("hi", " "), undefined)
assert.equal(secondIndex("hi mayor", " "), undefined)
assert.equal(secondIndex("hi mr Mayor", " "), 5)
console.log("You are awesome! All tests are done! Go Check it!")
