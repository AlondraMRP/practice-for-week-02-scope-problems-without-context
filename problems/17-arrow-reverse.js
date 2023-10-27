/***********************************************************************
Write a function reverseStr(str) that accepts a string and returns that string
reversed. 

Write this function using a fat arrow function!

Examples:
let result1 = reverseStr("hello"); // returns "olleh"
let result2 = reverseStr("garden"); // returns "nedrag"
let result3 = reverseStr("potato"); // returns "otatop"


***********************************************************************/

let reverseStr = (string) => {
    let toArray = string.split('');
    return toArray.reverse().join('');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverseStr;
  } catch (e) {
    return null;
  }