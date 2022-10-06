// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

const array1 = [1, 2, 3];
console.log(array1);

const reversed = array1.reverse();
console.log(reversed);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

const max = Math.max.apply(null, array1);

console.log(max);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

const min = Math.min.apply(null, array1);
console.log(min);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = array2.filter((number) => {
  return number % 2 === 0;
});

console.log(even); // 👉️ [2, 4, 6, 8]

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

const removeEven = array2.filter((number) => {
  return number % 2 !== 0;
});

console.log(removeEven);
/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

const stringento = "I live in the zoo next to a lot of poo";

console.log(stringento);

function noVowel(str) {
  let al = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!al.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

let str = "I live in the zoo next to a lot of poo";

console.log(noVowel(str));

let kim = noVowel(stringento);

console.log(kim);
/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

console.log(
  [1, 2, 3, 4, 37, 85, 94, 137, 485572].map(function (item) {
    return item + 1;
  })
);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

const farmAnimals = [
  "Bacon",
  "Sheep",
  "Dog",
  "Rooster",
  "Ostrich",
  "Rhinoceros",
];

console.log(farmAnimals);

const farmAnimalsLength = [
  "Bacon".length,
  "Sheep".length,
  "Dog".length,
  "Rooster".length,
  "Ostrich".length,
  "Rhinoceros".length,
];

console.log(farmAnimalsLength);
