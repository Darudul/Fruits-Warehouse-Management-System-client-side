import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useFruits from "../hooks/useFruits";

const MyItems = () => {
  const [fruitss, setFruitss] = useFruits();
  const navigate = useNavigate();
  const addItem = () => {
    navigate("/addnewitem");
  };
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
      <h4>This is my item page</h4>
      <div className="ms-5 set-table">
        {fruitss.map((item) => (
          <div key={item._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Name: {item.name}</h5>
                <h6 className="card-subtitle mb-2">
                  Quantity: {item.quantity}
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className=" border-0 bg-warning p-1 rounded-pill text-success fw-bold px-4 "
                  onClick={() => deleteItem(item._id)}
                >
                  Manage Items
                </button>
                <button
                  className=" border-0 bg-success p-1 rounded-pill text-warning fw-bold px-4 ms-4"
                  onClick={() => addItem(item._id)}
                >
                  Add Item
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
