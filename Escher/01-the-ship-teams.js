"use strict";

///// BEGIN SOLUTION /////
/*
  *
  * Incoming: Object: { name: age }
  *
  * Expected Output: Array of two Arrays
  *
*/
function twoTeams(sailors) {
  // object with two blank Arrays // teamOne is the [[20 < n > 40]] list
  const theShipTeams = { teamOne: [], teamTwo: [] };
  const outgoingObj = {};

  // iterate through input object and divide these men and women into teams
  for(let key in sailors) (sailors[key] > 40 || sailors[key] < 20) ? theShipTeams.teamOne.push(key) : theShipTeams.teamTwo.push(key);

  // iterate ArrayObject and sort, storing in outgoingObj
  for(let key in theShipTeams) outgoingObj[key] = theShipTeams[key].sort();

  // don't want to put return in the immediately previous for loop
  return [outgoingObj.teamOne,outgoingObj.teamTwo];
};
///// END SOLUTION /////

// check results

const assert = require('assert');

console.log('Example:');
console.log(twoTeams({
    'Smith': 34,
    'Wesson': 22,
    'Coleman': 45,
    'Abrahams': 19
}));

// These "asserts" are used for self-checking and not for an auto-testing
assert.deepEqual(twoTeams({
    'Smith': 34,
    'Wesson': 22,
    'Coleman': 45,
    'Abrahams': 19
    }), [
        ['Abrahams', 'Coleman'],
        ['Smith', 'Wesson']
    ]);

assert.deepEqual(twoTeams({
    'Fernandes': 18,
    'Johnson': 22,
    'Kale': 41,
    'McCortney': 54
    }), [
        ['Fernandes', 'Kale', 'McCortney'],
        ['Johnson']
    ]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
