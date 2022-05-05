import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner position-relative">
      <img
        src={"https://i.ibb.co/xfwJ5R9/assorted-mixed-fruits-1.png"}
        alt=""
        className=" "
        height="700px"
      />
      <div className="banner text-center w-50  shadow-lg p-4 mb-5 bg-body rounded container position-absolute top-100 start-50 translate-middle">
        <h3>Welcome</h3>
        <p className="w-50  mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          minima sit consequuntur necessitatibus eos harum perferendis non
          labore nostrum assumenda.
        </p>
        <button className="text-warning h6 border-0 bg-white">
          Read more..
        </button>
      </div>
    </div>
  );
};

export default Banner;
