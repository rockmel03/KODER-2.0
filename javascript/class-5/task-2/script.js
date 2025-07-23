const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Headphones", category: "Electronics", price: 150 },
  { id: 3, name: "Coffee Maker", category: "Home Appliances", price: 80 },
  { id: 4, name: "Desk Chair", category: "Furniture", price: 200 },
  { id: 5, name: "Notebook", category: "Stationery", price: 5 },
  { id: 6, name: "Smartphone", category: "Electronics", price: 900 },
  { id: 7, name: "Blender", category: "Home Appliances", price: 60 },
  { id: 8, name: "Bookshelf", category: "Furniture", price: 120 },
  { id: 9, name: "Pen Set", category: "Stationery", price: 12 },
  { id: 10, name: "Monitor", category: "Electronics", price: 300 },
];

const productsContainer = document.querySelector("#products-container");
const searchInput = document.querySelector("#search");

renderProducts(products);

function renderProducts(products) {
  if (!Array.isArray(products)) return;

  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.id = product.id;
    productCard.style.border = "1px solid black";
    productCard.style.padding = "1rem";

    const titleElem = document.createElement("h3");
    titleElem.textContent = product.name;
    productCard.appendChild(titleElem);

    const categoryElem = document.createElement("p");
    categoryElem.textContent = product.category;
    productCard.appendChild(categoryElem);

    const priceElem = document.createElement("p");
    priceElem.textContent = "$" + product.price;
    productCard.appendChild(priceElem);

    productsContainer.appendChild(productCard);
  });
}

searchInput.addEventListener("input", (e) => {
  const searchQuery = e.target.value.toLowerCase();
  
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery)
    );
  });

  renderProducts(filteredProducts);
});
