import { Product } from "./productClass.js";
import { deleteProduct, loadProducts, setProducts } from "./shared.js";

const nameInput = document.querySelector("#productName");
const priceInput = document.querySelector("#productPrice");
const descriptionInput = document.querySelector("#description");
const imgUrlInput = document.querySelector("#imgurl");

// Create Product in The add page
const drawHTML = () => {
  const tbody = document.querySelector("#productsTable tbody");
  tbody.innerHTML = products.map((x, index) => {
    return `
  <tr data-id="${x.productID}">
      <td class="productInfo" style="display:none">${index + 1}.</td>
      <td class="productInfo" style="font-size:23px">${x.productName}</td>
      <td class="productInfo"><img src="${x.productIMG}"></td>
      <td class="productInfo" style="font-size:17px">${x.productDesc}</td>
   
      <td style="font-size:1.5rem">  $ <span class="productInfo">${
        x.productPrice
      }</span></td>
      
      <td><a class="deleteBtn ProductBTN">Delete Product </a>
        <a class="editBtn ProductBTN">Edit product</a>
        <a class="saveBtn ProductBTN">Save changes</a>
        <a class="cancelBtn ProductBTN">Cancel edit</a>
       </td>
  </tr>`;
  });

  // Remove ","
  tbody.innerHTML = tbody.innerHTML.replaceAll("</tr>,", "</tr>");

  // Removing edit Button & adding 2 Buttons
  tbody.querySelectorAll(".editBtn").forEach((x) =>
    x.addEventListener("click", (e) => {
      e.target.style.display = "none";
      e.target.parentElement.querySelector(".saveBtn").style.display = "inline";
      e.target.parentElement.querySelector(".cancelBtn").style.display =
        "inline";

      // Turn elements into input fields
      const tds =
        e.target.parentElement.parentElement.querySelectorAll(".productInfo");
      tds.forEach((x, index) => {
        if (x.querySelector(".deleteBtn") || index === 0) {
          return;
        }

        let img = x.querySelector("img");
        if (img) {
          x.innerHTML = `<input value="${img.src}">`;
        } else {
          x.innerHTML = `<input value="${x.innerText}">`;
        }
      });
    })
  );

  // Activating a Delete Button
  tbody.querySelectorAll("a.deleteBtn").forEach((x) =>
    x.addEventListener("click", (e) => {
      deleteProduct(e.target.parentElement.parentElement.dataset.id);
      products = loadProducts();
      drawHTML();
    })
  );

  // Activating a Save Button
  tbody.querySelectorAll("a.saveBtn").forEach((x) =>
    x.addEventListener("click", (e) => {
      const tr = e.target.parentElement.parentElement;
      const id = Number(tr.dataset.id);
      const found = products.find((x1) => x1.productID === id);
      if (found) {
        const tds = tr.querySelectorAll("td");
        found.productName = tds[1].querySelector("input").value;
        found.productPrice = tds[4].querySelector("input").value;
        found.productDesc = tds[3].querySelector("input").value;
        found.productIMG = tds[2].querySelector("input").value;
        console.log(found);
        setProducts(products);
      }
      drawHTML();
    })
  );
  // Activating Cancel Button
  tbody.querySelectorAll("a.cancelBtn").forEach((x) =>
    x.addEventListener("click", (e) => {
      drawHTML(e);
    })
  );
};

// calling functions load & draw
let products = loadProducts();
drawHTML();

// Create a new object of type Product
document.querySelector("#addProduct").addEventListener("click", () => {
  products.push(
    new Product(
      products.length,
      nameInput.value,
      priceInput.value,
      descriptionInput.value,
      imgUrlInput.value
    )
  );

  // Save in localStorage
  localStorage.setItem("products", JSON.stringify(products));
  drawHTML();
  nameInput.value = "";
  priceInput.value = "";
  descriptionInput.value = "";
  imgUrlInput.value = "";
});
