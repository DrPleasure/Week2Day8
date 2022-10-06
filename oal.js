/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const numbers = ["1", "2", "3", "4", "5"];
console.log(numbers);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const student = {
  firstName: "Olaf",
  lastName: "Glad",
  eMail: "Dongladen@gmail.com",
  age: 29,
};

console.log(student);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

student.license = true;

// student.propertyToBeRemoved = null;

console.log(student);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete student.age;

console.log(student);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const studentTwo = Object.assign({}, student);

studentTwo.firstName = "Dennis";
studentTwo.lastName = "Donkey";
studentTwo.eMail = "animal@gmail.com";

console.log(studentTwo);

let compare = student.eMail === studentTwo.eMail;

console.log(compare);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let cartPrice = 70;
let shippingCost = 10;

let totalShoppingCart;
if (cartPrice >= 50) {
  total = cartPrice; // if its 50 or over its eligible for free shipping making it just the cartprice
  console.log("\n !!!FREE SHIPPING FOR YOU!!!");
} else {
  totalShoppingCart = cartPrice + shippingCost;
  console.log("You don't want free shipping?");
}

// TERNARY OPERATOR
totalShoppingCart = cartPrice >= 50 ? cartPrice : cartPrice + shippingCost;

console.log(totalShoppingCart);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let blackFridaySale = (cartPrice / 100) * 80;

console.log(blackFridaySale);

totalShoppingCart;
if (blackFridaySale >= 50) {
  total = cartPrice; // if its 50 or over its eligible for free shipping making it just the cartprice
  console.log("\n !!!FREE SHIPPING FOR YOU!!!");
} else {
  totalShoppingCart = cartPrice + shippingCost;
  console.log("You don't want free shipping?");
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const car = {
  brand: "audi",
  model: "A7",
  licensePlate: "VT52610",
};

console.log(car);

const car2 = Object.assign({}, car);

car2.licensePlate = "BB58054";

const car3 = Object.assign({}, car);

car3.licensePlate = "AV8054";

const car4 = Object.assign({}, car);

car4.licensePlate = "XD58054";

const car5 = Object.assign({}, car);

car5.licensePlate = "TP58054";

const car6 = Object.assign({}, car);

car6.licensePlate = "HP58054";

console.log(car5);
/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const carsForRent = [car, car2, car3, car4, car5, car6];

console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

const removedCar = carsForRent.pop();
carsForRent.shift();

console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(typeof car);

console.log(typeof car.licensePlate);

console.log(typeof car.brand);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

const carsForSale = [];

carsForSale.push(car2, car4, car5);

console.log(carsForSale);

const totalCars = carsForSale.length + carsForRent.length;

console.log(totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let i = 0; i < carsForSale.length; i++) {
  console.log(i);
  console.log(carsForSale[i]);
  carsForSale;
}
