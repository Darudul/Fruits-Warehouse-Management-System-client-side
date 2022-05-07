import React from "react";

const Contactus = () => {
  return (
    <div>
      <div className="w-25 container mt-5">
        <div className="mb-3">
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
          />
          <input
            type="email"
            className="form-control mt-2"
            id="exampleFormControlInput2"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="message"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
