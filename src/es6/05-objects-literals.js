// Enahced object literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId
  }
}

console.log(newUser('juan', 18, "CO", 1));