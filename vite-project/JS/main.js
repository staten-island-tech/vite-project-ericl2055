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
filter(DOMSelectors.input);
function filter() {
  if (DOMSelectors.input.value == "val1") {
    all(products);
  } else if ((DOMSelectors.input.value = "val2")) {
    ps(products);
  } else if ((DOMSelectors.input = "val3")) {
    xbox(products);
  } else if ((DOMSelectors.input.value = "val4")) {
    pc(products);
  }
}

function remove() {
  card = document.querySelectorAll("#card");
  card.forEach((card) => {
    card.target.parentElement.remove();
  });
}
function pc() {
  products
    .filter((products) => products.compatible.includes("PC"))
    .forEach((products) => {
      let name = products.name;
      let price = products.price;
      let compatibility = products.compatible;
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div id = cards>
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
        `<div id = cards>
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
        `<div id = cards>
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
      `<div id = cards>
      <h4> ${name}</h4>
      <h4>${price}</h4>
      <h5>${compatibility}</h5>  
      </div>`
    );
  });
}

import { DOMSelectors } from "./dom";
import { products } from "./array";
