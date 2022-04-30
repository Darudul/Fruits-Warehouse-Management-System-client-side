import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [fruit, setFruit] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/fruit/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  }, [fruit]);

  const deliveredFruit = (event) => {
    // let quant=1
    const newQuantity = fruit.quantity - 1;
    const quantity = { newQuantity };
    if (newQuantity < 0) {
      alert("quantity can not be negative");
    } else {
      const url = `http://localhost:5000/fruit/${inventoryId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(quantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("success", data);
        });
    }
  };
  return (
    <div className="text-center">
      <h3>this is inventory:{inventoryId}</h3>
      <p>{fruit.name}</p>
      <p>quantity: {fruit.quantity} </p>
      <button onClick={deliveredFruit}>Delivered</button>
    </div>
  );
};

export default Inventory;
