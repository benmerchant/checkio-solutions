"use strict";
///// BEGIN SOLUTION //////
/**
  * @params {string} text (contains only spaces a-z, A-Z, and '.' )
  *
  * @return {string} a corrected sentence which starts with capital letter
  *                   and ends with dot.
  *
  */
function correctSentence(text) {
    if(!/^[A-Z]/.test(text)) text = text.substring(0,1).toUpperCase()+text.substring(1);
    if(!/\.$/.test(text)) text = `${text}.`;
    return text;
}
////// END SOLUTION //////

///// BEGIN CHECKING /////
const assert = require('assert');

console.log('Example:')
console.log(correctSentence("greetings, friends"))

// These "asserts" using for self-checking and not for auto-testing
assert.equal(correctSentence("greetings, friends"), "Greetings, friends.")
assert.equal(correctSentence("Greetings, friends"), "Greetings, friends.")
assert.equal(correctSentence("Greetings, friends."), "Greetings, friends.")
assert.equal(correctSentence("hi"), "Hi.")
assert.equal(correctSentence("welcome to New York"), "Welcome to New York.")

console.log("Coding complete? Click 'Check' to earn cool rewards!");
