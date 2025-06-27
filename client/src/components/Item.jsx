import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Item = ({ item, index }) => {
  const [addRemoveBtn, setAddRemoveBtn] = useState("true");
  const [orderAmount, setOrderAmount] = useState(0);
  const [cart, setCart] = useState([]);

  const handleAdd = (item) => {
    setOrderAmount(orderAmount + 1);
    setCart([...cart, item]);
    console.log(cart.length);
  };

  const handleSubtract = () => {
    if (orderAmount < 2) {
      setAddRemoveBtn(true);
    } else setOrderAmount(orderAmount - 1);
  };

  return (
    <div className="item-container">
      <img src={item.image.desktop} className="img-item-desktop" alt="" />
      {addRemoveBtn ? (
        <button
          onClick={() => setAddRemoveBtn(!addRemoveBtn)}
          className="btn btn-add-to-cart"
        >
          <FaShoppingCart className="img-shopping-cart" />
          Add to Cart
        </button>
      ) : (
        <div className="btn-add-remove-cart">
          <button onClick={handleSubtract} className="btn-subtract">
            -
          </button>
          <span>{orderAmount}</span>
          <button onClick={() => handleAdd(item)} className="btn-add">
            +
          </button>
        </div>
      )}

      <div className="item-info">
        <h3 className="item-title">{item.name}</h3>
        <h2 className="item-description">{item.category}</h2>
        <h3 className="item-price">{`$${item.price.toFixed(2)}`}</h3>
      </div>
    </div>
  );
};

export default Item;
