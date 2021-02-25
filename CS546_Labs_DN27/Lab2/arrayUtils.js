function checkArrayNumber(val, variableName) {
  if (val === undefined) throw `This function requires an input.`;
  if (!Array.isArray(val)) throw `${variableName} is not an array.`;
  if (val.length == 0) throw "Array is empty.";
  if (val.every((e) => isNaN(e))) throw `Element is not a number`;
}

function mean(array) {
  let value = "variable";
  checkArrayNumber(array, value);
  const numMean = array.reduce((a, b) => a + b, 0) / array.length;
  return numMean;
}

function medianSquared(array) {
  let value = "variable";
  checkArrayNumber(array, value);
  let sortedArray = array.slice().sort((a, b) => {
    return a - b;
  });
  if (sortedArray.length % 2 === 0) {
    const first = sortedArray[sortedArray.length / 2 - 1];
    const second = sortedArray[sortedArray.length / 2];
    return (first + second) / 2;
  } else {
    const mid = Math.floor(sortedArray.length / 2);
    return sortedArray[mid];
  }
}

function maxElement(array) {
  let variable = "variable";
  checkArrayNumber(array, variable);
  const maxElemObj = {};
  const maximum = Math.max(...array);
  return (maxElemObj.maximum = array.indexOf(maximum));
}

function fill(end, value) {
  return Array(end - 0)
    .fill()
    .map((value, index) => 0 + index);
}

function countRepeating(array) {
  if (array === []) {
    return {};
  }
  let repObj = {};
  let count;
  for (let index = 0; index < array.length; index++) {
    if (repObj[array[index]]) {
      count++;
    }

    repObj[array[index]] = count;
  }
}

function isEqual(arrayOne, arrayTwo) {
  if (arrayOne === undefined || arrayTwo === undefined)
    throw `Expecting an array.`;
  if (arrayOne.length != arrayTwo.length) {
    return false;
  }
  // Loop through array
  for (let i = 0, arrLength = arrayOne.length; i < arrLength; i++) {
    // check nested array
    if (arrayOne[i] instanceof Array && arrayTwo[i] instanceof Array) {
      if (arrayOne[i] != arrayTwo[i]) {
        return false;
      }
    } else if (arrayOne[i] != arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

module.exports = {
  mean,
  medianSquared,
  maxElement,
  fill,
  countRepeating,
  isEqual,
};
