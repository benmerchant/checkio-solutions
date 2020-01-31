"use strict";
///// BEGIN SOLUTION //////
/**
 * 
 * @param {number} n 
 * @param {number} m
 * @returns {number}
 */
function hammingDistance(n, m){
  let outInteger = 0
  // save to convert to binary this way since params are guaranteed to be positive
  const nArray = n.toString(2).split('')
  const mArray = m.toString(2).split('')

  if (nArray.length > mArray.length) {
    const numberOfZeroesToUnshift = nArray.length - mArray.length
    for (let nn = 1; nn<=numberOfZeroesToUnshift; nn++) {
      mArray.unshift('0')
    }
  } else if (nArray.length < mArray.length) {
    const numberOfZeroesToUnshift = mArray.length - nArray.length
    for (let nn = 1; nn <= numberOfZeroesToUnshift; nn++) {
      nArray.unshift('0')
    }
  }

  for (let ii = 0; ii < nArray.length; ii++) {

    if (nArray[ii] !== mArray[ii]) outInteger++
  }
     
  return outInteger
}
////// END SOLUTION //////

///// BEGIN CHECKING /////
const assert = require('assert')

assert.equal(hammingDistance(117, 17), 3, "First example")
assert.equal(hammingDistance(1, 2), 2, "Second example")
assert.equal(hammingDistance(16, 15), 5, "Third example")
assert.equal(hammingDistance(16, 128), 2, "Example 11 from the site")
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!")
