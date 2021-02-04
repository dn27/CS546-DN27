const lab1 = require("./lab1");

console.log(lab1.questionOne([1, 2, 3])); 
// should return and output {'1': false, '2': true, '3': true}

console.log(lab1.questionOne([5, 3, 10])); 
//returns and outputs: {'5':true, '3': true, '10': false} 

console.log(lab1.questionOne([2])); 
// returns and outputs: {'2': true} 

console.log(lab1.questionOne([5, 10, 9])); 
//returns and outputs: {'5': true, '10': false, '9': false}

console.log(lab1.questionOne([2, 7, 9, 1013])); 
// returns and outputs: {'2': true, '7': true, '9': false, '1013': true}

console.log(lab1.questionOne([])); 
// returns and outputs: {}

console.log(lab1.questionOne()); 
// returns and outputs: {}

console.log(lab1.questionTwo([1,2,3])); 
// should return and output 733.36 

console.log(lab1.questionThree("The quick brown fox jumps over the lazy dog.")); 
// should return and output {consonants: 24, vowels: 11, numbers: 0, spaces: 8, punctuation: 1, specialCharacters: 0}

console.log(lab1.questionFour(25000, 3.11, 5)); 
// should return and output: 450.44