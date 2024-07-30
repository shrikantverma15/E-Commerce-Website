import React, { useEffect, useState } from "react";
import FeatureCart from "./FeatureCart";
import Product from "../Products/Product";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndUpdateProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndUpdateProducts();
  }, []);

  if (loading) return <div>Loading....</div>;

  // Extract unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      <FeatureCart cards={categories} />
      
    </div>
  );
};

export default Categories;
