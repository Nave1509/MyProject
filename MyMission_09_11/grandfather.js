export class Grandfather {
  #lastName;
  #business;
  constructor(lastName, business) {
    this.#lastName = lastName;
    this.#business = business;
  }
  printAll() {
    console.log(
      `Grandpa Yosef bequeaths the family name: ${
        this.#lastName
      } and his business: ${this.#business} to his son`
    );
  }
  getLastName() {
    return this.#lastName;
  }
  getBusiness() {
    return this.#business;
  }
}
