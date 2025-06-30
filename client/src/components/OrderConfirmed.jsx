import React from "react";
import orderConfirmed from "../imgs/icon-order-confirmed.svg";
import useCartStore from "../stores/cartStore";
import Shop from "../components/Items";

const OrderConfirmed = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalAmount = useCartStore((state) => state.getTotal());
  const getItemTotal = (itemCost, itemQuantity) => {
    return (itemCost * itemQuantity).toFixed(2);
  };

  return (
    <div className="order-confirmed-container">
      <img className="order-confirmed-icon" src={orderConfirmed} alt="" />
      <div className="order-confirmed-title">
        <h2 className="order-confirmed-h2">Order Confirmed</h2>
        <p className="order-confirmed-enjoy">We hope you enjoy your food!</p>
      </div>
      <div className="order-confirm-div-mega">
        {cartItems.map((i) => (
          <div key={i.id} className="order-confirm-div-z">
            <div className="order-confirm-div-a">
              <div className="order-confirm-div-b">
                <img
                  className="order-confirm-img"
                  src={i.image.thumbnail}
                  alt=""
                />
                <div className="order-confirm-div-c">
                  <p className="order-confirm-name">{i.name}</p>
                  <div className="order-confirm-div-d">
                    <p className="order-confirm-quantity">{`${i.quantity}x`}</p>
                    <p className="order-confirm-price">{`@ $${i.price.toFixed(
                      2
                    )}`}</p>
                  </div>
                </div>
              </div>
              <p className="order-confirm-item-total">{`$${getItemTotal(
                i.price,
                i.quantity
              )}`}</p>
            </div>
            <div className="order-confirmed-divider divider"></div>
          </div>
        ))}

        <p className="order-confirm-total">
          Order Total <span>{`$${totalAmount.toFixed(2)}`}</span>
        </p>
      </div>
      <button className="btn">Start New Order</button>
    </div>
  );
};

export default OrderConfirmed;
