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




  // // get locations of newline characters
  // const locationsOfNewlines = [];
  // for(let i=0;i<plan.length;i++)
  //   if(plan[i].charCodeAt(0)===10)
  //     locationsOfNewlines.push(i);
  //
  // // split string and store strings in arrayOfSplitStrings
  // for(let i=0;i<locationsOfNewlines.length;i++){
  //   console.log(plan.split());
  // }
  //
  const arrayOfSplitStrings = plan.split("\n");
  // the first and last elements are empty strings
  arrayOfSplitStrings.pop();
  arrayOfSplitStrings.shift();


  console.log(arrayOfSplitStrings);



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
