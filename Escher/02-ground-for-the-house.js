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
  let returnThisInt = 999;

  splitInputStrToArray(plan, (multiArray) => {
    findAllOctosAndDefineTopLeft(multiArray,(edges,octothorpeArray) => {
      spitOutReturnValue(edges,octothorpeArray, (valueToBeReturned) => {
        console.log(`Value to send back ${valueToBeReturned}`);
        // anti-Pattern. function shouldn't modify a variable outside of its scope
        returnThisInt = valueToBeReturned;
      });
    });
  });

  function splitInputStrToArray(checkIOinputString,callback) {
    const tempArray = [];
    const arrayOfSplitStrings = checkIOinputString.split("\n");
    // the first and last elements are empty strings
    arrayOfSplitStrings.pop();
    arrayOfSplitStrings.shift();
    // does forEach iterate in order?
    arrayOfSplitStrings.forEach((horizontal) => {
      tempArray.push(horizontal.split(''));
    });
    callback(tempArray);
  };

  function findAllOctosAndDefineTopLeft(arrayOfInputString,callback) {
    const objOfEdges = {};
    const octothorpeLocs = []; // location of every #
    let foundFirst = false; // set up flag for first # found
    // get the locations of all octothorpes
    for(let i=0;i<arrayOfInputString.length;i++){
      for(let j=0;j<arrayOfInputString[i].length;j++){
        // console.log(`current row: ${i} - current col: ${j}`);
        // if current element in multiDim array is a '#'
        if(arrayOfInputString[i][j]==='#'){
          // if flag is still false
          if(!foundFirst){
            foundFirst = true; // change flag since first # has been found
            // save this position
            objOfEdges['topLeft'] = { y: i, x: j };
          }
          octothorpeLocs.push({ y: i, x: j });
        }
      }
    } // end #-locations for loop
    callback(objOfEdges,octothorpeLocs);
  };

  function spitOutReturnValue(edgesObject,octothorpeLocations,callback) {
    let returnInteger = 99;
    // account for 0 or 1 octothorpes // move to earlier function for optimization
    if(octothorpeLocations.length===0) { returnInteger = 0; }
    else if(octothorpeLocations.length===1) { returnInteger = 1; }
    else { returnInteger = mightNotNeedThisMuchStuff(edgesObject, octothorpeLocations); }
    console.log(`There are ${octothorpeLocations.length} octothorpes in total...`);
    callback(returnInteger);
  };

  function mightNotNeedThisMuchStuff(theEdges, octLocsArray){
    // iterate through # array to find topRight
    octLocsArray.forEach((point) => {
      // capture the lowest "row's" y-component
      // > OR EQUAL TO incase its only one #
      // no need to check topRight, this checks EVERY point
      if(point.y >= theEdges.topLeft.y) { theEdges['bottom'] = point.y; }
      console.log(theEdges.bottom);
      if(point.y===theEdges.topLeft.y) { // gte in case 1 # wide
        if(point.x >= theEdges.topLeft.x) { theEdges['topRight'] = point; }
      }
      // topRight could be on a different row
      if(typeof(theEdges.topRight)==='object' &&
          theEdges.topLeft.y===theEdges.topRight.y &&
          theEdges.topLeft.x===theEdges.topRight.x){
        // if they're identical, the next # must be both on a
        // different row AND column to change topRight
        if(point.y > theEdges.topRight.y){
          if(point.x > theEdges.topRight.x) { theEdges.topRight = point; }
        }
      }
      // what if topLeft is lower than topRight, logically, since we only
      // have #-locations in this array, the NEXT point must be topLeft
      // trying not to refactor to forloop yet
      if(theEdges.topLeft.y===theEdges.topRight.y &&
          theEdges.topLeft.x===theEdges.topRight.x) {
        // reset topLeft
        theEdges.topLeft = point; // and that's it
      }
    }); // end #-array iterator

    // temp bottomLeft
    theEdges['bottomLeft'] = { y: theEdges['bottom'], x: 0 };
    delete theEdges.bottom;

    // iterate through the same array... again to get bottomLeft
    // octLocsArray.forEach((point) => {
    for(let i=0;i<octLocsArray.length;i++){
        if(octLocsArray[i].y===theEdges.bottomLeft.y) {
          // gte incase its already right
          if(octLocsArray[i].x >= theEdges.bottomLeft.x) {
            theEdges['bottomLeft'] = octLocsArray [i];
            break;
          }
        }
    };
    // iterate through the same array... again
    // this will account for single-# height right columns
    theEdges['bottomRight'] = theEdges.bottomLeft;
    octLocsArray.forEach((point) => {
        if(point.y===theEdges.bottomLeft.y)
          if(point.x > theEdges.bottomLeft.x) { theEdges['bottomRight'] = point; }
    });
    // get length of each side
    theEdges.topSide = theEdges.topRight.x - theEdges.topLeft.x + 1;
    theEdges.bottomSide = theEdges.bottomRight.x - theEdges.bottomLeft.x + 1;
    theEdges.leftSide = theEdges.bottomLeft.y - theEdges.topLeft.y + 1;
    theEdges.rightSide = theEdges.bottomRight.y - theEdges.topRight.y + 1;


    // Final Area = xSide * ySide
    // compare horizontal sides. larger wins
    if(theEdges.topSide >= theEdges.bottomSide){ theEdges.xSide = theEdges.topSide; }
    else { theEdges.xSide = theEdges.bottomSide; }
    if(theEdges.leftSide >= theEdges.rightSide){ theEdges.ySide = theEdges.leftSide; }
    else { theEdges.ySide = theEdges.rightSide; }
    console.log(theEdges);

    return theEdges.xSide * theEdges.ySide;
  }
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

console.log("Coding complete? Click 'Check' to earn cool rewards!");
