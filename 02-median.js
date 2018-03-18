"use strict";
// template for my solutions
// simple, basic Node server
// https://openclassrooms.com/courses/ultra-fast-applications-using-node-js/creating-your-first-app-with-node-js

// ################## BEGIN solution

function median(data) {
  // first sort the array
  // need optional compareFunction parameter
  // as sort defaults to string conversion then sorting based on Unicode
  data = data.sort((a,b)=>{return a-b});
  // get the length of the array
  let data_length = data.length;
  // determine if the array length is even or odd
  if(data_length%2===0){ // if even
    // dividing data_length by two will give us the index of the second of the two elements we want
    let median_2 = data_length / 2;
    let median_1 = median_2 - 1;
    // find the average of the two and set it to data to be returned
    var data = (data[median_1] + data[median_2]) / 2;
  } else { // if odd
    // dividing by two, rounding, and subtracting one will give us the index in the middle of the array
    let median_index = Math.round(data_length / 2) - 1;
    // set data equal to the element at the median_index
    data = data[median_index];
  }
  return data;
}

var assert = require('assert');

assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");

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
