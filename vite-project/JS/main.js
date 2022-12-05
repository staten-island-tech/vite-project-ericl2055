DOMSelectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = "dark";
    DOMSelectors.button.classList = "dark";
    DOMSelectors.input.classList = "dark";
  } else {
    document.body.classList = "light";
    DOMSelectors.button.classList = "light";
    DOMSelectors.input.classList = "light";
  }
});

DOMSelectors.input.addEventListener("change", function () {
  if (DOMSelectors.input.value == "val1") {
    all(products);
    console.log(card);
  } else if ((DOMSelectors.input.value = "val2")) {
    remove();
    ps(products);
  } else if ((DOMSelectors.input.value = "val3")) {
    remove();
    xbox(products);
  } else {
    remove();
    pc(products);
  }
});

function remove() {}
let card = document.querySelectorAll("#cards");

function pc() {
  products
    .filter((products) => products.compatible.includes("PC"))
    .forEach((products) => {
      let name = products.name;
      let price = products.price;
      let compatibility = products.compatible;
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class="cards" id = "cards">
      <h4> ${name}</h4>
      <h4>${price}</h4>
      <h5>${compatibility}</h5>  
      </div>`
      );
    });
}

function xbox() {
  products
    .filter((products) => products.compatible.includes("Xbox Series X/S"))
    .forEach((products) => {
      let name = products.name;
      let price = products.price;
      let compatibility = products.compatible;
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class ="cards" id = cards>
      <h4> ${name}</h4>
      <h4>${price}</h4>
      <h5>${compatibility}</h5>  
      </div>`
      );
    });
}
function ps() {
  products
    .filter((products) => products.compatible.includes("PS5"))
    .forEach((products) => {
      let name = products.name;
      let price = products.price;
      let compatibility = products.compatible;
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "cards" id = cards>
      <h4> ${name}</h4>
      <h4>${price}</h4>
      <h5>${compatibility}</h5>  
      </div>`
      );
    });
}
function all() {
  products.forEach((products) => {
    let name = products.name;
    let price = products.price;
    let compatibility = products.compatible;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class = "cards" id = cards>
      <h4> ${name}</h4>
      <h4>${price}</h4>
      <h5>${compatibility}</h5>  
      </div>`
    );
  });
}

import { DOMSelectors } from "./dom";
import { products } from "./array";
