import React from "react";
import baklava from "../imgs/image-baklava-desktop.jpg";
import { FaShoppingCart } from "react-icons/fa";

const Item = () => {
  return (
    <div className="item-container">
      <img className="img-item-desktop" src={baklava} alt="" />
      <buttom className="btn btn-add-to-cart">
        <FaShoppingCart className="img-shopping-cart" />
        Add to Cart
      </buttom>
      <div className="item-info">
        <h3 className="item-title">Baklava</h3>
        <h2 className="item-description">Pistachio Baklava</h2>
        <h3 className="item-price">$4.00</h3>
      </div>
    </div>
  );
};

export default Item;
