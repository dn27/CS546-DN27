const lab1 = require("./lab1");

console.log(lab1.questionOne([25, 227, 39]));
// should return and output { '25': false, '39': false, '227': true }

console.log(lab1.questionOne([]));
//returns and outputs: {}

console.log(lab1.questionOne([2931]));
// returns and outputs: { '2931': false }

console.log(lab1.questionOne([123, 124, 125, 126, 127]));
//returns and outputs: { '123': false, '124': false, '125': false, '126': false, '127': true }

console.log(lab1.questionOne([99, 199, 301, 283, 5894, 239, 958]));
// returns and outputs: {'99': false, '199': true, '239': true, '283': true, '301': false, '958': false, '5894': false}

console.log(lab1.questionTwo([87, 88, 89, 90]));
// should return and output 173795928366.6

console.log(lab1.questionTwo([1, 111, 1111]));
//returns and outputs: 1735222845831347.8

console.log(lab1.questionTwo([20, 2, 2]));
// returns and outputs: 3362407.98

console.log(lab1.questionTwo([6, 11, 1]));
//  returns and outputs: 313792.61

console.log(lab1.questionTwo([]));
//returns and outputs: 0

console.log(lab1.questionThree("How many shrimp do you have to eat"));
// should return and output { consonants: 16, vowels: 11, numbers: 0, spaces: 7, punctuation: 0, specialCharacters: 0 }

console.log(lab1.questionThree("Performing their 2019 program, Medium,"));
// returns and outputs: { consonants: 18, vowels: 10, numbers: 4, spaces: 4, punctuation: 2, specialCharacters: 0 }

console.log(
  lab1.questionThree(
    "WGI Sport of the Arts is proud to present: Music City Mystique!"
  )
);
//  returns and outputs: { consonants: 33, vowels: 17, numbers: 0, spaces: 11, punctuation: 2, specialCharacters: 0 }

console.log(
  lab1.questionThree("#bossup #getthebread @breadwinners %100 all day erryday")
);
// returns and outputs: { consonants: 28, vowels: 14, numbers: 3, spaces: 6, punctuation: 0, specialCharacters: 4 }

console.log(lab1.questionThree("?"));
// returns and outputs: { consonants: 0, vowels: 0, numbers: 0, spaces: 0, punctuation: 1, specialCharacters: 0 }

console.log(lab1.questionFour(60000, 3.5, 7));
// should return and output: 806.39

console.log(lab1.questionFour(15600, 2.2, 4));
//returns and outputs: 339.81

console.log(lab1.questionFour(22300, 4, 8));
//returns and outputs: 271.82

console.log(lab1.questionFour(45000, 1.3, 9));
//returns and outputs: 441.74

console.log(lab1.questionFour(43200, 5, 3));
//returns and outputs: 1294.74
