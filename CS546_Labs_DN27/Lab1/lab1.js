const questionOne = function questionOne(arr) {
    // Implement question 1 here
    // Function that returns true if a number is prime, false otherwise
    function primeCheck(value) {
        if (value === 1 || value <= 0) {
            return false;
        }
        else if (value === 2) {
            return true;
        } else {
            for (var num = 2; num < value; num++) {
                if (value % num === 0) {
                    return false;
                }
             }
             return true;
        }
    }

    if (arr == undefined) {
        return {};
    }
    // Empty object that must be populated
    let primeObj = {};

    // Goes through given array
    arr.forEach((x) => {
        // Check if prime or not
        let isPrime = primeCheck(x);
        // Adds key: x and value: is prime
        primeObj[x] = isPrime;
        
    });
    return primeObj;
    
}

const questionTwo = function questionTwo(arr) { 
    // Implement question 2 here
    if (arr == undefined) {
        return 0;
    }
    let sumOfSquares = arr.reduce((currentTotal, newValue) => {
        let squared = newValue * newValue;
        const newTotal = currentTotal + squared;
        return newTotal;
      }, 0);
    
    let sumRaised = Math.pow(sumOfSquares, 5);
    let sqRoot = Math.sqrt(sumRaised);
    sqRoot = Math.round(sqRoot * 100) / 100
    return sqRoot;
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
}

const questionFour = function questionFour(num1, num2,num3) {
    // Implement question 4 here
}

module.exports = {
    firstName: "D'ANTOINE", 
    lastName: "NEWSOME", 
    studentId: "10456747",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};