import React from "react";
import { useNavigate } from "react-router";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import SaveMoney from "../SaveMoney/SaveMoney";

const Home = () => {
  const navigate = useNavigate();
  const ManageInventory = () => {
    navigate("/manage");
  };
  return (
    <div className="position-relative">
      <Banner></Banner>
      <Products></Products>
      <SaveMoney></SaveMoney>
      <button onClick={ManageInventory} className="position-absolute bottom-0 end-0 border-0 bg-success p-2 rounded-pill text-white px-3 fw-bold">Manage Inventories</button>
    </div>
  );
};

export default Home;
