import React from 'react';
import '../CartComponent/CartComponentSummary.css'
import Card from '../UI/Card';
import { useRef } from 'react';


const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
];

const CartComponentSummary = (props) => {
    const amountInputRef = useRef()

    const SubmitHandler = event => {
        event.preventDefault()
    }

    const Cartlist = cartElements.map((item, index) => (
        <li key={index} className='prod-images' >
            <img src={item.imageUrl} alt={item.title} />


            <div>

                <h2 >{item.title}</h2>
                <p >Price: ${item.price}</p>
                <p >Quantity: {item.quantity}</p>
                <button>Add to Cart</button>
            </div>
        </li>
    ));

    return (
        <section>
            <Card>
                <ul className='prod-images + .prod-images'>
                    {Cartlist}
                    <br></br>
                    <button>Open Cart</button>
                </ul>
            </Card>

        </section>
    );
};

export default CartComponentSummary;