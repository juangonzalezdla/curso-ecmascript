// Declarando
class User {};

//Instacia de una clase
const newUser = new User();

class user {
  //jMetodo
  greeting() {
    return 'hello';
  }
};

const juan = new user();
console.log(juan.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

class user {
  //Constructor
  constructor() {
    console.log('Nuevo usuario');
  }
  greeting() {
    return 'hello';
  }
};

const david = new user();

// This

class user {
  constructor(name) {
    this.name = name;
  }
  // Metedos
  speak() {
    return 'hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
};

const ana = new user('ana');
console.log(ana.greeting());


// Getters Setters

class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Metedos
  speak() {
    return 'hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
};

const bebeloper1 = new user('david', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);