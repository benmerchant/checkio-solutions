"use strict"
///// BEGIN SOLUTION //////
/**
 * param lengths between 1-100
 * @param {string} line1 
 * @param {string} line2 
 * @return {number} integer
 */
function stepsToConvert(line1, line2) {
  let returnInteger = 0
  if (line1 === line2) returnInteger = 0 // superfluous comparison, but it kind of self documents ironic considering this comment
  if (line1.length === line2.length) returnInteger += compareEachLetter(0, line1, line2)
  else if (line1.length < line2.length) {
    returnInteger += (line2.length - line1.length)
    let whereIsFirstLetter
    if (line2.indexOf(line1.substr(0,1)) !== -1) {
      whereIsFirstLetter = line2.indexOf(line1.substr(0, 1))
      returnInteger += compareEachLetter(whereIsFirstLetter, line1, line2)
    }
  }
  else if (line2.length < line1.length) returnInteger += (line1.length - line2.length)
  return returnInteger
}

function compareEachLetter(startingIndex, l1, l2) {
  let numberOfNonMatches = 0
  let line1IndexCounter = 0
  for (let ii = startingIndex; ii < l1.length; ii++) {    
    if (l1.substr(line1IndexCounter, 1) !== l2.substr(ii, 1)) numberOfNonMatches += 1
    line1IndexCounter += 1
  }
  return numberOfNonMatches
}
////// END SOLUTION //////

///// BEGIN CHECKING /////
const assert = require('assert')

assert.equal(stepsToConvert('line1', 'line1'), 0, "eq")
assert.equal(stepsToConvert('line1', 'line2'), 1, "2")
assert.equal(stepsToConvert('line', 'line2'), 1, "none to 2")
assert.equal(stepsToConvert('ine', 'line2'), 2, "need two more")
assert.equal(stepsToConvert('line1', '1enil'), 4, "everything is opposite")
assert.equal(stepsToConvert('', ''), 0, "two empty")
assert.equal(stepsToConvert('l', ''), 1, "one side")
assert.equal(stepsToConvert('', 'l'), 1, "another side")
console.log("You are good to go!")
