import React from "react";
import { useNavigate } from "react-router";

const Product = ({ product }) => {
  const { _id, name } = product;
  const navigate = useNavigate();
  const fruitsDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="col-lg-4 mb-5">
      <div className="card ">
        {/* <img
          src={product.picture}
          className="card-img-top"
          alt="..."
          width="200px"
          height="200px"
        /> */}
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p>Price:</p>
          <p>Quantity:{product.quantity}</p>
          <p>Suplier Name:</p>
          <button onClick={() => fruitsDetail(_id)}>Stock Update</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
