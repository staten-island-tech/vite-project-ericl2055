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

function filter() {
  if (DOMSelectors.input === "All Products") {
    console.log(products);
  }
}

const products = [
  {
    name: "Call Of Duty : Modern Warfare 2 (PS5, Series X/S)",
    price: "$69.99",
    compatible: ["PS5", "PS4", "Xbox Series X/S"],
  },
  {
    name: "God of War : Ragnarök (PS5, 4)",
    price: "$69.99",
    compatible: ["PS5", "PS4"],
  },
  {
    name: "Twitch Gift Card",
    price: "$50.00",
    compatible: ["PC"],
  },
  {
    name: "Apex Legends Gift Card (1000 Coins)",
    price: "$9.99",
    compatible: [
      "PC",
      "PS5",
      "PS4",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
    ],
  },
];

products.forEach((products) => {
  products.compatible.forEach((compatible) => console.log(compatible));
});

function create() {
  products.forEach((products) => {
    let name = products.name;
    let price = products.price;
    let compatibility = products.compatible;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div id = cards>
      <h3> ${name}</h3>
      <h4>${price}</h4>
      <p>${compatibility}</p>  
      </div>`
    );
  });
}

create(products);
