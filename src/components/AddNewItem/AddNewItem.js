import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../socialmedia/Loading/Loading";

const AddNewItem = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  const addItem = async (event) => {
    event.preventDefault();
    const email = user.email;
    const img = event.target.img.value;
    const itemname = event.target.itemname.value;
    const description = event.target.description.value;
    const price = parseInt(event.target.price.value);
    const quantity = parseInt(event.target.quantity.value);
    const name = event.target.name.value;
    const sold = parseInt(event.target.sold.value);
    const addProduct = {
      email,
      img,
      itemname,
      description,
      price,
      quantity,
      name,
      sold,
    };
    // console.log(addProduct);
    const url = `https://mysterious-wildwood-76982.herokuapp.com/fruit`;
    const { data } = await axios.post(url, addProduct);
  };
  return (
    <div>
      <div className="w-50 mx-auto">
        <form className="display-table" onSubmit={addItem}>
          <input className="mb-1" name="img" type="text" placeholder="img" />
          <input
            className="mb-1"
            name="itemname"
            type="text"
            placeholder="itemname"
          />
          <textarea
            className="mb-1"
            name="description"
            placeholder="description"
          />
          <input
            className="mb-1"
            name="price"
            placeholder="price"
            type="number"
          />
          <input
            className="mb-1"
            name="quantity"
            placeholder="quantity"
            type="number"
          />
          <input className="mb-1" name="name" placeholder="suplier Name" />
          <input
            className="mb-1"
            name="sold"
            placeholder="sold"
            type="number"
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
