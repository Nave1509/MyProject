// class Readers {
//   constructor(firstName, lastName, Hometown) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.Hometown = Hometown;
//     this.books = [];
//   }

//   updateBook(book) {
//     this.books.push(book);
//   }
// }

// let Ben = new Readers("Ben", "Cohen", "natanya");
// Ben.updateBook("Anna Karenina");
// Ben.updateBook("Aya Pluto");

// let Nave = new Readers("Nave", "Cohen", "Ashdod");
// Nave.updateBook("Alice in Wonderland");
// Nave.updateBook("Portrait of a lady");

// let Sapir = new Readers("Sapir", "Cohen", "Ashdod");
// Sapir.updateBook("a tale of five balloons");
// Sapir.updateBook("Room on the Broom");

// let Kobe = new Readers("Kobe", "Cohen", "Sderot");
// Kobe.updateBook("the Hungry Caterpillar");
// Kobe.updateBook("Surrender");

// //WeeklyReport class
// class WeeklyReport {
//   constructor(Name) {
//     this.Name = Name;
//     this.allUsers = [];
//   }
//   addNewUser(user) {
//     this.allUsers.push(user);
//   }
//   printReport() {
//     this.allUsers.forEach((element) => {
//       console.log(
//         element.firstName +
//           " " +
//           element.lastName +
//           " " +
//           ",who lives in the city of " +
//           element.Hometown +
//           " ,Borrow the book:"
//       );
//       element.books.forEach((book, index) => {
//         console.log(Number(index + 1) + " " + book);
//       });
//       console.log("\n");
//     });
//   }
// }
// // Instance of WeeklyReport class
// let newReport = new WeeklyReport("Report1");
// // Adding readers
// newReport.addNewUser(Ben);
// newReport.addNewUser(Nave);
// newReport.addNewUser(Sapir);
// newReport.addNewUser(Kobe);
// newReport.addNewUser(new Readers("lior", "Jacob", "Holon"));

// // Printing the Report
// newReport.printReport();

class Readers {
  firstName;
  lastName;
  HomeTown;
  constructor(firstName, lastName, HomeTown) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.HomeTown = HomeTown;
    this.allReaders = [];
  }
  updateBook(book) {
    this.allReaders.push(book);
  }
}
let Ben = new Readers("Ben", "Cohen", "Natanya");
Ben.updateBook("Anna Karenina");

let Nave = new Readers("Nave", "Cohen", "Ashdod");
Nave.updateBook("Alice in wonderLand");

let Kobe = new Readers("Kobe", "Cohen", "sderot");
Nave.updateBook("The Hungry Caterpillar");

let Sapir = new Readers("Sapir", "Cohen", "Ashdod");
Nave.updateBook("Room on the Broom");
