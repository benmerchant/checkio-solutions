"use strict";
///// BEGIN SOLUTION //////
/**
  *
  * @param {string} wall - multiline string;
  *                         all chars either '0' and '#'
  *
  * @return {number}: a positive Integer
  *                     assuming it could only be {0-9}
  *                     due to preconditions
  * @Precondition: 3x3 <= array size <= 10x10
  * I know i know. get over the callbacks already...
  *
*/
function stoneWall(wall) {
    // your code here
    return 0;
}
////// END SOLUTION //////

///// BEGIN CHECKING /////
const assert = require('assert');

console.log('Example:')
console.log(stoneWall(`
##########
####0##0##
00##0###00
`));

  // These "asserts" are used for self-checking and not for an auto-testing
assert.equal(stoneWall(`
##########
####0##0##
00##0###00
`), 4);


assert.equal(stoneWall(`
#00#######
#######0##
00######00
`), 1);

assert.equal(stoneWall(`
#####
#####
#####
`), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
