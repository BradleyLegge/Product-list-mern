import React from "react";
import diner from "../imgs/diner-unsplash.jpg";

const Hero = () => {
  return (
    <div className="hero-container padding spacing">
      <img className="img-diner" src={diner} alt="" />
      <div className="hero-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          cumque ullam id ipsa odit nesciunt, eos accusantium eveniet expedita
          ducimus non quibusdam est architecto! Consequuntur temporibus dicta
          cupiditate distinctio quis.
        </p>
        <button className="hero-btn btn">About Us</button>
      </div>
    </div>
  );
};

export default Hero;
