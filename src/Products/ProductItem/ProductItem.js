import React from 'react';
import './ProductItem.module.css';


const ProductItem = (props) => {


    return (
        <div>
            <li>
                <img src={props.imageUrl} alt={props.title} /> <br /><br />
                <h2>{props.title}</h2>
                <p style={{ color: "red" }}>Price: Rs {props.price}</p>
                <p>Quantity: {props.quantity}</p>
            </li>

            <button>
                Add To Cart
            </button><br/>
        </div>

    );
};


export default ProductItem;
