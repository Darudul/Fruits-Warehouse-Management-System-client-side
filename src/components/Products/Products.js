import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const sliceProducts = products.slice(0, 6);
  useEffect(() => {
    fetch("http://localhost:5000/fruit")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <h2 className="latest-products">Latest products:{products.length}</h2>
      <div className="row">
        {sliceProducts.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
