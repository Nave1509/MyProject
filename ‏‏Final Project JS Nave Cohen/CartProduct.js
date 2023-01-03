let buyProducts = [];
let index = 0;

export class Cart {
  #allProducts;
  constructor(allProducts) {
    this.#allProducts = allProducts;
    this.cartProducts = [];
    this.cartIcon = document.querySelector("#cart-icon");
    this.cartIcon.addEventListener("click", () => {
      this.cartDiv.classList.add("active");
    });
    this.cartDiv = document.querySelector(".cart");
    this.closeCart = document.querySelector("#close-cart");
    this.closeCart.addEventListener("click", () => {
      this.cartDiv.classList.remove("active");
    });
    this.ready();
    this.updateAllProducts(this.updatedProducts);
  }

  ready() {
    // Buy Button Work
    document
      .getElementsByClassName("btn-buy")[0]
      .addEventListener("click", () => this.buyButtonClicked());
  }

  // Buy Button Function
  buyButtonClicked() {
    alert("Your Order is placed");
    let cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
      cartContent.removeChild(cartContent.firstChild);
    }
    this.updateTotal();
  }

  // remove Item From Cart
  removeCartItem(event) {
    let buttonClicked = event.target;
    let root = buttonClicked.parentElement;
    root.remove();
    this.updateTotal();
    let productID = Number(root.dataset.productId);

    buyProducts = JSON.parse(localStorage.getItem("buyProducts"));

    const foundIndex = buyProducts.findIndex((x) => x.productID == productID);
    if (foundIndex != -1) {
      buyProducts.splice(foundIndex, 1);
      localStorage.setItem("buyProducts", JSON.stringify(buyProducts));
    }
  }

  // Add To Cart
  addCartClicked(e) {
    let button = e.target;
    let shopProducts = button.parentElement.parentElement.parentElement;
    let count = shopProducts.getElementsByClassName("AmountInput")[0].value;
    if (parseInt(count) !== 0) {
      let title =
        shopProducts.getElementsByClassName("productTitle")[0].innerText;
      let showPrice =
        shopProducts.getElementsByClassName("productPrice")[0].innerText;
      let productID = shopProducts.dataset.productId;
      let productImg = shopProducts.getElementsByClassName("productImg")[0].src;
      this.addProductToCart(productID, title, showPrice, productImg, count);
      this.updateTotal();
    } else {
      alert("You cant add product with price 0");
    }
  }

  checkIfExist(objProduct) {
    for (let i = 0; i < buyProducts.length; ++i) {
      if (buyProducts[i].title === objProduct.title) {
        return i;
      }
    }
    return false;
  }

  removeCartFromHTML() {
    let allBox = document.querySelectorAll(".cart-box");
    if (allBox.length > 0) {
      allBox.forEach((element) => {
        element.remove();
      });
    }
  }

  printToHTML() {
    let cartBoxContent = document.querySelector(".cart-content");
    for (let i = 0; i < buyProducts.length; ++i) {
      cartBoxContent.innerHTML += `
      <div class="cart-box" data-product-id="${buyProducts[i].productID}">
        <img src="${buyProducts[i].productImg}" alt="" class="cart-img" />
        <div class="detail-box">
          <h3 class="productTitle">${buyProducts[i].title}</h3>
          <div class="productPrice">${buyProducts[i].showPrice}</div>
          <input type="number" min="0" value="${buyProducts[i].count}" class="cart-quantity" />
        </div>
        <!-- Remove Cart-->
        <i class="bx bxs-trash-alt cart-remove"></i>
      </div>`;
    }
  }

  // addProductToCart
  addProductToCart(productID, title, showPrice, productImg, count) {
    console.log("add");
    let objProduct = {
      title,
      showPrice,
      productImg,
      productID,
      count: parseInt(count),
    };
    if (count === undefined) {
      count = 1;
    }
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add("myProduct");
    let cartItems = document.getElementsByClassName("cart-content")[0];
    let cartItemsNames = cartItems.getElementsByClassName("productTitle");

    index = this.checkIfExist(objProduct);

    if (index !== false) {
      buyProducts = JSON.parse(localStorage.getItem("buyProducts"));
      buyProducts[index].count += parseInt(count);
      localStorage.setItem("buyProducts", JSON.stringify(buyProducts));
    } else {
      buyProducts.push(objProduct);
      localStorage.setItem("buyProducts", JSON.stringify(buyProducts));
    }

    this.removeCartFromHTML();
    this.printToHTML();

    // Quantity Change input
    let quantityInputs = document.getElementsByClassName("cart-quantity");
    for (let i = 0; i < quantityInputs.length; i++) {
      let input = quantityInputs[i];
      input.addEventListener("change", this.updateTotal);
    }
    // Quantity Change Remove from Cart
    let removeCartButtons = document.getElementsByClassName("cart-remove");
    for (let i = 0; i < removeCartButtons.length; i++) {
      let button = removeCartButtons[i];
      button.addEventListener("click", (e) => this.removeCartItem(e));
    }
  }

  // Update All Product
  updateAllProducts(updatedProducts) {
    this.allProducts = updatedProducts;
  }

  // Update The Total
  updateTotal() {
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
      let cartBox = cartBoxes[i];
      let priceElement = cartBox.getElementsByClassName("productPrice")[0];
      let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      let price = parseFloat(priceElement.innerText.replace("$", ""));
      let quantity = quantityElement.value;
      total = total + price * quantity;
    }
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
}
