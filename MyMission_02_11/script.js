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

let Ben = new Reader("Ben", "Cohen", "natanya");
Ben.updateBook("Anna Karenina");
Ben.updateBook("Aya Pluto");

let Nave = new Reader("Nave", "Cohen", "Ashdod");
Nave.updateBook("Alice in Wonderland");
Nave.updateBook("Portrait of a lady");

let Sapir = new Reader("Sapir", "Cohen", "Ashdod");
Sapir.updateBook("a tale of five balloons");
Sapir.updateBook("Room on the Broom");

let Kobe = new Reader("Kobe", "Cohen", "Sderot");
Kobe.updateBook("the Hungry Caterpillar");
Kobe.updateBook("Surrender");

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
        console.log(Number(index + 1) + " " + book);
      });
      console.log("\n");
    });
  }
}
// Instance of WeeklyReport class
let newReport = new WeeklyReport("Report1");
// Adding readers
newReport.addNewUser(Ben);
newReport.addNewUser(Nave);
newReport.addNewUser(Sapir);
newReport.addNewUser(Kobe);

// Printing the Report
newReport.printReport();
