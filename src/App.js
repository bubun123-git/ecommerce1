
import {  useState} from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import CartComponentSummary from './Components/CartComponent/CartComponentSummary';
import Cart from './Cart/Cart';
import CartProvider from './Store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <br/><br/><br/><br/>
      <CartComponentSummary />
    </CartProvider>
  );
}

export default App;
