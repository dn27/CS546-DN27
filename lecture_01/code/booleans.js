let trueVar = true;
let falseVar = false;

let nullVar = null;
let undefinedVar = undefined;

let zeroVar = 0;
let oneVar = 1;

let emptyString = '';
let nonEmptyString = 'hello';

// If trueVar is true then console.log it is true else not true
if (trueVar) {
  console.log('True is true, it checks out');
} else {
  console.log('True is not true; this is weird');
}

// if falseVar is true then console.log this is weird else this is good
if (falseVar) {
  console.log('falseVar is true, no idea why');
} else {
  console.log('falseVar is not true; this is good');
}

// nullVar is null which is not equal to true
if (nullVar) {
  console.log('nullVar evaluates to true');
} else {
  console.log('nullVar evaluates to false');
}

// undefinedVar evaluates to false
if (undefinedVar == true) {
  console.log('undefinedVar evaluates to true');
} else {
  console.log('undefinedVar evaluates to false');
}

// zeroVar is false
if (zeroVar) {
  console.log('zeroVar evaluates to true');
} else {
  console.log('zeroVar evaluates to false');
}

// oneVar is true
if (oneVar) {
  console.log('oneVar evaluates to true');
} else {
  console.log('oneVar evaluates to false');
}

// emptyString is false
if (emptyString) {
  console.log('emptyString evaluates to true');
} else {
  console.log('emptyString evaluates to false');
}

// noneEmptyString is true
if (nonEmptyString) {
  console.log('nonEmptyString evaluates to true');
} else {
  console.log('nonEmptyString evaluates to false');
}

// undefinedVar is equal to nullVar
// Evaluates values
if (undefinedVar == nullVar) {
  console.log('undefinedVar == nullVar');
} else {
  console.log('undefinedVar != nullVar');
}

// undefinedVar is not equal to zeroVar
if (undefinedVar == zeroVar) {
  console.log('undefinedVar == zeroVar');
} else {
  console.log('undefinedVar != zeroVar');
}

// Triple Equals evaluates value AND type
// undefinedVar !== nullVar
if (undefinedVar === nullVar) {
  console.log('undefinedVar === nullVar');
} else {
  console.log('undefinedVar !== nullVar');
}

// Looks at value not type which is why this is true
if ('0' == zeroVar) {
  console.log('zero the string is == to 0 the number');
} else {
  console.log("These aren't equal");
}

// Triple Equals makes this false
// Evaluates value and Type (String === number)
if ('0' === zeroVar) {
  console.log('zero the string is === to 0 the number');
} else {
  console.log("These aren't equal");
}

// This is equal they are the same value
if ('100' == 100) {
  console.log('They are equal');
}

// not equal because they are not the same type
if ('100' === 100) {
  console.log('They are equal');
} else {
  console.log('They are not equal');
}

// Parsed string into a number therefore it is equal
if (parseInt('100') === 100) {
  console.log('They are equal');
} else {
  console.log('They are not equal');
}
