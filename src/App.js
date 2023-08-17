
import { Fragment } from 'react';
import './App.css';
import Header from './layout/Header';
import Product from './Products/Product';

function App() {


  return (
    <Fragment>
      <Header></Header> <br/><br/><br/>
      <main>
        <Product />
      </main>
    </Fragment>
  );
}

export default App;