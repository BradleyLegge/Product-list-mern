import React from "react";
import emptyCart from "../imgs/illustration-empty-cart.svg";
import deleteIcon from "../imgs/icon-remove-item.svg";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="empty-cart-container">
        <h2 className="cart-header">Your Cart (0)</h2>
        <div className="empty-cart-info">
          <img src={emptyCart} className="img-empty-cart" alt="" />
          <p>Your added items will appear here</p>
        </div>
      </div>
      <div className="items-in-cart-container">
        <h2 className="cart-header">Your Cart (0)</h2>
        <div className="cart-item-ordered">
          <div className="cart-item-content">
            <p className="cart-item-name">Your item name</p>
            <div className="cart-item-info">
              <p className="amount-ordered">1x</p>
              <p className="item-cost">@$5.50</p>
              <p className="total-item-cost">$5.50</p>
            </div>
          </div>
          <img src={deleteIcon} alt="" />
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Cart;
