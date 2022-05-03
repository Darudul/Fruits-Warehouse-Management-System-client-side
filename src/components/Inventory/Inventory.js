import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./Inventory.css";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [fruit, setFruit] = useState({});
  const navigate = useNavigate();
  const ManageInventory = () => {
    navigate("/manage");
  };

  useEffect(() => {
    const url = `http://localhost:5000/fruit/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  }, [fruit]);

  const deliveredFruit = () => {
    // let quant=1
    const newQuantity = parseInt(fruit?.quantity) - 1;
    const quantityy = { newQuantity };
    if (newQuantity < 0) {
      alert("quantity can not be negative");
    } else {
      const url = `http://localhost:5000/fruit/${inventoryId}`;
      console.log(url);
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(quantityy),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("success", data);
        });
    }
  };

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const numbers = event.target.items.value;
    const newQuantity = parseInt(fruit.quantity) + parseInt(numbers);
    const quantityy = { newQuantity };
    if (newQuantity < 0) {
      alert("quantity can not be negative");
    } else {
      const url = `http://localhost:5000/fruit/${inventoryId}`;
      console.log(url);
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(quantityy),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("success", data);
          event.target.reset();
        });
    }
  };
  return (
    <div className="position-relative">
      <div className="mb-5 container inventory-item">
        <div>
          <img className="" width="400px" src={fruit.img} alt="" />
        </div>

        <div>
          <p><span className="h5">Name:</span> {fruit.itemname}</p>
          <p className="card-text">{fruit.description}</p>
          <p>
            {" "}
            <span className="h5">Price:</span>
            {fruit.price}
          </p>
          <p>
            {" "}
            <span className="h5">Quantity:</span> {fruit.quantity}
          </p>
          <p>
            <span className="h6">Suplier Name:</span> {fruit.name}
          </p>
          <p>
            <span className="h6">Sold:</span> {fruit.sold}
          </p>
          <button
            onClick={deliveredFruit}
            className="border-0 bg-warning p-2 rounded-pill text-success px-3 fw-bold"
          >
            Delivered
          </button>
        </div>
      </div>
      <div>
        <>
          <form
            className="ms-4 w-25 mt-5 style-form"
            onSubmit={handleUpdateUser}
          >
            <input
              className="w-50 border border-secondary rounded"
              type="text"
              name="items"
              placeholder="Name"
              required
            />
            <br />
            <input className="w-50 border-0 bg-secondary text-white p-2 rounded" type="submit" value="Update User" />
          </form>
        </>
      </div>
      <button
        onClick={ManageInventory}
        className="mt-5 ms-5 border-0 bg-success p-2 rounded-pill text-white px-3 fw-bold position-absolute bottom-0 end-0 me-4"
      >
        Manage Inventories
      </button>
    </div>
  );
};

export default Inventory;
