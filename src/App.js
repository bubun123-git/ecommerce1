
import { Fragment, useState} from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import CartComponentSummary from './Components/CartComponent/CartComponentSummary';
import Cart from './Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <br/><br/><br/><br/>
      <CartComponentSummary />
    </Fragment>
  );
}

export default App;
