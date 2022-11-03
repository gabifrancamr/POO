const Address = require("./Address");
const Person = require("./Person");

const addr = new Address('7 de set', 99, 'centro', 'são fidelis', 'RJ')
const john = new Person('John Doe', addr)

console.log(john)
console.log(john.address.fullAddress())