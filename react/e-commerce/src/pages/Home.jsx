import React from "react";
import { useSearchParams } from "react-router";
import { useProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import { useCartContext } from "../context/CartContext";

const Home = () => {
  const { products } = useProductContext();
  const { addToCart } = useCartContext();

  const [searchParams] = useSearchParams();
  const searchCategory = searchParams.get("category");

  const filteredProducts =
    searchCategory && searchCategory !== "All"
      ? products.filter(
          (product) =>
            product.category.toLowerCase() ===
            searchCategory.toLocaleLowerCase()
        )
      : products;

  return (
    <div className="container mx-auto px-4">
      {filteredProducts.length > 0 ? (
        <div>
          {/* <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => {
                  addToCart(product);
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-lg text-gray-500">No products found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
