// Two constants
const x = 12;
const y = 25;

// Basic math
let multiplied = x * y;
let divided = y / x;
let subtracted = x - y;
let added = x + y;

// Separate values by commas
console.log(multiplied, divided, subtracted, added);

// Raise x by y Using Math global pow
let toThePowerOf = Math.pow(x, y);
console.log(toThePowerOf);

// Convert a number to a string
let multipliedString = multiplied.toString();
console.log(multipliedString);

// Adding a number to a string returns a concatenated string
console.log(multipliedString + 5);

//console.log(multipliedString);
multipliedString = 'H';
console.log(parseInt(multipliedString) + 5);
