import React, { useEffect, useState } from "react";
import useFruits from "../hooks/useFruits";

const ManageInventories = () => {
  const [fruitss, setFruitss] = useFruits();
  const deleteItem = (id) => {
    const success = window.confirm("Are u want o delete");
    if (success) {
      const url = `http://localhost:5000/fruit/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const restItem = fruitss.filter((fruit) => fruit._id !== id);
          setFruitss(restItem);
        });
    }
  };

  return (
    <div>
      <h1>This is manage inventory page</h1>
      <div className="ms-5">
        {fruitss.map((item) => (
          <div key={item._id}>
            <h4>{item.name}</h4>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
