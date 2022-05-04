import React from "react";
import "./ProductQuality.css";
const ProductQuality = () => {
  return (
    <div className="container quality-products">
      <div className="text-center">
        <img
          src={"https://i.ibb.co/s94ttyD/2203-W-1.jpg"}
          width="80px"
          alt=""
        />
        <h4>Quality Products</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed totam
          labore exercitationem cumque corporis maiores.
        </p>
        <img
          src={"https://i.ibb.co/RQjVWQP/382715-PCGRW9-187.jpg"}
          width="80px"
          alt=""
        />
        <h4>Fast Delivery</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed totam
          labore exercitationem cumque corporis maiores.
        </p>
      </div>
      <div>
        <img
          width="500px"
          src={
            "https://i.ibb.co/ZcCVw0r/young-woman-chooses-fruits-vegetables-supermarket.jpg"
          }
          alt=""
        />
        <button className="mt-5 bg-success bg-opacity-75 border border-success text-white fw-bold px-3 py-2 rounded-pill">
          SHOP NOW
        </button>
      </div>
      <div className="text-center">
        <img src={"https://i.ibb.co/gz38Syv/5739256.jpg"} width="80px" alt="" />
        <h4>Online Order</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed totam
          labore exercitationem cumque corporis maiores.
        </p>
        <img
          src={"https://i.ibb.co/0YTY3gb/SL-080420-33360-35.jpg"}
          width="100px"
          alt=""
        />
        <h4>24/7 Service</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed totam
          labore exercitationem cumque corporis maiores.
        </p>
      </div>
    </div>
  );
};

export default ProductQuality;
