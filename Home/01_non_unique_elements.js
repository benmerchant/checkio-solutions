"use strict";
// ################## BEGIN solution
function nonUniqueElements(data) {
    let retval = []; // initialize an array to return
    let checked = []; // initialize an array for use in the loop
    // checked will house elements from input array we have already checked

    // loop through each element in the input array
    for(let ii=0; ii<data.length; ii++){
        // first comp: is current element inside the checked array
        // second comp: does current element appear again after itself
        if(checked.includes(data[ii]) || data.slice(ii+1).includes(data[ii])){
            // if either of those comparisons are true,
            // add the current element to the array to be returned
            retval.push(data[ii]);
        }
        // once we've check an element, add it to the checked array
        checked.push(data[ii]);
    }
    // return our
    return retval;
}
// ################## END solution
// ################## BEGIN test solution
var assert = require('assert');

assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
assert.deepEqual(nonUniqueElements([4,8,15,16,23,42,'jack',23,'ford',15,'jack']), [15,23,'jack',23,15,'jack'], "Lost example");

console.log("All checks passed!");
// ################## END test solution


// ############ BEGIN - SERVER SETTINGS ############
var outmsg = 'Ben\'s Solutions';
var http = require('http');
var server = http.createServer((req,res)=>{
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(
    '<!DOCTYPE html><html><body>'+
    '<h1>'+outmsg+'</h1>'+
    '</body></html>'
  );
  res.end();
});
server.listen(3001);
// ############ END - SERVER SETTINGS ############
