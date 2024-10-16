const menuToggle = document.querySelector(".header__toggle");

menuToggle.addEventListener("click", () => {
  const menu = document.querySelector(".header");
  menu.classList.toggle("header--open");
  console.log("toggle");
});

const moreTilesButton = document.querySelector("#moreTiles");
if (moreTilesButton) {
  moreTilesButton.addEventListener("click", (e) => {
    const tiles = document.querySelectorAll(".tile.hidden");
    tiles.forEach((tile) => {
      tile.classList.remove("hidden");
    });
    e.target.classList.add("hidden");
  });
}
