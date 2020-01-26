"use strict";
///// BEGIN SOLUTION //////
/**
 * returns the most frequenly occuring string in the given array
 * @param {string[]} inArrayOfStrings // non-empty
 * @returns {string}
 */
function mostFrequent(arrayOfStrings) {
  let currentWinner = 0
  let outString = ''
  const countObj = {}
  arrayOfStrings.forEach((eachString, index, origArray) => {
    origArray.indexOf(eachString)
    if (!countObj[`${eachString}`]) countObj[`${eachString}`] = 0
    countObj[`${eachString}`] += 1
  })
  for (let [key, value] of Object.entries(countObj)) {
    if (value > currentWinner) {
      outString = key
      currentWinner = value
    }
  }
  return outString
}
////// END SOLUTION //////

///// BEGIN CHECKING /////
const assert = require('assert')

console.log('Example:')
console.log(mostFrequent([
    'a', 'b', 'c', 
    'a', 'b',
    'a'
]))

assert.equal(mostFrequent([
    'a', 'b', 'c', 
    'a', 'b',
    'a'
]), 'a')
assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");

