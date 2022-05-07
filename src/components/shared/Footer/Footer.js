import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaWhatsapp,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const follow = () => {
    navigate("");
  };
  return (
    <div className=" mt-5">
      <div className="background">
        <div className="footer-margin">
          <h4 className="text-white">Store Location</h4>
          <h6 className="text-white-50">Address:</h6>
          <p className="text-white-50">
            8, Jalan Bukit Pantai, 59100 Kuala Lumpur, Malaysia
          </p>
          <h6 className="text-white-50">Email</h6>
          <p className="text-white-50">darudulislam@gmail.com</p>
          <h6 className="text-white-50">Phone:</h6>
          <p className="text-white-50">+603-22960416</p>
        </div>
        <div className="margin">
          <h4 className="text-white">Useful Links</h4>
          <p className="text-white-50">About us</p>
          <p className="text-white-50">Blogs</p>
          <p className="text-white-50">Check out</p>
          <p className="text-white-50">Contact</p>
          <p className="text-white-50">Manage Inventories</p>
        </div>
        <div className="category mt-4">
          <h4 className="text-white">Categories</h4>
          <p className="text-white-50">Fruits</p>
          <p className="text-white-50">Package Foods</p>
          <p className="text-white-50">Health and Wellness</p>
        </div>
        <div className="hours mt-4">
          <h4 className="text-white">Opening Hours</h4>
          <h6 className="text-white-50">Monday-Saturday</h6>
          <p className="text-white-50">1200-14.45</p>
          <h6 className="text-white-50">Sunday</h6>
          <p className="text-white-50">15.00</p>
          <p className="copyrigh text-white-50">
            Follow Us:{" "}
            <span>
              <FaFacebookF />
            </span>
            <span className="ms-2">
              <FaInstagramSquare />
            </span>
            <span className="ms-2">
              <FaWhatsapp />
            </span>
          </p>
        </div>
        <p className="copyright text-white-50 ms-1">
          Copyright 2022, Groxi Store. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
