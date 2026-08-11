const book = { title: "the Torah", author: "HASHEM", year: 0, describe: function() {return `${this.title} by ${this.author} (${this.year})`} }
const prop = "author"

console.log(book.title)
console.log(book.author)
console.log(book.year)

console.log(book[prop])

console.log(book.describe())