import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import axios from 'axios';

const DummyElements = [
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
    },
];

const AvailableProduct = (props) => {
    const productList = DummyElements.map((item, index) => (
        <ProductItem
            key={index}
            id={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
        />
    ));

    // Function to send the products via Axios POST
    const addProductsToCart = () => {
        axios.post('https://crudcrud.com/api/689caeaa4a3e4174b36235b39d18c0be', DummyElements) 
            .then((response) => {

                console.log('Products added to cart successfully');
            })
            .catch((error) => {

                console.error('Error adding products to cart:', error);
            });
    };

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{productList}</ul>
            </Card> <br /><br />
            <button
                style={{ backgroundColor: '#008CBA' }}
                onClick={addProductsToCart} 
            >
                OPEN CART
            </button>
        </section>
    );
};

export default AvailableProduct;
