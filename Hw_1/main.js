//1

const colors = [
  "red",
  "blue",
  "black",
  "pink",
  "green",
  "gray",
  "white",
  "orange",
  "cyan",
  "brown",
];

//logs true and false
// for (let i = 0; i < colors.length; i++) {
//   const filter = colors[i].startsWith("b");
//   console.log(filter);
// }

results = [];

for (let i = 0; i < colors.length; i++) {
  if (colors[i].startsWith("b")) {
    results.push(colors[i]);
  }
}

results.unshift("boy");
results.push("bread");

console.log(results);

//2
let ages = [12, 25, 18, 33, 7, 42, 16, 29, 10];

function adult(age) {
  return age >= 18;
}

const filteredAges = ages.filter(adult);

filteredAges.sort(function (a, b) {
  return a - b;
});

console.log(filteredAges);
