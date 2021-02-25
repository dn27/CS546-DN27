const axios = require("axios");

async function getPeople() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  //const parsedData = JSON.parse(data);
  // parse the data from JSON into a normal JS Object
  return data;
  //return parsedData;
  // this will be the array of people objects
}

async function getPersonById(id) {
  const people = await getPeople();

  if (id === undefined) {
    throw `ID required but not supplied.`;
  } else if (typeof id != "number") {
    throw `${id} is not a number`;
  } else if (id <= 0 || id > people.length) {
    throw `${id} is not within bounds`;
  }

  let personMatch = people.find((personMatch) => personMatch.id === id);
  return personMatch;
}

async function howManyPerState(stateAbbrv) {
  const people = await getPeople();

  if (stateAbbrv === undefined) {
    throw `stateAbbrv required but not supplied.`;
  } else if (typeof stateAbbrv != "string") {
    throw `${stateAbbrv} is not a string`;
  }
  // Uppercase input
  stateAbbrv.toUpperCase();
  // Extract adresses to new array
  let addressArray = people.map((addr) => addr.address);
  // Count how many are in a state
  let count = addressArray.filter(function (a) {
    return a.state === stateAbbrv;
  }).length;
  if (count === 0) {
    throw `No one lives in the state provided`;
  } else return count;
}

async function personByAge(index) {
  const people = await getPeople();

  if (index === undefined) {
    throw `index required but not supplied.`;
  } else if (typeof index != "number") {
    throw `${index} is not a number`;
  } else if (index < 0 || index >= people.length) {
    throw `${index} is not within bounds`;
  }

  // TODO Sort array by DOB old to young
  people.sort(function (a, b) {
    return new Date(a["date_of_birth"]) - new Date(b["date_of_birth"]);
  });

  // TODO find person by index
  let person = people[index];
  let dob = new Date(person["date_of_birth"]);

  // TODO Compute age of person
  // Sourced from StackOverflow: https://stackoverflow.com/questions/10008050/get-age-from-birthdate/10008120
  let today = new Date();
  let personAge = today.getFullYear() - dob.getFullYear();
  let m = today.getMonth() - dob.getMonth();
  if (m <= 0 || (m === 0 && today.getDate() <= dob.getDate())) {
    personAge--;
  }
  // TODO return First, Last, DOB, Age
  personInfo = {
    first_name: person["first_name"],
    last_name: person["last_name"],
    date_of_birth: person["date_of_birth"],
    age: personAge,
  };
  return personInfo;
}

async function peopleMetrics() {
  const people = await getPeople();
  let totalLetterCount = 0;
  const onlyVowel = /[aeiou]/gi;
  let totalVowelCount = 0;
  let totalConsCount = 0;
  let longest = 0;

  // map all first and last names to new arrays along with make a full name array
  const firstNames = people.map((a) => a.first_name);
  const lastNames = people.map((b) => b.last_name);
  const fullName = people.map((a) => a.first_name + a.last_name);

  // count amount of letters and vowels in first name
  firstNames.forEach(function (e) {
    e.replace(/[^a-zA-Z ]/g, " ");
    totalLetterCount += e.length;

    let vowelMatch = e.match(onlyVowel) || [];
    totalVowelCount += vowelMatch.length;
  });

  // count amount of letters and vowels in last name
  lastNames.forEach(function (e) {
    e.replace(/[^a-zA-Z ]/g, " ");
    totalLetterCount += e.length;
    let vowelMatch = e.match(onlyVowel) || [];
    totalVowelCount += vowelMatch.length;
  });

  // subtract vowel count from total letters to get consonant count
  totalConsCount = totalLetterCount - totalVowelCount;
  // Set shortest name to first name in list to start off
  let shortest = fullName[0];

  fullName.forEach(function (e) {
    //take out special characters
    e.replace(/[^a-zA-Z ]/g, " ");
    // Shortest Name : String of shortest name from first and last combined
    if (e.length < shortest.length) {
      shortest = e;
    }
  });

  // Longest Name : String of longest name from first and last combined
  longest = fullName.reduce((a, b) => (a.length < b.length ? b : a), "");

  // Most Repeating City : Returns city that repeats the most
  let addressArray = people.map((addr) => addr.address);
  let cities = addressArray.map((e) => e.city);
  // Send cities array to frequency function to get most frequent city
  let mRCity = frequency(cities);

  // Average Age : returns average age of all people
  let dobArray = people.map((e) => e["date_of_birth"]);
  // send dob array to average age function to get converted to Date and compute avgAge
  let avgAge = Math.round(averageAge(dobArray) * 100) / 100;

  let metrics = {
    totalLetters: totalLetterCount,
    totalVowels: totalLetterCount,
    totalConsonants: totalConsCount,
    longestName: longest,
    shortestName: shortest,
    mostRepeatingCity: mRCity,
    averageAge: avgAge,
  };

  return metrics;
}

function averageAge(dobs) {
  let dobDates = [];
  let ages = [];
  // Convert strings to dates
  dobs.forEach(function (e) {
    let date = new Date(e);
    dobDates.push(date);
  });
  // compute age of every DOB
  dobDates.forEach(function (e) {
    let today = new Date();
    let personAge = today.getFullYear() - e.getFullYear();
    let m = today.getMonth() - e.getMonth();
    if (m <= 0 || (m === 0 && today.getDate() <= e.getDate())) {
      personAge--;
    }
    ages.push(personAge);
  });
  // Compute avg age of all ages
  let avgAge = ages.reduce((a, b) => a + b, 0) / ages.length;
  return avgAge;
}

function frequency(array) {
  // Frequency sourced from w3resources: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php
  let mostFreq = 1;
  let count = 0;
  let city;
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
      }
      if (mostFreq < count) {
        mostFreq = count;
        city = array[i];
      }
    }
    count = 0;
  }

  return city;
}

module.exports = {
  getPeople,
  getPersonById,
  howManyPerState,
  personByAge,
  peopleMetrics,
};
