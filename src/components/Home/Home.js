import React from "react";
import { useNavigate } from "react-router";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  const navigate = useNavigate();
  const ManageInventory = () => {
    navigate("/manage");
  };
  return (
    <div className="container">
      <Banner></Banner>
      <Products></Products>
      <button onClick={ManageInventory}>Manage Inventories</button>
    </div>
  );
};

export default Home;
