import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./modules/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import ProductCart from "./modules/ProductCart";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Product from "./modules/ProductCart"; // Ensure this component exists

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductCart />} />
        <Route path="/products" element={<Product />} /> {/* Assuming this displays a list of products */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>404 - Page not found</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
