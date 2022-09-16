let products = [
  [0, "HP computer", 999],
  [1, "samsung Tv", 1299],
  [2, "DeLonghi Microwave", 199],
];

let shoppingCart = [];

function addToCart(productID) {
  shoppingCart.push(products[productID]);
  renderCartFromArray();
}
function renderCartFromArray() {
  document.getElementById("shoppingCart").innerHTML = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    let productHTML = document.createElement("div");
    let productDescription = document.createTextNode(
      shoppingCart[i][1] + ": cost " + shoppingCart[i][2] + "$"
    );
    let removeBtn = document.createElement("button");

    removeBtn.setAttribute(
      "onclick",
      "removeProduct (" + shoppingCart[i][0] + ")"
    );
    removeBtn.textContent = "remove";
    productHTML.appendChild(productDescription);
    productHTML.appendChild(removeBtn);

    productHTML.appendChild(removeBtn);
    document.getElementById("shoppingCart").appendChild(productHTML);
  }
}

function removeProduct(product) {
  let j = 0;
  for (let i = 0; i < shoppingCart.length && j < 1; i++) {
    if (shoppingCart[i][0] == product) {
      shoppingCart.splice(i, 1);
      renderCartFromArray();
      j++;
    }
  }
}
