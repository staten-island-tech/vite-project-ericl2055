const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.getElementById("filter"),
  container: document.getElementById("container"),
};

console.log(DOMSelectors.container);
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

products.forEach((products) => {
  products.compatible.forEach((compatible) => console.log(compatible));
});

function create() {
  if (DOMSelectors.input === "All Products") {
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
  } else if (DOMSelectors.input === "Playstation") {
    products
      .filter((products) => products.compatible.includes("Playstation"))
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
}

create(products);

import { products } from "./array";
