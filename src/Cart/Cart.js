import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../Store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const cartItemRemoveHandler= id => {
        
    }

    const cartItemAddHandler = item => {

    }
    const cartItemsList = cartCtx.items.map((item) => (
        <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />
    ));

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`; // Fixed the totalAmount line

    function orderHandler() {
        alert("Your Order is successful");
    }

    return (
        <Modal onClose={props.onClose}>
            <ul>{cartItemsList}</ul>
            <div>
                <span>Total Amount: {totalAmount}</span>
                
            </div>
            <div>
                <button onClick={props.onClose}>Close</button>
                <button onClick={orderHandler}>Order</button> {/* Changed OrderHandler to orderHandler */}
            </div>
        </Modal>
    );
};

export default Cart;


