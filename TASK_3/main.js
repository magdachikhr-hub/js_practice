//3.1

const fruit = [
  "apple",
  "kiwi",
  "banana",
  "fig",
  "mango",
  "pear",
  "watermelon",
  "plum",
  "grape",
  "peach",
  "lime",
];

const shortWords = [];

for (let i = 0; i < fruit.length; i++) {
  if (fruit[i].length < 6) {
    shortWords.push(fruit[i]);
  }
}

// console.log(fruit);
console.log(shortWords);

//3.2

shortWords.unshift("dogs");
shortWords.push("cat");

//3.3

let prices = [120, 55, 300, 80, 45, 210, 18, 95, 400];

const filteredNumbers = prices.filter(function filterNumbers(item) {
  return item < 100;
});

console.log(filteredNumbers);

//3.4

let firstArray = [12, -3, 7, 0, 25];
let secondArray = [5, 18, -1, 9, 2];

let thirdArr = [...firstArray, ...secondArray];

thirdArr.sort((a, b) => a - b);
console.log(thirdArr);

for (const number of thirdArr) {
  console.log(number);
}

//3.3 another way of doing it

const newArr = prices.filter((a) => a < 100);
console.log(newArr);
