
import { useState } from 'react';
import './App.css';
import Header from './layout/Header';
import Product from './Products/Product';
import Cart from './Cart/Cart';
import Cartprovider from './Store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)
  const ShowCartHandler = () => {
    setCartIsShown(true)
  }

  function HideCartHandler() {
    setCartIsShown(false)
  }
  return (
    <Cartprovider>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler}/> <br /><br /><br />
      <main>
        <Product onClick={ShowCartHandler} />
      </main>
    </Cartprovider>
  );
}

export default App;