import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { ProductProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);
