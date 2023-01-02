export class Product {
  productID;
  productName;
  productPrice;
  productDesc;
  productIMG;
  constructor(productID, productName, productPrice, productDesc, productIMG) {
    this.productID = productID;
    this.productName = productName;
    this.productPrice = productPrice;
    this.productDesc = productDesc;
    this.productIMG = productIMG;
    this.productAmount = 0;
  }
}
