import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Items from "../components/Items";
import Cart from "../components/Cart";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Nav />
      <div className="shop-page-content">
        <Items />
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
