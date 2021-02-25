const axios = require("axios");

async function getWork() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json"
  );
  //const parsedData = JSON.parse(data);
  // parse the data from JSON into a normal JS Object
  return data;
  // this will be the array of people objects
}

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

async function listEmployees() {
  // TODO
  let companyData = await getWork();
  let peopleData = await getPeople();
  let companyEmployees = [];
  companyData.forEach(function (data) {
    let employeesList = data.employees;
    for (var i = 0; i < employeesList.length; i++) {
      let employee = peopleData.find(
        (empMatch) => empMatch.id === employeesList[i]
      );
      employeesList[i] = {
        first_name: employee.first_name,
        last_name: employee.last_name,
      };
    }
    companyEmployees.push({
      company_name: data.company_name,
      employees: employeesList,
    });
  });
  // return company data with just company name and list of employees
  return companyEmployees;
}

// phoneNumber and ssn regex format sourced from w3resources: https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-15.php
async function fourOneOne(phoneNumber) {
  //TODO
  let numberFormat = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
  if (phoneNumber === undefined || typeof phoneNumber != "string") {
    throw `phoneNumber expected as string but not provided`;
  } else if (!numberFormat.test(phoneNumber)) {
    throw `${phoneNumber} must be formatted as XXX-XXX-XXXX.`;
  }

  const companyData = await getWork();
  // find company from phone number
  let company = companyData.find(
    (companyMatch) => companyMatch.company_phone === phoneNumber
  );
  if (company === undefined) {
    throw `No company found with that phone number.`;
  }
  // return company's name and address
  let comp = {
    company_name: company.company_name,
    company_address: company.company_address,
  };
  return comp;
}

async function whereDoTheyWork(ssn) {
  //TODO
  let ssnFormat = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
  if (ssn === undefined || typeof ssn != "string") {
    throw `Social Secutiry Number expected as string but not provided`;
  } else if (!ssnFormat.test(ssn)) {
    throw `${ssn} must be formatted as XXX-XX-XXXX`;
  }

  const people = await getPeople();
  const companyData = await getWork();
  //find person from ssn
  let person = people.find((personMatch) => personMatch.ssn === ssn);
  if (person === undefined) {
    throw `No one exists with that SSN.`;
  }

  let name = person.first_name + " " + person.last_name;
  let workplace = "";
  companyData.forEach(function (e) {
    if (e.employees.includes(person.id)) {
      workplace = e.company_name;
    }
  });
  return name + " works at " + workplace + ".";
}

module.exports = {
  getPeople,
  getWork,
  listEmployees,
  fourOneOne,
  whereDoTheyWork,
};
