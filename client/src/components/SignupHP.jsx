import React from "react";
import cake from "../imgs/cake-unsplash.jpg";

const SignupHP = () => {
  return (
    <div className="signupHP-container padding spacing">
      <div className="signupHP-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui est iusto
          incidunt, natus illo itaque? Voluptatibus quidem architecto,
          doloremque ut tempore neque amet molestiae sint laboriosam illo alias
          vitae facere iste nesciunt!
        </p>
        <button className="hero-btn btn">Sign Up</button>
      </div>
      <img className="img-cake" src={cake} alt="" />
    </div>
  );
};

export default SignupHP;
