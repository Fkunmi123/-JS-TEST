// Question 1

let a = 3;
let b = 4;
let c = 7;

let two = ((5 * c - 2 * a) / (3 * b + 1 * b)) * (3 * c - 2 * b);

alert(two);

// Question 2

let calc = function (l) {
  let x = prompt('pick a number');
  alert(x * x);
};

calc();

// Question 3

const randomFacts = [
  'The Earth is the third planet from the Sun',
  'A group of Cows is called a Herd',
  'Bananas are berries, but Strawberries are not',
  'Honey never spoils',
  'The Great wall of China is visible from space',
  'Octopuses have three hearts',
  'Penguins only live in the Southern hemisphere',
  'The Eiffel tower can be about 15 cm taller in the Summer',
  'A day on Venus is longer than a year on Venus',
  'The Antarctic Blue Whale is the biggest animal in the World',
];

let on = Math.floor(Math.random() * 10);

alert(randomFacts[on]);
