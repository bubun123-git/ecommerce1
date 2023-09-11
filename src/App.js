
import { useState } from 'react';
import './App.css';
import Header from './layout/Header';
import Product from './Products/Product';
import Cart from './Cart/Cart';
import Cartprovider from './Store/CartProvider';
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import Homepage from './Pages/Home/Home';
import AboutPage from './Pages/About/About';
import RootLayout from './Root';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import AuthForm from './Pages/Login/AuthForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/Home', element: <Homepage /> },
      { path: '/Abouts', element: <AboutPage /> },
      { path: '/Products', element: <Product /> },
      { path: '/Contact', element: <Contact /> },
      { path: '/Login', element: <AuthForm /> }
    ],
  },
]);


function App() {

  const [cartIsShown, setCartIsShown] = useState(false)
  const ShowCartHandler = () => {
    setCartIsShown(true)
  }

  function HideCartHandler() {
    setCartIsShown(false)
  }
  return (
    <>
      <Cartprovider>
        {cartIsShown && <Cart onClose={HideCartHandler} />}
        <Header onShowCart={ShowCartHandler} /> <br /><br /><br />
        <RouterProvider router={router} />
        <Footer />
      </Cartprovider>
    </>
  );
}

export default App;