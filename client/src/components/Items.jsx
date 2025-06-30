import { FaShoppingCart } from "react-icons/fa";
import items from "../data.json";
import useCartShop from "../stores/cartStore";

const Items = () => {
  const addToCart = useCartShop((state) => state.addToCart);
  const decreaseQuantity = useCartShop((state) => state.decreaseQuantity);
  const increaseQuantity = useCartShop((state) => state.increaseQuantity);

  return (
    <div className="items-container padding spacing">
      {items.map((item) => (
        <div key={item.id} className="item-container">
          <img src={item.image.desktop} className="img-item-desktop" alt="" />
          <button
            onClick={() => addToCart(item)}
            className="btn btn-add-to-cart"
          >
            <FaShoppingCart className="img-shopping-cart" />
            Add to Cart
          </button>
          <div className="btn-add-remove-cart">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="btn-subtract"
            >
              -
            </button>
            <span>{}</span>
            <button
              onClick={() => increaseQuantity(item.id)}
              className="btn-add"
            >
              +
            </button>
          </div>

          <div className="item-info">
            <h3 className="item-title">{item.name}</h3>
            <h2 className="item-description">{item.category}</h2>
            <h3 className="item-price">{`$${item.price.toFixed(2)}`}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
