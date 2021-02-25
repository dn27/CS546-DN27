const people = require("./people");
const work = require("./work");

async function main() {
  // GetPeople
  /* try {
    const peopledata = await people.getPeople();
    console.log(peopledata);
  } catch (e) {
    console.log(e);
  } */

  // GetPersonByID
  try {
    let person = await people.getPersonById(43);
    console.log(person);
  } catch (e) {
    console.log(e);
  }

  try {
    let person = await people.getPersonById();
    console.log(person);
  } catch (e) {
    console.log(e);
  }

  try {
    console.log(await people.getPersonById(9999));
  } catch (e) {
    console.log(e);
  }

  // HowManyPerState
  try {
    console.log(await people.howManyPerState("NY"));
  } catch (e) {
    console.log(e);
  }

  try {
    console.log(await people.howManyPerState("CO"));
  } catch (e) {
    console.log(e);
  }

  try {
    console.log(await people.howManyPerState("CA"));
  } catch (e) {
    console.log(e);
  }

  try {
    console.log(await people.howManyPerState("NZ"));
  } catch (e) {
    console.log(e);
  }

  try {
    console.log(await people.howManyPerState());
  } catch (e) {
    console.log(e);
  }

  // PersonByAge
  try {
    console.log(await people.personByAge(0));
  } catch (e) {
    console.log(e);
  }

  try {
    console.log(await people.personByAge(43));
  } catch (e) {
    console.log(e);
  }

  try {
    console.log(await people.personByAge(500));
  } catch (e) {
    console.log(e);
  }

  try {
    console.log(await people.personByAge(999));
  } catch (e) {
    console.log(e);
  }

  try {
    console.log(await people.personByAge(1000));
  } catch (e) {
    console.log(e);
  }
  // PeopleMetrics
  try {
    console.log(await people.peopleMetrics());
  } catch (e) {
    console.log(e);
  }

  try {
    console.log(await work.whereDoTheyWork("299-63-8866"));
  } catch (error) {
    console.log(error);
  }

  try {
    console.log(await work.whereDoTheyWork("277-85-0056"));
  } catch (error) {
    console.log(error);
  }

  try {
    console.log(await work.whereDoTheyWork());
  } catch (error) {
    console.log(error);
  }

  try {
    console.log(await work.whereDoTheyWork(10456747));
  } catch (error) {
    console.log(error);
  }

  try {
    console.log(await work.whereDoTheyWork("264-67-0084"));
  } catch (error) {
    console.log(error);
  }

  try {
    console.log(await work.fourOneOne("240-144-7553"));
  } catch (error) {
    console.log(error);
  }

  try {
    console.log(await work.listEmployees());
  } catch (error) {
    console.log(error);
  }
}

//call main
main();
