let myStringArray = ['hello', 'world', 'my', 'name', 'is', 'Patrick'];
let myNumArray = [1, 2, 3, 4, 5];

// Can have an array of mixed data types

let mixedArray = [
  1,
  'Hello',
  undefined,
  true,
  (message) => {
    console.log(message);
  }
];

// Call the function by indexing to place 4 and passing the message
mixedArray[4]('Hello world!');

// Loop through array
// For each value in mystringarray console.log the value
myStringArray.forEach((value) => {
  console.log(value);
});

// Loops through array then creates a new array with computations
// For every x in the myNumArray return x * x
let myNumArraySquared = myNumArray.map((x) => {
  return x * x;
});

// Original
console.log(myNumArray);
// Squared numArray
console.log(myNumArraySquared);

// Filter returns another array based off of conditions
// If it is odd, return it
let oddNumbers = myNumArray.filter((num) => {
  return num % 2 === 1;
});

let evenNumbers = myNumArray.filter((num) => {
  return num % 2 === 0;
});

// Original: console.log(myNumArray);
console.log(oddNumbers);
console.log(evenNumbers);
let oddEvenArrays = `Odd Array: ${oddNumbers}
Even Array: ${evenNumbers}`;
console.log(oddEvenArrays);

// Sums up an array
let sumOfOdds = oddNumbers.reduce((currentTotal, newValue) => {
  const newTotal = currentTotal + newValue;
  return newTotal;
}, 0);

console.log(sumOfOdds);

// console.log(myNumArray);
// Add element to end of array (any type)
myNumArray.push(6);
console.log(myNumArray);
// Adds string to end of array
myNumArray.push('Patrick');
console.log(myNumArray);
// Removes element and returns it
console.log(myNumArray.pop());
console.log(myNumArray);

// console.log(myNumArray.join('&&'));
