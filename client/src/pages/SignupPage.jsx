import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Signup from "../components/Signup";

const SignupPage = () => {
  return (
    <div className="signup-page">
      <Nav />
      <Signup />
      <Footer />
    </div>
  );
};

export default SignupPage;
