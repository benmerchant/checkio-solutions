"use strict";

///// BEGIN SOLUTION //////
/*
  *
  * Incoming: Object: 2-dimensional array
  *
  * Expected Output: positive integer
  *
  * Precondition: 3x3 <= array size <= 10x10
  *
*/
function navigation(seaside) {
  let outgoingFinalAnswer = 0;
  getLocations(seaside,(itemLocs) => {
    getDistancesToRespectiveObjects(itemLocs,(distObj) => {
      getAnswerNoPythagorasRequired(distObj, (finalAnswer) => {
        console.log(finalAnswer);
        outgoingFinalAnswer = finalAnswer;
      });
    });
  });
  return outgoingFinalAnswer;

  function getLocations(challengeInput,callback){
    const locations = {}; // get x,y coordinates
    for(let i=0;i<challengeInput.length;i++){
      for(let j=0;j<challengeInput[i].length;j++){
        switch(challengeInput[i][j]){
          case 'Y':
            locations.Y = {y:i,x:j};
            break;
          case 'M':
            locations.M = {y:i,x:j};
            break;
          case 'C':
            locations.C = {y:i,x:j};
            break;
          case 'S':
            locations.S = {y:i,x:j};
            break;
        }
      }
    }
    callback(locations);
  };
  function getDistancesToRespectiveObjects(itemLocObj,callback){
    const distObject = {};
    for(let key in itemLocObj){ // find horizontal or vertical distances
      if(key==='Y') continue;
      else {
        distObject[`${key}_Dist`] = {};
        // see if perfect horizontal
        if(itemLocObj.Y.y === itemLocObj[key].y){
          distObject[`${key}_Dist`].theDist = Math.abs(itemLocObj.Y.x - itemLocObj[key].x);
        } else
        // see if perfect vertical
        if(itemLocObj.Y.x === itemLocObj[key].x){
          distObject[`${key}_Dist`].theDist = Math.abs(itemLocObj.Y.y - itemLocObj[key].y);
        } else {
          distObject[`${key}_Dist`].yDist = Math.abs(itemLocObj.Y.y - itemLocObj[key].y);
          distObject[`${key}_Dist`].xDist = Math.abs(itemLocObj.Y.x - itemLocObj[key].x);
        }
      }
    }
    callback(distObject);
  };
  function getAnswerNoPythagorasRequired(distObject,callback){
    let intOut = 0;
    // i say probably b/c we might not need him
    // in the case they're all straight, lets end this now
    console.log(distObject);
    for(let key in distObject){
      // if their dist has 2-componenents, need Pythag
      if (typeof(Object.keys(distObject[key]).length)==='number' && Object.keys(distObject[key]).length > 1) {
        // the smaller of the distances will be the distance you would need to travel
        // even combining diagonal and straight
        (distObject[key].yDist > distObject[key].xDist) ? intOut += distObject[key].yDist : intOut += distObject[key].xDist;
      } else { intOut += distObject[key].theDist; }
    }
    callback(intOut);
  };
};
////// END SOLUTION //////

///// BEGIN CHECKING /////
const assert = require('assert');

console.log('Example:')
// quick test for my all straight lines catcher
console.log(navigation([
  [0,0,'C',0, 0 ],
  [0,0, 0 ,0, 0 ],
  [0,0,'Y',0,'S'],
  [0,0, 0 ,0, 0 ],
  [0,0,'M',0, 0 ]
]));
console.log(navigation([  ['Y', 0, 0, 0, 'C'],
                          [ 0,  0, 0, 0,  0 ],
                          [ 0,  0, 0, 0,  0 ],
                          ['M', 0, 0, 0, 'S']
                        ]));

// These "asserts" are used for self-checking and not for an auto-testing
assert.equal(navigation([['Y', 0, 0, 0, 'C'],
                         [ 0,  0, 0, 0,  0],
                         [ 0,  0, 0, 0,  0],
                         ['M', 0, 0, 0, 'S']]), 11)

assert.equal(navigation([[ 0,  0, 'C'],
                         [ 0, 'S', 0],
                         ['M','Y', 0]]), 4)

assert.equal(navigation([[ 0,  0, 0,  0,  0,  0,  0],
                         [ 0,  0, 0, 'M', 0, 'S', 0],
                         [ 0,  0, 0,  0,  0,  0,  0],
                         [ 0,  0, 0, 'C', 0,  0,  0],
                         [ 0, 'Y',0,  0,  0,  0,  0],
                         [ 0,  0, 0,  0,  0,  0,  0]]), 9)
console.log("Coding complete? Click 'Check' to earn cool rewards!");
