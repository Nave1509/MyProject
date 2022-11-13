import { Grandfather } from "./grandfather.js";

export class Father extends Grandfather {
  #HomeTown;
  constructor(lastName, business, HomeTown) {
    super(lastName, business);
    this.#HomeTown = HomeTown;
  }
  printAll() {
    console.log(
      `Grandpa Yosef Bequeaths the family name: ${
        this.getLastName
      } and his Business: ${this.getBusiness} and also his house which is in  ${
        this.#HomeTown
      }`
    );
  }
  getHomeTown() {
    return this.#HomeTown;
  }
}
