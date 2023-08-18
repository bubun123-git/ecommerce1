import React from 'react';
import './ProductItem.module.css';
import { useContext } from 'react';
import CartContext from '../../Store/Cart-context';

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext)


    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.title,
            amount: amount,
            price: props.price
        });
    };

    return (
        <div>
            <li>
                <img src={props.imageUrl} alt={props.title} /> <br /><br />
                <h2>{props.title}</h2>
                <p style={{ color: "red" }}>Price: Rs {props.price}</p>
                <p>Quantity: {props.quantity}</p>
            </li>

            <button onClick={() => addToCartHandler(props.quantity)}>
                Add To Cart
            </button><br />
        </div>

    );
};


export default ProductItem;
