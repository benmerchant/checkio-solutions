"use strict";
// ################## BEGIN solution

function countNeighbours(data, row, col) {
  // variable to hold data to return to calling function
  let neighbors = 0;
  // only need to search 'cells' adjacent to row,col
  // col = x value, row = y value
  // top-left corner of our search area
  let x1 = ((col-1)<=0 ? 0 : col-1);
  let y1 = ((row-1)<=0 ? 0 : row-1);
  // bottom-right corner of our search area
  let x2 = ((col)>=data[0].length-1 ? data[0].length-1 : col+1);
  let y2 = ((row)>=data.length-1 ? data.length-1 : row+1);
  // loop through surrounding elements
  for(let xx=x1; xx<=x2; xx++){
    for(let yy=y1; yy<=y2; yy++){
      // don't evaluate 'home' cell
      if(yy==row && xx==col) continue;
      // if a neighbor is occupied, increment return variable by 1
      if(data[yy][xx]==1) neighbors++;
    }
  }
  return neighbors;
}

var assert = require('assert');

// there is no way to make these asserts look pretty
assert.equal(countNeighbours([
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
], 1, 2),
3, "1st example");

assert.equal(countNeighbours([
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
], 0, 0),
1, "2nd example");

assert.equal(countNeighbours([
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
], 0, 2),
3, "Dense corner");

assert.equal(countNeighbours([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
],1, 1),
0, "Single");

console.log("All checks passed!");

// ################## END solution
// ############ BEGIN - SERVER SETTINGS ############
var ye = 'Hello Node!';
var http = require('http');
var server = http.createServer((req,res)=>{
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(
    '<!DOCTYPE html><html><body>'+
    '<p>'+ye+'</p>'+
    '</body></html>'
  );
  res.end();
});
server.listen(3001);
// ############ END - SERVER SETTINGS ############
