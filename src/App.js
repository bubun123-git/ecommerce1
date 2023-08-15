
import { Fragment } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import CartComponentSummary from './Components/CartComponent/CartComponentSummary';
import Cart from './Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <br/><br/><br/><br/>
      <CartComponentSummary/>
    </Fragment>
  );
}

export default App;
