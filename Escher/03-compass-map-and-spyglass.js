"use strict";

///// BEGIN SOLUTION //////
/*
  *
  * @param {array} seaside - A two-dimensional array
                            Precondition: 3 - 10 elements each being {array}
                              with 3 - 10 elements {string=[Y,M,C,S]|number=0}
  *
  * @return {number} - A positive Integer
  *
  * I know i know. get over the callbacks already...
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
  /*
   *  @param challengeInput {array} unmodified 2D-array from CheckIO
   *  @param callback {function}
   *  @return {object}
   *
  */
  function getLocations(challengeInput,callback){
    const locations = {}; // get x,y coordinates
    for(let i=0;i<challengeInput.length;i++){
      for(let j=0;j<challengeInput[i].length;j++){
        if(challengeInput[i][j]==='Y') locations.Y = {y:i,x:j};
        else if(challengeInput[i][j]==='M') locations.M = {y:i,x:j};
        else if(challengeInput[i][j]==='C') locations.C = {y:i,x:j};
        else if(challengeInput[i][j]==='S') locations.S = {y:i,x:j};
      }
    }
    callback(locations);
  };

  /*
   *  @param itemLocObj {object}
   *  @param callback {function}
   *  @return {object}
   *
  */
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
  /*
   *  @param distObject {object}
   *  @param callback {function}
   *  @return {number} the final answer to the challenge
   *
  */
  function getAnswerNoPythagorasRequired(distObject,callback){
    let intOut = 0;
    for(let key in distObject){
      // if their dist has 2-componenents, need more logic
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
// modified test for my all straight lines catcher
console.log(navigation([
  [0,0,'C',0, 0 ],
  [0,0, 0 ,0, 0 ],
  [0,0,'Y',0,'S'],
  [0,0, 0 ,0, 0 ],
  [0,0,'M',0, 0 ]
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
