import React from "react";
import { useForm } from "react-hook-form";

const AddNewItem = () => {
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

export default AddNewItem;
