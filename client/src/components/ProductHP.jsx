import React from "react";
import diner from "../imgs/diner-unsplash.jpg";

const ProductHP = () => {
  return (
    <div className="productHP-container padding spacing">
      <img className="img-diner" src={diner} alt="" />
      <div className="productHP-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          cumque ullam id ipsa odit nesciunt, eos accusantium eveniet expedita
          ducimus non quibusdam est architecto! Consequuntur temporibus dicta
          cupiditate distinctio quis.
        </p>
        <button className="hero-btn btn">Shop</button>
      </div>
    </div>
  );
};

export default ProductHP;
