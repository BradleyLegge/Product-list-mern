import React from "react";
import emptyCart from "../imgs/illustration-empty-cart.svg";
import deleteIcon from "../imgs/icon-remove-item.svg";
import useCartStore from "../stores/cartStore";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeItem = useCartStore((state) => state.removeItem);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

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
                    <p></p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="delete-btn"
                >
                  <img src={deleteIcon} alt="" />
                </button>
              </div>
              <div className="divider"></div>
            </div>
          ))}
          <div>
            <p>Order Total</p>
            <p>{`$${totalAmount.toFixed(2)}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
