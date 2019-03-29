"use strict";

///// BEGIN SOLUTION /////
function twoTeams(sailors) {
  // 20 < sailors > 40
  const teamOne = [];
  // everyone else
  const teamTwo = [];

  // iterate through input object
  for(let key in sailors){
    // simple if statement, could make a ternary
    if(sailors[key] > 40 || sailors[key] < 20){ teamOne.push(key); }
    else teamTwo.push(key);
  };
  // has to be better way to do this,
  // just trying to complete, then // OPTIMIZE:

  const teamOneSorted = teamOne.sort();
  const teamTwoSorted = teamTwo.sort();
  const outgoingArray = [ teamOneSorted, teamTwoSorted ];

  return outgoingArray;
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
