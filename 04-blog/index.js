const Author = require("./Author");

const john = new Author('John Doe')

const post = john.writePost("Título do post", "Lorem ipsum...")

post.addComent('Isaac Pontes', 'Muito bom')
post.addComent('Lucas', "Achei interessante")

console.log(john)
console.log(post)