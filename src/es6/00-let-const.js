var lastName = 'Gonzalez';
lastName = 'De Las Aguas';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Cow';
// animal = 'Parrot'; Error! - Const Can't be reasiggned
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = 'Apple'; // Function Scope
    let fruit2 = 'Kiwi'; // Block Scope
    const fruit3 = 'banana'; // Block Scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits();