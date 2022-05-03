import React from "react";
import "./ProductQuality.css";
const ProductQuality = () => {
  return (
    <div className="container quality-products">
      <div className="text-center">
        <img src={"https://i.ibb.co/s94ttyD/2203-W-1.jpg"} width='100px' alt="" />
        <h4>Quality Products</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed totam
          labore exercitationem cumque corporis maiores.
        </p>
        <img src="" alt="" />
        <h4>Fast Delivery</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed totam
          labore exercitationem cumque corporis maiores.
        </p>
      </div>
      <div>
        <img
          width="400px"
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
        <img src="" alt="" />
        <h4>Quality Products</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed totam
          labore exercitationem cumque corporis maiores.
        </p>
        <img src="" alt="" />
        <h4>Fast Delivery</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed totam
          labore exercitationem cumque corporis maiores.
        </p>
      </div>
    </div>
  );
};

export default ProductQuality;
