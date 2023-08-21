
import { useState } from 'react';
import './App.css';
import Header from './layout/Header';
import Product from './Products/Product';
import Cart from './Cart/Cart';
import Cartprovider from './Store/CartProvider';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Homepage from './Pages/Home/Home';
import AboutPage from './Pages/About/About';

const routeDefinitions = createRoutesFromElements(

  <Route>
    <Route path="/Home" elements={<Homepage />} />
    <Route path="/Abouts" element={<AboutPage />} />


  </Route>
)

const router = createBrowserRouter(routeDefinitions)

// const router = createBrowserRouter([
//   { path: '/', element: <Homepage /> },
//   {
//     path: '/Abouts', element: <AboutPage />
//   }
// ])



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

        <main>
          <Product onClick={ShowCartHandler} />
        </main>

      </Cartprovider>
    </>

  );
}

export default App;