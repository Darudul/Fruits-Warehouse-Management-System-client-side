import React, { useEffect, useState } from "react";
import useFruits from "../hooks/useFruits";
import { useForm } from "react-hook-form";
import "./ManageInventories.css";

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
  const onSubmit = (data, event) => {
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
      <div className="ms-5 set-table">
        {fruitss.map((item) => (
          <div key={item._id}>
            <table className="zero" width="200px">
              <thead height="140px">
                <tr>
                  <th colSpan="2">
                    <img src={item.img} width="200px" height="150px" alt="" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-bold">Name:</td>
                  <td>{item.itemname}</td>
                </tr>
                <tr>
                  <td colSpan="2">{item.description}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Price:</td>
                  <td>{item.price}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Quantity:</td>
                  <td>{item.quantity}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Suplier Name:</td>
                  <td>{item.name}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Sold:</td>
                  <td>{item.sold}</td>
                </tr>
              </tbody>
            </table>
            <button
              className=" border-0 bg-warning p-2 rounded-pill text-success fw-bold px-4 ms-4"
              onClick={() => deleteItem(item._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="" className="add-item-form">
        <form className="display-table" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mb-1"
            type="text"
            placeholder="img"
            {...register("img")}
          />
          <input
            className="mb-1"
            placeholder="itemname"
            {...register("itemname")}
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
            className="mb-1"
            placeholder="quantity"
            type="number"
            {...register("quantity")}
          />
          <input
            className="mb-1"
            placeholder="suplier Name"
            {...register("name")}
          />
          <input
            className="mb-1"
            placeholder="sold"
            type="number"
            {...register("sold")}
          />
          <input
            className="mb-1 bg-secondary text-white border-0 p-2 rounded"
            type="submit"
            value="Add new Item"
          />
        </form>
      </div>
    </div>
  );
};

export default ManageInventories;
