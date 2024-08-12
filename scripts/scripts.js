const menuToggle = document.querySelector(".header__toggle");

menuToggle.addEventListener("click", () => {
  const menu = document.querySelector(".header");
  menu.classList.toggle("header--open");
  console.log("toggle");
});
