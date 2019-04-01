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
  let returnInteger = 99;
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

  // first try will be a bit of anti-pattern
  // set up flag for first # found
  let foundFirst = false;

  // get the locations of all octothorpes
  for(let i=0;i<multiArray.length;i++){
    for(let j=0;j<multiArray[i].length;j++){
      // console.log(`current row: ${i} - current col: ${j}`);
      // if current element in multiDim array is a '#'
      if(multiArray[i][j]==='#'){
        // if flag is still false
        if(!foundFirst){
          foundFirst = true; // change flag since first # has been found
          // save this position
          edges['topLeft'] = { y: i, x: j };
        }
        octothorpeLocs.push({ y: i, x: j });
      }
    }
  } // end #-locations for loop

  // account for zero octothorpes
  if(octothorpeLocs.length===0){
    console.log('no octothorpes');
    returnInteger = 0;
  } else {
    // this will account for single-# width top rows
    edges['topRight'] = edges.topLeft;
    // only need topLeft and // bottomRight
    octothorpeLocs.forEach((point) => {
      if(point.y===edges.topLeft.y){
        if(point.x > edges.topLeft.x){
          edges['topRight'] = point;
        }
      }
      // > OR EQUAL TO incase its only one #
      if(point.y >= edges.topLeft.y){
        edges['bottom'] = point.y;
      }
    });

    // temp bottomLeft
    edges['bottomLeft'] = { y: edges['bottom'], x: 0 };
    delete edges.bottom;

    // this will account for single-# height right columns
    edges['bottomRight'] = edges.bottomLeft;
    octothorpeLocs.forEach((point) => {
        if(point.y===edges.bottomLeft.y)
          if(point.x > edges.bottomLeft.x)
            edges['bottomRight'] = point;
    });

    if(edges.topRight.y===edges.topLeft.y){
      edges.topSide = edges.topRight.x - edges.topLeft.x + 1;
    }
    if(edges.bottomRight.y===edges.bottomLeft.y){
      edges.bottomSide = edges.bottomRight.x - edges.bottomLeft.x + 1;
    }
    if(edges.bottomLeft.x===edges.topLeft.x){
      edges.leftSide = edges.bottomLeft.y - edges.topLeft.y + 1;
    }
    if(edges.bottomRight.x===edges.topRight.x){
      edges.rightSide = edges.bottomRight.y - edges.topRight.y + 1;
    }

    if(edges.topSide===edges.bottomSide){
      edges.xSide = edges.topSide;
    }
    if(edges.leftSide===edges.rightSide){
      edges.ySide = edges.leftSide;
    }

    returnInteger = edges.xSide * edges.ySide;
    console.log(edges);
  }




  console.log(`Return this: ${returnInteger}`);

  return returnInteger;
}
///// END SOLUTION /////

// check results

// author's opinion: these aren't great tests,
// they all have '#' on the corners, except the last one
// even it has them on the bottom two corners

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

assert.equal(house(`
0000000000
#000##000#
##########
##000000##
0000000000
`), 30);

assert.equal(house(`
0000
0000
#000
`), 1);

assert.equal(house(`
0000
0000
`), 0);

assert.equal(house(`
0##0
0000
#00#
`), 12);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
