const products = [
  {
    id: 1,
    name: "Apple iPhone 14",
    category: "Electronics",
    price: 75000,
    stock: 10,
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 68000,
    stock: 15,
  },
  {
    id: 3,
    name: "Dell Inspiron Laptop",
    category: "Computers",
    price: 55000,
    stock: 8,
  },
  {
    id: 4,
    name: "Nike Running Shoes",
    category: "Footwear",
    price: 5000,
    stock: 20,
  },
  {
    id: 5,
    name: "Adidas Sweatpants",
    category: "Clothing",
    price: 3000,
    stock: 25,
  },
  {
    id: 6,
    name: "Sony WH-1000XM4 Headphones",
    category: "Electronics",
    price: 25000,
    stock: 12,
  },
  {
    id: 7,
    name: "Bosch Microwave Oven",
    category: "Home Appliances",
    price: 15000,
    stock: 10,
  },
  {
    id: 8,
    name: "Casio Digital Watch",
    category: "Accessories",
    price: 2000,
    stock: 30,
  },
  {
    id: 9,
    name: "Canon EOS M50 Camera",
    category: "Cameras",
    price: 40000,
    stock: 5,
  },
  {
    id: 10,
    name: "Philips Blender",
    category: "Home Appliances",
    price: 3500,
    stock: 18,
  },
];

const productsContainer = document.querySelector("#products-container");
const cartContainer = document.querySelector("#cart-container");
const cartItemsContainer = document.querySelector("#cart-items-container");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add(
    "bg-white",
    "shadow",
    "rounded",
    "p-4",
    "m-2",
    "max-w-xs"
  );

  const productName = document.createElement("h3");
  productName.textContent = product.name;
  productName.classList.add("font-bold", "text-xl", "mb-2");
  productCard.appendChild(productName);

  const productCategory = document.createElement("p");
  productCategory.textContent = product.category;
  productCategory.classList.add("text-gray-600", "mb-1");
  productCard.appendChild(productCategory);

  const productPrice = document.createElement("p");
  productPrice.textContent = `₹${product.price}`;
  productPrice.classList.add("text-gray-800", "font-semibold", "mb-3");
  productCard.appendChild(productPrice);

  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.classList.add(
    "bg-blue-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded"
  );

  productCard.appendChild(addToCartBtn);
  productsContainer.appendChild(productCard);

  addToCartBtn.addEventListener("click", function (e) {
    const isExits = cartItems.find((p) => p.product.id === product.id);
    if (!isExits) {
      cartItems.push({ product, quantity: 1 });
    } else {
      const productIndex = cartItems.indexOf(isExits);
      cartItems[productIndex].quantity++;
    }

    renderCartItems();
    updateLocalStorage();

    this.disabled = true;
    this.textContent = "Added";
    this.classList.add(
      "bg-green-500",
      "hover:bg-green-800",
      "disabled:cursor-not-allowed"
    );

    setTimeout(() => {
      this.disabled = false;
      this.textContent = "Add to cart";
      this.classList.remove("bg-green-500", "hover:bg-green-800");
    }, [3000]);
  });
});

function updateLocalStorage() {
  if (cartItems.length === 0) {
    localStorage.removeItem("cartItems");
  } else {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
}

renderCartItems();

function renderCartItems() {
  cartItemsContainer.innerHTML = "";
  cartItems.forEach((item, index) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add(
      "cart-item",
      "p-5",
      "shadow",
      "rounded",
      "grid"
    );
    cartItemElement.style.gridTemplateColumns = "1fr 0.5fr 0.5fr";

    const nameElement = document.createElement("h3");
    nameElement.textContent = item.product.name;
    cartItemElement.appendChild(nameElement);

    const quantityContainer = document.createElement("div");
    quantityContainer.classList.add("flex", "items-center", "gap-3");

    const decrementBtn = document.createElement("button");
    decrementBtn.classList.add(
      "decrement-btn",
      "w-6",
      "h-6",
      "grid",
      "place-items-center",
      "border",
      "rounded"
    );
    decrementBtn.textContent = "-";
    quantityContainer.appendChild(decrementBtn);

    const quantityText = document.createElement("p");
    quantityText.classList.add("text-sm");
    quantityText.textContent = item.quantity;
    quantityContainer.appendChild(quantityText);

    const incrementBtn = document.createElement("button");
    incrementBtn.classList.add(
      "increment-btn",
      "w-6",
      "h-6",
      "grid",
      "place-items-center",
      "border",
      "rounded"
    );
    incrementBtn.textContent = "+";
    quantityContainer.appendChild(incrementBtn);

    cartItemElement.appendChild(quantityContainer);

    const priceElement = document.createElement("p");
    priceElement.classList.add("font-semibold");
    priceElement.textContent = `₹ ${item.product.price}`;
    cartItemElement.appendChild(priceElement);

    cartItemsContainer.appendChild(cartItemElement);

    cartItemElement.addEventListener("click", function (e) {
      if (e.target.classList[0] === "increment-btn") {
        if (item.quantity < item.product.stock) {
          cartItems[index].quantity++;
          updateLocalStorage();
          renderCartItems();
        }
      } else if (e.target.classList[0] === "decrement-btn") {
        if (item.quantity <= 1) {
          cartItems.splice(index, 1);
        } else {
          cartItems[index].quantity--;
        }
        updateLocalStorage();
        renderCartItems();
      }
    });
  });

  showCartTotal();
}

function showCartTotal() {
  cartContainer.querySelector("#total-display")?.remove();

  const { totalAmount, totalQuantity } = cartItems.reduce(
    (acc, curr) => {
      acc.totalAmount += curr.quantity * curr.product.price;
      acc.totalQuantity += curr.quantity;
      return acc;
    },
    { totalAmount: 0, totalQuantity: 0 }
  );
  const totalDisplay = document.createElement("div");
  totalDisplay.id = "total-display";
  totalDisplay.classList.add(
    "bg-gray-200",
    "p-4",
    "rounded",
    "mt-4",
    "text-center"
  );
  totalDisplay.innerHTML = `
      <p class="text-lg font-bold">Total Items: ${totalQuantity}</p>
      <p class="text-lg font-bold">Total Amount: ₹${totalAmount}</p>
    `;
  cartContainer.appendChild(totalDisplay);
}
