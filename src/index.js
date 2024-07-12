import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./components/Cart/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Layout />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
