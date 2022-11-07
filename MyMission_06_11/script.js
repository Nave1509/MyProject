class Readers {
  constructor(firstName, lastName, Hometown) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Hometown = Hometown;
    this.books = [];
  }

  updateBook(book) {
    if (book.BorrowBook) {
      this.books.push(book);
      console.log(
        this.firstName +
          " " +
          this.lastName +
          " borrowed the book " +
          book.bookName
      );
    } else {
      console.log(
        `Sorry, ${this.firstName} ${this.lastName}, you can't borrow this book: ${book.bookName}.`
      );
    }
  }
}
//Book Class
class Book {
  constructor(bookName, AuthorsName, BorrowBook) {
    this.bookName = bookName;
    this.AuthorsName = AuthorsName;
    this.BorrowBook = BorrowBook;
  }
}

//WeeklyReport class
class WeeklyReport {
  constructor(Name) {
    this.Name = Name;
    this.allUsers = [];
  }
  addNewUser(user) {
    this.allUsers.push(user);
  }
  printReport() {
    this.allUsers.forEach((element) => {
      console.log(
        element.firstName +
          " " +
          element.lastName +
          " " +
          ",who lives in the city of " +
          element.Hometown +
          " ,Borrow the book:"
      );
      element.books.forEach((book, index) => {
        console.log(
          Number(index + 1) +
            ". " +
            book.bookName +
            " written by " +
            book.AuthorsName
        );
      });
      console.log("\n");
    });
  }
}
let book1 = new Book("Anna Karenina", "Lev Tolstoy", true);
let book2 = new Book("Aya Pluto", "Lea Goldberg", false);
let book3 = new Book("Portrait of a lady", "Henry James", true);
let book4 = new Book("Room on the Broom", "Julia Donaldson", false);

let Ben = new Readers("Ben", "Cohen", "natanya");
Ben.updateBook(book1);
Ben.updateBook(book2);

let Nave = new Readers("Nave", "Cohen", "Ashdod");
Nave.updateBook(book3);
Nave.updateBook(book4);

let Sapir = new Readers("Sapir", "Cohen", "Ashdod");
Sapir.updateBook(book2);
Sapir.updateBook(book1);

let Kobe = new Readers("Kobe", "Cohen", "Sderot");
Kobe.updateBook(book1);
Kobe.updateBook(book3);

// Instance of WeeklyReport class
let newReport = new WeeklyReport("Report1");
// Adding readers
newReport.addNewUser(Ben);
newReport.addNewUser(Nave);
newReport.addNewUser(Sapir);
newReport.addNewUser(Kobe);

// Printing the Report
console.log(" ");
newReport.printReport();
