import "./style.css";
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = "dark";
  } else {
    document.body.classList = "light";
  }
});