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
    const strCount = {
        consonants: 0,
        vowels: 0,
        numbers: 0,
        spaces: 0,
        punctuation: 0,
        specialCharacters: 0
    };
    
    
    const onlyCons = /[bcdfghjklmnpqrstvwxyz]/gi;
    const onlyVowel = /[aeiou]/gi;
    const onlyNumbers = /\d/g;
    const whiteSpace = /\s/g;
    const onlyPunc = /[.,?!'":;_(){}\[\]-]/g;
    const specialChar = /[#\$%\^&@]/g;

    if (text === "" ) {
        return strCount;
    }

    // If character is B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Z, Y, 
    // add to consonant counter
    let consMatch = (text.match(onlyCons) || []);
    let consCount = consMatch.length;
    strCount.consonants = consCount;
    // If character is A, E, I, O, U, add to vowel counter
    let vowelMatch = (text.match(onlyVowel) || []);
    let vowelCount = vowelMatch.length;
    strCount.vowels = vowelCount;
    // If character is a space, add to space counter
    let spaceMatch = (text.match(whiteSpace) || []);
    let spaceCount = spaceMatch.length;
    strCount.spaces = spaceCount;
    // If character is a number, add to number counter
    let numMatch = (text.match(onlyNumbers) || []);
    let numCount = numMatch.length;
    strCount.numbers = numCount;
    // If character is a . , ? ! ' " : ; - ... _ () {} []
    let puncMatch = (text.match(onlyPunc) || []);
    let puncCount = puncMatch.length;
    strCount.punctuation = puncCount;
    // If character is a **#  $  % & ^ @ %**, add to special character counter
    let characterMatch = (text.match(specialChar) || []);
    let charCount = characterMatch.length;
    strCount.specialCharacters = charCount;



    return strCount;
}

const questionFour = function questionFour(num1, num2, num3) {
    // Implement question 4 here
    let loanAmt = num1;
    // Convert interest percentage to decimal number by / by 100 and parseFloat
    let interest = parseFloat(num2) / 100;
    interest = interest / 12;
    let term = num3 * 12;
    let monthlyPayment = loanAmt * interest * Math.pow((1 + interest), term);
    let mpDenom = Math.pow((1 + interest), term) - 1;
    monthlyPayment = monthlyPayment / mpDenom;
    return  Math.round(monthlyPayment * 100) / 100;
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