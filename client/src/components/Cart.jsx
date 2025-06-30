import React from "react";
import emptyCart from "../imgs/illustration-empty-cart.svg";
import deleteIcon from "../imgs/icon-remove-item.svg";
import useCartStore from "../stores/cartStore";
import carbon from "../imgs/icon-carbon-neutral.svg";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeItem = useCartStore((state) => state.removeItem);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const getItemTotal = (itemCost, itemQuantity) => {
    return (itemCost * itemQuantity).toFixed(2);
  };
  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <div className="empty-cart-container">
          <h2 className="cart-header">Your Cart (0)</h2>
          <div className="empty-cart-info">
            <img src={emptyCart} className="img-empty-cart" alt="" />
            <p>Your added items will appear here</p>
          </div>
        </div>
      ) : (
        <div className="items-in-cart-container">
          <h2 className="cart-header">{`Your Cart (${totalQuantity})`}</h2>
          {cartItems.map((item) => (
            <div>
              <div className="cart-item-ordered">
                <div className="cart-item-content">
                  <p className="cart-item-name">{item.name}</p>
                  <div className="cart-item-info">
                    <p className="amount-ordered">{`${item.quantity}x`}</p>
                    <p className="item-cost">{`@ $${item.price.toFixed(2)}`}</p>
                    <p className="item-total-cost">{`$${getItemTotal(
                      item.price,
                      item.quantity
                    )}`}</p>
                  </div>
                </div>
                <button className="remove-item-btn">
                  <img
                    onClick={() => removeItem(item.id)}
                    src={deleteIcon}
                    alt=""
                  />
                </button>
              </div>
              <div className="divider"></div>
            </div>
          ))}
          <div className="order-total-container">
            <p className="order-total">Order Total</p>
            <p className="order-total-price">{`$${totalAmount.toFixed(2)}`}</p>
          </div>
          <div className="carbon-container">
            <img src={carbon} alt="" />
            <p className="carbon-info">
              This is a <span>carbon-neutral</span> delivery
            </p>
          </div>
          <button className="btn confirm-order-btn">Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
