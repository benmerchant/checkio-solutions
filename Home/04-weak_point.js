"use strict";
// ################## BEGIN solution

function weakPoint(matrix){
  // declare variables for positions
  let weakX;
  let weakY;
  // placeholders for sums
  let lowX = 999;
  let lowY = 999;
  // iterate through the top-level arrays
  for(let yy=0; yy<matrix.length; yy++){
    // accumulator for 2nd level arrays
    let xSum = 0;
    for(let xx=0; xx<matrix[yy].length; xx++){
      xSum += matrix[yy][xx];
      // this is terrible code...

      // accumulator for top-level arrays
      let ySum=0;
      // RE-iterate through the top level array
      for(let yyy=0; yyy<matrix.length; yyy++){
        ySum += matrix[yyy][xx];
      }
      // save our X-coordinate
      if(ySum < lowY) {
        lowY = ySum;
        weakX = xx;
      }
    }
    // save our Y-coordinate
    if(xSum < lowX) {
      lowX = xSum;
      weakY = yy;
    }
  }
  return [weakY, weakX];
}

var assert = require('assert');

assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
                            [2, 9, 4, 1, 7],
                            [3, 8, 6, 2, 4],
                            [2, 5, 2, 9, 1],
                            [6, 6, 5, 4, 5]]
                            ), [3, 3], "Example");
assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
                            [2, 8, 1, 1, 7],
                            [3, 8, 6, 2, 4],
                            [2, 5, 2, 9, 1],
                            [6, 6, 5, 4, 5]]
                            ), [1, 2], "Two weak point");

assert.deepEqual(weakPoint([[1, 1, 1],
                            [1, 1, 1],
                            [1, 1, 1]]
                            ), [0, 0], "Top left");
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
process.exit(0);

// ################## END solution
