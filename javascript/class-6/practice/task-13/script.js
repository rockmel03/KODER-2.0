const searchBox = document.querySelector("#searchBox");
const searchInput = searchBox.querySelector("input[type='search']");

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();
    searchBox.classList.remove("hidden");
    searchInput.focus();
  }
  if (e.key == "Escape") {
    searchBox.classList.add("hidden");
    searchInput.value = "";
  }
});
