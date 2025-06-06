import React from "react";
import { NavLink } from "react-router";

const Nav = () => {
  return (
    <div className="nav-container padding">
      <h1>Brads Dessert Diner</h1>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log-in</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
