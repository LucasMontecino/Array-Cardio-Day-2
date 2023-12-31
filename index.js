// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const adultFunction = (yearBorn, age) => {
  const currentYear = new Date().getFullYear();
  return currentYear - yearBorn >= age;
};

const isAdult = people.some((el) => adultFunction(el.year, 19));
console.log(isAdult);

// Array.prototype.every() // is everyone 19 or older?
const allAdult = people.every((el) => adultFunction(el.year, 19));
console.log(allAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
let id = 823423;

const findId = comments.find((el) => el.id === id);
console.log(findId);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex((el) => el.id === id);
console.log(index);

// de esta forma modifico el array
// comments.splice(index, 1);
// console.table(comments);

// no modifico el array original, creo uno nuevo

const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.table(comments);
console.table(newComments);
