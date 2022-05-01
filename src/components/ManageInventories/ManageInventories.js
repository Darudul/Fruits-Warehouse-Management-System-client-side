import React, { useEffect, useState } from "react";
import useFruits from "../hooks/useFruits";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm();
  const onSubmit = (data,event) => {
    console.log(data);
    const url = "http://localhost:5000/fruit";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("item added");
        console.log(result);
        event.target.reset();
      });
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
      <div className="w-25 mt-5 ms-5 ">
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mb-1"
            type="text"
            placeholder="image"
            {...register("image")}
          />
          <input
            className="mb-1"
            placeholder="item name"
            {...register("name")}
          />
          <textarea
            className="mb-1"
            placeholder="description"
            {...register("description")}
          />
          <input
            className="mb-1"
            placeholder="price"
            type="number"
            {...register("price")}
          />
          <input
            placeholder="quantity"
            type="number"
            {...register("quantity")}
          />
          <input
            className="mb-1"
            placeholder="suplier Name"
            {...register("suplier name")}
          />
          <input
            className="mb-1"
            placeholder="sold"
            type="number"
            {...register("sold")}
          />
          <input className="mb-1" type="submit" value="Add new Item" />
        </form>
      </div>
    </div>
  );
};

export default ManageInventories;
