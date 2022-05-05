import React from "react";
import { useNavigate } from "react-router";
import "./Product.css";
const Product = ({ product }) => {
  const { _id, name } = product;
  const navigate = useNavigate();
  const fruitsDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="col-lg-4 col-12 welcome mb-5 ">
      <div className="card border rounded">
        <img
          src={product.img}
          className="image-style card-img-top"
          alt="..."
          width="200px"
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {product.itemname}</h5>
          <p className="card-text">{product.description}</p>
          <p>
            {" "}
            <span className="h5">Price:</span>
            {product.price}
          </p>
          <p>
            {" "}
            <span className="h5">Quantity:</span> {product.quantity}
          </p>
          <p>
            <span className="h6">Suplier Name:</span> {product.name}
          </p>
          <p>
            <span className="h6">Sold:</span> {product.sold}
          </p>
          <button
            onClick={() => fruitsDetail(_id)}
            className="border-0 bg-warning p-2 px-3 rounded-pill text-success fw-bold"
          >
            Stock Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
