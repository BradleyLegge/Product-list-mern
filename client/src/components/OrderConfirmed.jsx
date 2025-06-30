import React from "react";
import orderConfirmed from "../imgs/icon-order-confirmed.svg";
import useCartStore from "../stores/cartStore";

const OrderConfirmed = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div>
      <img src={orderConfirmed} alt="" />
      <h2>Order Confirmed</h2>
      <h3>We hope you enjoy your food!</h3>
      {cartItems.map((i) => (
        <img src={i.image.mobile} alt="" />
      ))}
    </div>
  );
};

export default OrderConfirmed;
