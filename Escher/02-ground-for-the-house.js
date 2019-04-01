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
    // account for zero octothorpes
    if(octothorpeLocations.length===0){
      console.log(`There are ${octothorpeLocations.length} octothorpes in total...`);
      returnInteger = 0;
    } else {
      // this will account for single-# width top rows
      edgesObject['topRight'] = edgesObject.topLeft;

      // iterate through # array
      octothorpeLocations.forEach((point) => {
        if(point.y===edgesObject.topLeft.y)
          if(point.x > edgesObject.topLeft.x) edgesObject['topRight'] = point;

        // > OR EQUAL TO incase its only one #
        if(point.y >= edgesObject.topLeft.y) edgesObject['bottom'] = point.y;
      }); // end #-array iterator


      // temp bottomLeft
      edgesObject['bottomLeft'] = { y: edgesObject['bottom'], x: 0 };
      delete edgesObject.bottom;

      // iterate through the same array... again to get bottomLeft
      // octothorpeLocations.forEach((point) => {
      for(let i=0;i<octothorpeLocations.length;i++){
          if(octothorpeLocations [i].y===edgesObject.bottomLeft.y) {
            if(octothorpeLocations [i].x > edgesObject.bottomLeft.x) {
              edgesObject['bottomLeft'] = octothorpeLocations [i];
              break;
            }
          }
      };



      // iterate through the same array... again
      // this will account for single-# height right columns
      edgesObject['bottomRight'] = edgesObject.bottomLeft;
      octothorpeLocations.forEach((point) => {
          if(point.y===edgesObject.bottomLeft.y)
            if(point.x > edgesObject.bottomLeft.x) {
              edgesObject['bottomRight'] = point;
            }
      });


      if(edgesObject.topRight.y===edgesObject.topLeft.y){
        edgesObject.topSide = edgesObject.topRight.x - edgesObject.topLeft.x + 1;
      } else {
        edgesObject.topSide = 0;
      }
      if(edgesObject.bottomRight.y===edgesObject.bottomLeft.y){
        edgesObject.bottomSide = edgesObject.bottomRight.x - edgesObject.bottomLeft.x + 1;
      } else {
        edgesObject.bottomSide = 0;
      }
      if(edgesObject.bottomLeft.x===edgesObject.topLeft.x){
        edgesObject.leftSide = edgesObject.bottomLeft.y - edgesObject.topLeft.y + 1;
      } else {
        edgesObject.leftSide = 0;
      }
      if(edgesObject.bottomRight.x===edgesObject.topRight.x){
        edgesObject.rightSide = edgesObject.bottomRight.y - edgesObject.topRight.y + 1;
      } else {
        edgesObject.rightSide = 0;
      }


      if(edgesObject.topSide===edgesObject.bottomSide){
        edgesObject.xSide = edgesObject.topSide;
      } else {
        edgesObject.xSide = 0;
      }
      if(edgesObject.leftSide===edgesObject.rightSide){
        edgesObject.ySide = edgesObject.leftSide;
      } else {
        edgesObject.ySide = 0;
      }

      returnInteger = edgesObject.xSide * edgesObject.ySide;
      console.log(edgesObject);


    }
    console.log(`Return this to bubble up: ${returnInteger}`);
    callback(returnInteger);
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

//
//
// // // These "asserts" are used for self-checking and not for an auto-testing
// // test1
// assert.equal(house(`
// 0000000
// ##00##0
// ######0
// ##00##0
// #0000#0
// `), 24);
// // test2
// assert.equal(house(`
// 0000000000
// #000##000#
// ##########
// ##000000##
// 0000000000
// `), 30);
// // test3
// assert.equal(house(`
// 0000
// 0000
// #000
// `), 1);
// // test4
// assert.equal(house(`
// 0000
// 0000
// `), 0);
// // test5
assert.equal(house(`
0##0
0000
#00#
`), 12);
// newTest1
assert.equal(house(`
#00#
0000
0##0
`), 12);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
