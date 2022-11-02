class Reader {
  constructor(firstName, lastName, Hometown) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Hometown = Hometown;
    this.books = [];
  }

  updateBook(book) {
    this.books.push(book);
  }
}

let user1 = new Reader("Ben", "Cohen", "natanya");
user1.updateBook("Anna Karenina");
user1.updateBook("Aya Pluto");

let user2 = new Reader("Nave", "Cohen", "Ashdod");
user2.updateBook("Alice in Wonderland");
user2.updateBook("Portrait of a lady");
console.log(user1.books);
console.log(user2.books);
