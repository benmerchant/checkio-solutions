"use strict"
///// BEGIN SOLUTION //////
/**
 * ensures opening brackets have a closing partner
 * ensures bracket scopes aren't intersected by another bracket
 * @param {string} expression (unicode)
 * @returns {boolean} is the expression correct
 */
function brackets(expression) {
  const theBrackets = [
    {start: '{', end: '}'},
    {start: '(', end: ')'},
    {start: '[', end: ']'}
  ]
  let returnBool = true

  // idk... come back
  


  return returnBool
}
////// END SOLUTION //////

///// BEGIN CHECKING /////
var assert = require('assert')

assert.equal(brackets("((5+3)*2+1)"), true, "Simple")
assert.equal(brackets("{[(3+1)+2]+}"), true, "Different types")
assert.equal(brackets("(3+{1-1)}"), false, ") is alone inside {}")
assert.equal(brackets("[1+1]+(2*2)-{3/3}"), true, "Different operators")
assert.equal(brackets("(({[(((1)-2)+3)-3]/3}-3)"), false, "One is redundant")
assert.equal(brackets("2+3"), true, "No brackets, no problem")
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!")
