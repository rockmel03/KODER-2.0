import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const toastId = toast.loading("Loading products...");
    try {
      const response = await axios.get("https://fakestoreapi.in/api/products");
      if (response.data?.status === "SUCCESS") {
        toast.success("Data fetched successfully");
        return response.data;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      toast.dismiss(toastId);
    }
  };

  const fetchProductById = async (id) => {
    const toastId = toast.loading("Loading product...");
    try {
      const response = await axios.get(
        `https://fakestoreapi.in/api/products/${id}`
      );
      console.log(response);
      if (response.data?.status === "SUCCESS") {
        toast.success("Product fetched successfully");
        return response.data;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      toast.dismiss(toastId);
    }
  };

  useEffect(() => {
    fetchData().then((productsResponse) => {
      if (productsResponse) {
        setProducts(productsResponse.products || []);
      }
    });
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, fetchProductById }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

export const useProductContext = () => useContext(ProductContext);
