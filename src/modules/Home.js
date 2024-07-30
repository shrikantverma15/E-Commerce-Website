import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import Product from "../Products/Product";
import FeatureCart from "../Components/FeatureCart";
import Statistics from "../Components/Statistics";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAndUpdateData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchAndUpdateData();
  }, []);

  return (
    <>
      <Hero />
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-3 uppercase text-center mt-20">
        Product
      </h3>
      <h2 className="text-gray-900 title-font text-lg font-medium text-center mt-20">
        Most Popular Product
      </h2>
      {products.length > 0 ? (
        <Product products={products} />
        
      ) : (
        <div>Loading....</div>
      )}
      <FeatureCart />
      <Statistics />
     
    </>
  );
};

export default Home;
