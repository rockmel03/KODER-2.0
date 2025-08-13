import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useProductContext } from "../context/ProductContext";
import { Link, useNavigate } from "react-router";

const Header = () => {
  const { products } = useProductContext();

  const [searchedProducts, setSearchedProducts] = useState([]);
  const navigate = useNavigate();

  const onSearch = (query) => {
    if (query.trim() && products) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchedProducts(filteredProducts);
    } else {
      setSearchedProducts([]);
    }
  };

  return (
    <header>
      <div className="px-4 py-4 flex items-center justify-between">
        <SidebarTrigger />
        <div className="relative w-full max-w-sm">
          <SearchBar onSearch={onSearch} />

          <div className="absolute z-10 shadow w-full max-w-sm bg-white rounded ">
            <div className="flex flex-col gap-2">
              {searchedProducts.map((item) => (
                <button
                  onClick={() => {
                    navigate(`/products/${item.id}`);
                    setSearchedProducts([]);
                  }}
                  key={item.id}
                  className="flex items-center gap-2 px-2 py-1 text-start"
                >
                  <div className="w-12 aspect-square bg-zinc-200 rounded">
                    <img src={item.image} alt="" />
                  </div>
                  <p className="text-sm">
                    {item.title.length > 50
                      ? item.title.slice(0, 50) + "..."
                      : item.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
