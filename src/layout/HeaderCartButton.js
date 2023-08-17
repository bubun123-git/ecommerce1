import React, { useContext } from "react"; // Import React
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/Cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext); 

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
