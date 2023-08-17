const Cart = (props) => {
    const cartItems = [
        { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
    ];

    const cartItemsList = cartItems.map((item) => (
        <li key={item.id}>
            {item.name} - Quantity: {item.amount} - Price: ${item.price.toFixed(2)}
        </li>
    ));

    return (
        <div>
            <ul>{cartItemsList}</ul>
            <div>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div>
                <button>Close</button>
                <button>Order</button>
            </div>

        </div>
    );
};

export default Cart;
