import CartContext from "./Cart-context"
import { useReducer } from "react"

const defaultCartState = {
    items: [],
    totalAmount: 0,
  };
  
  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
      const updatedItems = state.items.concat(action.item); 
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    if (action.type === "REMOVE") {
      const updatedItems = state.items.filter((item) => item.id !== action.id);
      const updatedTotalAmount = state.totalAmount - action.price;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    return defaultCartState;
  };
  
  function Cartprovider(props) {
    const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);
  
    const addItemToCartHandler = (item) => {
      dispatchAction({ type: "ADD", item: item }); 
    };
  
    const removeItemFromCartHandler = (id, price) => {
      dispatchAction({ type: "REMOVE", id: id, price: price }); 
    };
  
    const CartContextValue = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
    };
  
    return (
      <CartContext.Provider value={CartContextValue}>
        {props.children}
      </CartContext.Provider>
    );
  }
  
  export default Cartprovider;