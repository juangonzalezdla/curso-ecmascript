function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);



export function* getId() {
  let number = 0;
  let id;
  while (true) {
    number++;
    yield id = number;
  }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);