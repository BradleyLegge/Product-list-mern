import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Items from "../components/Items";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Nav />
      <Items />
      <Footer />
    </div>
  );
};

export default ShopPage;
