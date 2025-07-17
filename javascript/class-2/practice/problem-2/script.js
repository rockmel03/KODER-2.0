const products = [
  { id: 1, name: "Wireless Mouse", price: 799, category: "Electronics" },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 1999,
    category: "Electronics",
  },
  { id: 3, name: "Water Bottle", price: 299, category: "Home & Kitchen" },
  { id: 4, name: "Notebook", price: 149, category: "Stationery" },
  { id: 5, name: "T-shirt", price: 499, category: "Clothing" },
  { id: 6, name: "Sneakers", price: 2199, category: "Footwear" },
  {
    id: 7,
    name: "LED Table Lamp",
    price: 899,
    category: "Home & Kitchen",
  },
  {
    id: 8,
    name: "Smartphone Stand",
    price: 249,
    category: "Accessories",
  },
  { id: 9, name: "Backpack", price: 1299, category: "Bags" },
  { id: 10, name: "Sunglasses", price: 649, category: "Fashion" },
];

const productsContainer = document.getElementById("products-container");

renderProducts(products);
function renderProducts(data) {
  productsContainer.innerHTML = "";
  data.forEach((item) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `<h3>${item.name}</h3>
            <p>${item.category}</p>
            <p>Price : <span>$${item.price}</span></p>`;

    productsContainer.appendChild(productCard);
  });
}
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function (e) {
  const searchValue = e.target.value?.trim().toLocaleLowerCase();

  if (searchValue) {
    const filterProducts = products.filter(
      (item) =>
        item.name.toLocaleLowerCase().includes(searchValue) ||
        item.category.toLocaleLowerCase().includes(searchValue)
    );
    renderProducts(filterProducts);
  } else {
    renderProducts(products);
  }
});
