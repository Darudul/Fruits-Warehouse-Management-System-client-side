import React from "react";
import { useNavigate } from "react-router";
import Loading from "../../socialmedia/Loading/Loading";
import Banner from "../Banner/Banner";
import ProductQuality from "../ProductQuality/ProductQuality";
import Products from "../Products/Products";
import SaveMoney from "../SaveMoney/SaveMoney";
import Supliers from "../Supliers/Supliers";
import "./Home.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const ManageInventory = () => {
    navigate("/manage");
  };
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <SaveMoney></SaveMoney>
      <ProductQuality></ProductQuality>
      <Supliers></Supliers>
      <div className="style-home position-relative">
        <button
          onClick={ManageInventory}
          className="mb-2 position-absolute bottom-0 end-0 border-0 bg-success p-2 rounded-pill text-white px-3 fw-bold"
        >
          Manage Inventories
          <span className="ms-2">
            <FaLongArrowAltRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
