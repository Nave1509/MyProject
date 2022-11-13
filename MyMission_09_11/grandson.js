import { Father } from "./father.js";

export class GrandSon extends Father {
  #car;
  constructor(lastName, Business, HomeTown, car) {
    super(lastName, Business, HomeTown);
    this.#car = car;
  }
  printAll() {
    console.log(
      `Grandpa Yosef Bequeaths to his descendants the family name: ${this.getLastName()} and his Business: ${this.getBusiness()} and also his House which is in ${this.getHomeTown()} and in addition also his ${
        this.#car
      } car.`
    );
  }
}
