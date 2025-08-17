import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import AppContextProvider from "./context/AppContext.jsx";
import PostContextProvider from "./context/PostContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <PostContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostContextProvider>
    </AppContextProvider>
  </StrictMode>
);
