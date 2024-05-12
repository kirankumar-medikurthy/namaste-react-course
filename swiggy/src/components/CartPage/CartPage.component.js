import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../utils/Store/cartSlice";
import CategoryAccordian from "../CategoryAccordian/CategoryAccordian.component";

const CartPage = () => {
    // while you're using useSelector, only subscribe to the specific portion of the store
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartfun = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <p>Welcome to the cartpage</p>
      <button onClick={clearCartfun}>Clear Card</button>
      {cartItems?.length === 0 && <h3>cart is empty, please add items to the cart</h3>}
      {cartItems?.map((item) => (
        <div className="cart-item-container">
          <h1>{item?.card?.info.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
