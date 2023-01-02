import { Product } from "./productClass.js";

export function deleteProduct(productIDToDelete) {
  let theLocal = JSON.parse(localStorage.getItem("products"));
  console.log(theLocal);
  let indexOfTheProductToDelete = -1;
  theLocal.forEach((product, index) => {
    if (Number(product.productID) == Number(productIDToDelete)) {
      indexOfTheProductToDelete = index;
    }
  });
  if (indexOfTheProductToDelete != -1) {
    theLocal.splice(indexOfTheProductToDelete, 1);
    console.log(theLocal);
    localStorage.setItem("products", JSON.stringify(theLocal));
  } else {
    console.log("Product to delete not found");
  }
}

export const loadProducts = () => {
  let products = [];
  JSON.parse(localStorage.getItem("products") || "[]").forEach((x, index) => {
    products.push(
      new Product(
        x.productID,
        x.productName,
        x.productPrice,
        x.productDesc,
        x.productIMG
      )
    );
  });
  return products;
};

export function setProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}
