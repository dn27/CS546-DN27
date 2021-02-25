function myGlobalFunction() {
  console.log("I'm a global function");
}
// Can execute a function by just calling it
myGlobalFunction();

// function with parameter
function printThisMessage(message) {
  console.log("We've received a message!");
  console.log(message);
}

// Pass message as parameter
printThisMessage("Hello, CS-546");

// anon function that takes a paramter x and doubles it
let doubleUpAnonymous = function (x, y) {
  return x * y;
};

console.log(doubleUpAnonymous(5));

// Shorthand anon arrow function
let doubleUp = (x) => {
  return x * 2;
};

console.log(doubleUp(10));

// A variable set to a anon function that takes a number
// and returns another function that takes another number and adds that to original
// then returns the added number
let addToTheNumber = (num) => {
  let numToAdd = num;

  return (addThisMuch) => {
    return numToAdd + addThisMuch;
  };
};

// Call addToTheNumber that RETURNS A FUNCTION
let addToTwelve = addToTheNumber(12);
// Prints out the function
console.log(addToTwelve);
// Executes function that it returned which returns a number
console.log(addToTwelve(8));

// print squares up until a number
function printSquaresUntil(num) {
  for (let i = 2; i < num; i++) {
    let num = i * i;
    console.log(`the square of ${i} is ${num}`);
  }
}

// Prints squares up to 12
printSquaresUntil(12);

// Nested functions
function haveAnInnerFunction() {
  // Doesn't execute unless called
  function myInnerFunction() {
    return "Hello, I'm an inner function!";
  }

  if (true) {
    // Call my inner function and print the contents
    console.log(myInnerFunction());
  }
}

// Can only call haveAnInnerFunction
haveAnInnerFunction();

// Cannot call a nested function
//myInnerFunction();

// Var versus Let
function demonstrateVarVersusLet() {
  // Say you want to do some basic counts, like count the number of odds and then
  // the number of even numbers from 0 to 12

  // Change this between "odd", "even", and "both";
  const whatDoICount = "both";
  const howManyToCount = 12;

  if (whatDoICount === "odd" || whatDoICount === "both") {
    // CHANGE THIS BETWEEN `var` and `let` to see difference!
    let count;
    for (let i = 0; i < howManyToCount; i++) {
      if (i % 2 === 1) {
        if (count === undefined) {
          count = 0;
        }

        count = count + 1;
      }

      console.log(`at index ${i} there are ${count} odd numbers`);
    }
  }

  if (whatDoICount === "even" || whatDoICount === "both") {
    // CHANGE THIS BETWEEN `var` and `let` to see difference!
    // VAR - same count variable | LET - different count variable
    var count;
    for (let i = 0; i < howManyToCount; i++) {
      if (i % 2 === 0) {
        if (count === undefined) {
          count = 0;
        }

        count = count + 1;
      }

      console.log(`at index ${i} there are ${count} even numbers`);
    }
  }
}

demonstrateVarVersusLet();
