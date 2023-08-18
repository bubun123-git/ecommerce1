import CartContext from "./Cart-context"
import { useReducer } from "react"

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemsIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    const updatedTotalAmount = state.totalAmount - action.price * action.amount; // Corrected the calculation here
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id, price, amount) => { // Added 'amount' parameter here
    dispatchAction({ type: "REMOVE", id: id, price: price, amount: amount });
  };

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider; // Changed 'Cartprovider' to 'CartProvider'