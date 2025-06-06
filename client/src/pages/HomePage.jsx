import React from "react";
import Nav from "../components/Nav";
import ProductHP from "../components/ProductHP";
import SignupHP from "../components/SignupHP";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="homepage">
      <Nav />
      <ProductHP />
      <SignupHP />
      <Footer />
    </div>
  );
};

export default HomePage;
