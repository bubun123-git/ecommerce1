import classes from './AvailableMeals.module.css'

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
  
  const AvailableProduct = () => {
    const productList = DummyElements.map((item, index) => (
      <li key={index}>
        <img src={item.imageUrl} alt={item.title} /> <br/><br/>
        <h2>{item.title}</h2>
        <p style={{color: "red"}}>Price: Rs {item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </li>
    ));
  
    return (
      <section className={classes.meals}>
        <ul>{productList}</ul>
      </section>
    );
  };
  
  export default AvailableProduct;