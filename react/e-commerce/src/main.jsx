import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import ProductContextProvider from "./context/ProductContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <AppRoutes />
      </CartContextProvider>
    </ProductContextProvider>
  </StrictMode>
);
