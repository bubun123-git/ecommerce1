
import { Fragment } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import CartComponentSummary from './Components/CartComponent/CartComponentSummary';


function App() {
  return (
    <Fragment>
      <Header/>
      <CartComponentSummary/>
    </Fragment>
  );
}

export default App;
