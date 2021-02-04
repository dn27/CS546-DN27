// Example 1
const constString = "I am a constant, I cannot be changed, I'm free as a bird";
console.log(constString);
//constString = 'I am not allowed';
// Example 2
let letString = "I'm a string, and I am block scoped using let";
console.log(letString);

// Example 3
letString = "I'm the new value of letString";
console.log(letString);

// String Length
console.log(letString.length);

// Uppercase all characters
console.log(letString.toUpperCase());

// Lowercase all characters
console.log(letString.toLowerCase());

// Find index of a certain character
console.log(letString.indexOf('n'));

// Find the character at an index
console.log(letString.charAt(9));

// Function Scoped string using var
var varString = "I'm a string, and I am function scoped";

// Concatenate string using +
let myConcatString = letString + ' ' + varString;
console.log(myConcatString);

// Concatenate using ${}
// New lines count until `` is closed
let myConcatString2 = `I am letstring: ${letString} I am varString, after a few new lines 
 
 
 
 
 
 ${varString}`;
console.log(myConcatString2);

// concatenate a string while console.logging using stringName.concat
console.log(
  letString.concat(' ' + varString + ' some text added after varString')
);

// Another String
let myString1 = 'Hello there, How are you? My name is Patrick Hill';

// Splitting myString1 at the ? symbol (limiter)
// Returns an array of two elements
console.log(myString1.split('?'));

// My examples
let thisString = "a new string that I am creating to practice";

let secondString = "using javascript because I don't remember what to do"

let connect = `Both together: ${thisString} ${secondString}`;

console.log(connect);