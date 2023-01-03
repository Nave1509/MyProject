import { Cart } from "./CartProduct.js";
import { loadProducts } from "./shared.js";

export class Store {
  constructor() {
    this.navbar = document.querySelector(".navbar");
    document.querySelector("#menu-btn").onclick = () => {
      this.navbar.classList.toggle("active");
      this.cartItem.classList.remove("active");
    };

    this.cartItem = document.querySelector(".cart");
    document.querySelector("#cart-icon").onclick = () => {
      this.cartItem.classList.toggle("active");
      this.navbar.classList.remove("active");
    };

    window.onscroll = () => {
      this.navbar.classList.remove("active");
      this.cartItem.classList.remove("active");
    };

    this.allProducts = loadProducts();
    this.productsDiv = document.querySelector("section  #myProducts");
    this.allProducts.forEach((product) => this.showProduct(product));
    this.cart = new Cart(this.allProducts);
  }
  // create product Doms
  showProduct(product) {
    let myProductDiv = document.createElement("div");
    myProductDiv.setAttribute("class", "myProduct");
    myProductDiv.setAttribute("data-product-id", product.productID);

    let ProductTitle = document.createElement("h3");
    ProductTitle.setAttribute("class", "productTitle");
    ProductTitle.innerHTML = product.productName;
    myProductDiv.appendChild(ProductTitle);

    let myProductImg = document.createElement("img");
    myProductImg.setAttribute("class", "productImg");
    myProductImg.setAttribute("src", product.productIMG);
    myProductDiv.appendChild(myProductImg);

    let myProductDesc = document.createElement("p");
    myProductDesc.innerHTML = product.productDesc;
    myProductDesc.setAttribute("class", "ProductDesc");
    myProductDiv.appendChild(myProductDesc);

    let myProductPrice = document.createElement("p");
    myProductPrice.setAttribute("class", "productPrice");
    myProductPrice.innerHTML = `${product.productPrice} $ per 1 Un`;
    myProductDiv.appendChild(myProductPrice);

    let myProductInputP = document.createElement("p");
    myProductInputP.setAttribute("class", "AmountPar");
    let myProductInputLabel = document.createElement("label");
    myProductInputLabel.setAttribute(
      "for",
      product.productName + "amountLabel"
    );
    myProductInputLabel.innerHTML = "Amount: ";
    myProductInputP.appendChild(myProductInputLabel);
    let myProductInput = document.createElement("input");
    myProductInput.setAttribute("type", "number");
    myProductInput.setAttribute("name", product.productName + "amountLabel");
    myProductInput.setAttribute("id", product.productName + "AmountLabel");
    myProductInput.setAttribute("class", "AmountInput");
    myProductInput.setAttribute("value", 0);
    myProductInput.setAttribute("min", 0);
    myProductInput.addEventListener("change", () => {
      product.productAmount = myProductInput.value;
    });
    myProductInputP.appendChild(myProductInput);
    myProductDiv.appendChild(myProductInputP);

    let CartBtnPar = document.createElement("p");
    CartBtnPar.setAttribute("class", "CartBtn");

    let addToCart = document.createElement("a");
    addToCart.setAttribute("id", "add" + product.productID);
    addToCart.setAttribute("class", "addToCart");
    let shoppingBag = document.createElement("i");
    shoppingBag.setAttribute("class", "bx bx-shopping-bag add-cart");
    shoppingBag.innerHTML = "Add To Cart";
    addToCart.appendChild(shoppingBag);
    addToCart.addEventListener("click", (e) => {
      this.cart.addCartClicked(e);
    });

    CartBtnPar.appendChild(addToCart);
    myProductDiv.appendChild(CartBtnPar);
    this.productsDiv.appendChild(myProductDiv);
  }
}
// create a new Object of type Stor
new Store();
