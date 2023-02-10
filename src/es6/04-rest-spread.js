// Array destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = { userName: 'Juan', age: 18 };
let { userName, age } = user;
console.log(userName, user.age);


// Spread operator

let person = { name: 'Juan', age: 18 };
let country = 'CO';

let data = { id: 1, ...person, country };

console.log(data);

// Rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);