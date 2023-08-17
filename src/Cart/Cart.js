import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItems = [
        { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
    ];

    const cartItemsList = cartItems.map((item) => (
        <li key={item.id}>
            {item.name} - Quantity: {item.amount} - Price: ${item.price.toFixed(2)}
        </li>
    ));

    function OrderHandler() {
        alert("Your Order is successful")
    }

    return (
        <Modal onClose={props.onClose}>
            <ul>{cartItemsList}</ul>
            <div>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div>
                <button onClick={props.onClose}>Close</button>
                <button onClick={OrderHandler}>Order</button>
            </div>

        </Modal>
    );
};

export default Cart;
