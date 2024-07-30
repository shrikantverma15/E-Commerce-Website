import React, { useEffect, useState } from "react";
import FeatureCart from "../Components/FeatureCart";
import Product from "../Products/Product";

const ProductCart = () => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <FeatureCart products={products.slice(0, 3)} />
      <Product products={products} />
    </div>
  );
};

export default ProductCart;
