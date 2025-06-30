import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import useCartShop from "../stores/cartStore";

const Item = ({ item }) => {
  const [count, setCount] = useState(0);
  const cartItems = useCartShop((state) => state.cartItems);
  const addToCart = useCartShop((state) => state.addToCart);

  return (
    <div className="item-container">
      <img src={item.image.desktop} className="img-item-desktop" alt="" />
      <button onClick={() => addToCart(item)} className="btn btn-add-to-cart">
        <FaShoppingCart className="img-shopping-cart" />
        Add to Cart
      </button>
      <div className="btn-add-remove-cart">
        <button className="btn-subtract">-</button>
        <span>{count}</span>
        <button className="btn-add">+</button>
      </div>

      <div className="item-info">
        <h3 className="item-title">{item.name}</h3>
        <h2 className="item-description">{item.category}</h2>
        <h3 className="item-price">{`$${item.price.toFixed(2)}`}</h3>
      </div>
    </div>
  );
};

export default Item;
