import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="footer-container padding top">
      <h2>Brads Dessert Diner</h2>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="#">
          <FaFacebook className="social" />
        </a>
        <a href="#">
          <FaTwitter className="social" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
