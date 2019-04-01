"use strict";

///// BEGIN SOLUTION /////
/*
  *
  * Incoming: String on multiple lines with either '0' or '#'
  *             '0' - empty piece of ground
  *             '#' - peice of house
  *
  * Expected Output: Integer the area from top left to bottom right '#'
  *
*/
function house(plan) {
  console.info('Assuming this house is less than or equal to 99999x99999');
  let returnThisInt = 999;

  splitInputStrToArray(plan, (multiArray) => {
    findAllOctos(multiArray,(octothorpeArray) => {
      spitOutReturnValue(octothorpeArray, (valueToBeReturned) => {
        // anti-Pattern. function shouldn't modify a variable outside of its scope
        returnThisInt = valueToBeReturned;
      });
    });
  });

  function splitInputStrToArray(checkIOinputString,callback) {
    const tempArray = [];
    const arrayOfSplitStrings = checkIOinputString.split("\n");
    // the first and last elements are empty strings
    if(arrayOfSplitStrings[0]===''){arrayOfSplitStrings.shift();}
    if(arrayOfSplitStrings[arrayOfSplitStrings.length-1]===''){arrayOfSplitStrings.pop();}
    // does forEach iterate in order?
    arrayOfSplitStrings.forEach((horizontal) => {
      tempArray.push(horizontal.split(''));
    });
    callback(tempArray);
  };

  function findAllOctos(arrayOfInputString,callback) {
    const octothorpeLocs = [];
    // get the locations of all octothorpes
    for(let i=0;i<arrayOfInputString.length;i++)
      for(let j=0;j<arrayOfInputString[i].length;j++)
        if(arrayOfInputString[i][j]==='#') { octothorpeLocs.push({ y: i, x: j }); }
    callback(octothorpeLocs);
  };

  function spitOutReturnValue(octothorpeLocations,callback) {
    let returnInteger = 99;
    // account for 0 or 1 octothorpes // move to earlier function for optimization
    if(octothorpeLocations.length===0) { returnInteger = 0; }
    else if(octothorpeLocations.length===1) { returnInteger = 1; }
    // maybe I'm thinking to hard. they just want largest-smallest for each dimension
    else { returnInteger = getExtremesAllSides(octothorpeLocations); }
    console.log(`There are ${octothorpeLocations.length} octothorpes in total...`);
    callback(returnInteger);
  };

  function getExtremesAllSides(octLocsArray) {
    // west is furthest left... etc
    const extremities = { west: 99999, east: 0, north: 99999, south: 0 };

    octLocsArray.forEach((point) => {
      if(point.x >= extremities.east) extremities.east = point.x;
      if(point.x <= extremities.west) extremities.west = point.x;
      if(point.y <= extremities.north) extremities.north = point.y;
      if(point.y >= extremities.south) extremities.south = point.y;
    });
    // add one to each b/c these are array indexes
    const AreaOfTheHouse = {
      length:(extremities.east-extremities.west+1),
      width:(extremities.south-extremities.north+1)
    };

    // no negative numbers, just in case of some edge case
    for (let key in AreaOfTheHouse)
      if (AreaOfTheHouse[key]<1) { AreaOfTheHouse[key] = AreaOfTheHouse[key]*-1; }

    // just return simple differences
    return AreaOfTheHouse.length * AreaOfTheHouse.width;
  };
  return returnThisInt;
}

///// END SOLUTION /////

// check results

// author's opinion: these aren't great tests,
// they all have '#' on the corners, except the last one
// even it has them on the bottom two corners

const assert = require('assert');

console.log('Example:');
// console.log(house(`
// 0000000
// ##00##0
// ######0
// ##00##0
// #0000#0
// `));



// // These "asserts" are used for self-checking and not for an auto-testing
// // test1
assert.equal(house(`
0000000
##00##0
######0
##00##0
#0000#0
`), 24);
// test2
assert.equal(house(`
0000000000
#000##000#
##########
##000000##
0000000000
`), 30);
// test3
assert.equal(house(`
0000
0000
#000
`), 1);
// test4
assert.equal(house(`
0000
0000
`), 0);
// // test5
assert.equal(house(`
0##0
0000
#00#
`), 12);
// // newTest1
assert.equal(house(`
#00#
0000
0##0
`), 12);
// newTest2
assert.equal(house(`
#00
00#
00#
#00
`), 12);
// newTest3
assert.equal(house(`
00#
#00
#00
00#
`), 12);
// test from the site Extra:2
// i got forty
assert.equal(house(`
0000##0000
#000##000#
##########
##000000##
0########0
`), 50);
//direct from them, said i failed with 40 again
// b/c i was removing \n's from the string, assuming there'd be some order...
assert.equal(house("0000##0000\n#000##000#\n##########\n##000000##\n0########0\n"),50);

// Pass:house("\n0000000\n##00##0\n######0\n##00##0\n#0000#0\n")

// however this one has an error on the page
// Browserslist: caniuse-lite is outdated.
// Please run next command `npm update caniuse-lite browserslist`,
// Fail: house("0000000000\n#00000000#\n##########\n##00000000\n#000000000\n")
//
// Pass:house("0000000000\n0000000000\n0000000000\n0000000000\n0000000000\n")
// Fail:house("0000##0000\n#000##000#\n##########\n##000000##\n0########0\n")





console.log("Coding complete? Click 'Check' to earn cool rewards!");
