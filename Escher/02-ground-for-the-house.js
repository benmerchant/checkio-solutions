"use strict";

///// BEGIN SOLUTION /////
/*
  *
  * Incoming: String on multiple lines with either '0' or '#'
  *
  * Expected Output: Integer the area from top left to bottom right '#'
  *
*/
function house(plan) {
  let returnInteger = 0;
  const multiArray = [];


  const arrayOfSplitStrings = plan.split("\n");
  // the first and last elements are empty strings
  arrayOfSplitStrings.pop();
  arrayOfSplitStrings.shift();

  // does forEach iterate in order?
  arrayOfSplitStrings.forEach((horizontal) => {
    multiArray.push(horizontal.split(''));
  });
  const octothorpeLocs = [];
  const edges = {};
  // never forget brandon walker teaching us multi-dimensional arrays
  // get the locations of all octothorpes
  for(let i=0;i<multiArray.length;i++)
    for(let j=0;j<multiArray.length;j++)
      if(multiArray[i][j]==='#')
        octothorpeLocs.push({y:i,x:j})


  // this is goign to be n^2
  // compare each point to every other point
  octothorpeLocs.forEach((point) => {

  });


  return returnInteger;
}
///// END SOLUTION /////

// check results

const assert = require('assert');

console.log('Example:');
console.log(house(`
0000000
##00##0
######0
##00##0
#0000#0
`));

// These "asserts" are used for self-checking and not for an auto-testing
assert.equal(house(`
0000000
##00##0
######0
##00##0
#0000#0
`), 24);

assert.equal(house(`0000000000
#000##000#
##########
##000000##
0000000000
`), 30);

assert.equal(house(`0000
0000
#000
`), 1);

assert.equal(house(`0000
0000
`), 0);

assert.equal(house(`0##0
0000
#00#
`), 12);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
