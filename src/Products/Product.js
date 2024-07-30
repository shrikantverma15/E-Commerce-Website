import React from "react";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4">
                <Link to={`/product/${product.id}`} className="shadow-lg p-4 rounded-lg h-full flex flex-col justify-between">
                  <div className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={product.title}
                      className="object-contain object-center w-full h-full block"
                      src={product.image}
                    />
                  </div>
                  <div className="mt-4 flex-grow">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                      {product.category ? product.category.toUpperCase() : "No Category"}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title}
                    </h2>
                    <p className="mt-1 font-bold">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">No products available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
