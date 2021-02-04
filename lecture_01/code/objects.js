// Defines blank object (can populate later)
let myBlankObj = {};
// Key: Value | Can have different types
let myObj = {
  hello: 'World',
  num: 1,
  bool: true,
  myFn: (message) => {
    return message;
  }
};

console.log(myObj);

// Adding [Keys] and Values
myObj['new-Key1'] = 'I am a new key!';
console.log(myObj);

// Can add by dot notation myObj.nameOfKey
myObj.directlyAddedKey = "I've been added!";
console.log(myObj);

// using a variable to add a key and setting a value
let keyName = 'myStrKey';
myObj[keyName] = 'This was made dynamically';
console.log(myObj);

// Change value of hello
myObj.hello = 'Hello, world!';
console.log(myObj);

// Output function inside object
console.log(myObj.myFn('Hey DAntoine'));

// Constant object
const myConstObj = { a: 1, b: 2, c: 3 };
console.log(myConstObj);
// Can change internal values
myConstObj.c = 4;
console.log(myConstObj);
// Can add keys
myConstObj.d = 6;
console.log(myConstObj);
// Cannot set it equal to a completely new object as below
// myConstObj = {};
// console.log(myConstObj);
