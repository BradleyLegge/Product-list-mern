import React from "react";

const Nav = () => {
  return (
    <div className="nav-container padding">
      <h1>Brads Dessert Diner</h1>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Log-in</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
